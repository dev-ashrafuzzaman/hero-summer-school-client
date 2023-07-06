import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';
import useSelected from '../../../../hooks/useSelected';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaRegWindowRestore } from 'react-icons/fa';
import SectionTitle from '../../../../components/SocialLogin/SectionTitle/SectionTitle';


const CheckoutFrom = ({ selected, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState('');
    const [sucessMessage, setSucessMessage] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const { user } = useAuth();
    const [processing, setProcessing] = useState(false)
    const [, refetch] = useSelected();
    const navigate = useNavigate();



    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure]);



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setErrorMessage(error.message)
            setSucessMessage('')
        }
        else {
            setErrorMessage('')
        }
        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'unknown',
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError.message);
            setErrorMessage(confirmError.message);
            setSucessMessage('')
        }
        console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            const transactionId = paymentIntent.id;
            setSucessMessage(`Payment Complete Your Trx ID: ${transactionId}`);

            const payment = {
                email: user?.email,
                transactionId,
                price,
                progress: 0,
                date: new Date(),
                quantity: selected.length,
                selectedClasses: selected.map(myClass => myClass._id),
                classes: selected.map(myClass => myClass.classesId),
                status: 'success',
                className: selected.map(myClass => myClass.name)
            }

            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertResult.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your Payment has been Complete',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/dashboard/student/payment-history')
                    }
                })
        }
    }



    return (
        <>
            <SectionTitle heading={"Please Payment"}></SectionTitle>
            <form className="w-1/2 m-20 bg-green-50 mx-auto p-10 rounded-lg" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className="btn btn-success mt-10 text-2xl text-white w-[120px]" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {
                errorMessage && <p className=" flex justify-center items-center gap-2 text-red-500 font-semibold w-1/2 m-20 bg-red-50 mx-auto p-10 rounded-lg"><FaRegWindowRestore></FaRegWindowRestore>{errorMessage}</p>
            }
            {
                sucessMessage && <p className=" flex justify-center items-center gap-2 text-green-500 font-semibold w-1/2 m-20 bg-green-50 mx-auto p-10 rounded-lg"><FaRegWindowRestore></FaRegWindowRestore>{sucessMessage}</p>
            }
            <div className='flex justify-center '>
                <p className='font-bold text-[#EC5082]'>Demo Card: <span className='font-semibold text-black'>4242 4242 4242 4242</span></p>
            </div>
        </>
    );
};

export default CheckoutFrom;