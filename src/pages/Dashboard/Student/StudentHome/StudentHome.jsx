import { Helmet } from "react-helmet-async";
import useSelected from "../../../../hooks/useSelected";
import useEnrolled from "../../../../hooks/useEnrolled";
import usePayment from "../../../../hooks/usePayment";
import useAuth from "../../../../hooks/useAuth";


const StudentHome = () => {
    const { user } = useAuth();
    const [selected] = useSelected();
    const [enrolled] = useEnrolled();
    const [payments] = usePayment();
    const totalPay = payments.reduce((sum, pay) => pay.price + sum, 0);
    return (
        <div className='w-full px-20 mt-10 h-full'>
            <div >
                <Helmet>
                    <title>Dashboard | Home</title>
                </Helmet>
                <div>
                    <h3 className='font-bold text-2xl text-start'>Welcome Back! <span className='text-[#EC5082]'> {user.displayName}</span></h3>
                </div>
                <div className='grid xl:grid-cols-4 md:grid-cols-2 gap-6 mt-10'>
                    <div className='flex justify-between items-center bg-gradient-to-r from-teal-500 to-teal-500/40 px-6 py-8 rounded-xl'>
                        <div>
                            <p className='text-xl font-semibold'>Selected Classes</p>
                            <p className='text-4xl font-bold'>{selected.length}</p>
                        </div>
                        <img className='w-20 opacity-50' src="https://www.svgrepo.com/download/40913/classroom.svg" alt="" />
                    </div>

                    <div className='flex justify-between items-center bg-gradient-to-r from-cyan-500 to-cyan-500/40 px-6 py-8 rounded-xl'>
                        <div>
                            <p className='text-xl font-semibold'>Total Enrolled</p>
                            <p className='text-4xl font-bold'>{enrolled.length}</p>
                        </div>
                        <img className='w-20 opacity-50' src="https://static.thenounproject.com/png/4777262-200.png" alt="" />
                    </div>

                    <div className='flex justify-between items-center bg-gradient-to-r from-pink-500 to-pink-500/40 px-6 py-8 rounded-xl'>
                        <div>
                            <p className='text-xl font-semibold'>Total Order</p>
                            <p className='text-4xl font-bold'>{payments.length}</p>
                        </div>
                        <img className='w-20 opacity-50' src="https://icons.veryicon.com/png/o/system/linear-chh/order-27.png" alt="" />
                    </div>

                    <div className='flex justify-between items-center bg-gradient-to-r from-yellow-500 to-yellow-500/40 px-6 py-8 rounded-xl'>
                        <div>
                            <p className='text-xl font-semibold'>Total Pay</p>
                            <p className='text-4xl font-bold'>{`$ ${totalPay}`}</p>
                        </div>
                        <img className='w-20 opacity-50' src="https://cdn-icons-png.flaticon.com/512/4827/4827568.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentHome;