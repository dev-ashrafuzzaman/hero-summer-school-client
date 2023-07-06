import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFrom from "./CheckoutFrom";
import { useLocation } from "react-router-dom";

// TODO: Strip key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);


const SinglePayment = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const myClassParam = searchParams.get('myClass');
    const myClass = myClassParam ? JSON.parse(decodeURIComponent(myClassParam)) : null;

    console.log("0", myClass)

    return (
        <div className="w-full">
            <Elements stripe={stripePromise}>
                <CheckoutFrom
                    selected={[myClass]}
                    price={myClass.price}
                ></CheckoutFrom>
            </Elements>
        </div>
    );
};

export default SinglePayment;