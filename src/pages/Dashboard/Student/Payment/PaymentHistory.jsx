import { Helmet } from "react-helmet-async";
import usePayment from "../../../../hooks/usePayment";
import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SocialLogin/SectionTitle/SectionTitle";

const PaymentHistory = () => {
    const [payments] = usePayment();
    const [sortedPayments, setSortedPayments] = useState([]);

    useEffect(() => {
        const sorted = [...payments].sort(
            (a, b) => new Date(b.date) - new Date(a.date)
        );
        setSortedPayments(sorted);
    }, [payments]);


    return (
        <div className="w-full py-10 px-10">
            <Helmet>
                <title>Dashboard | Payment History</title>
            </Helmet>
            <SectionTitle heading={"Payment History"}></SectionTitle>

            <div className="overflow-x-auto rounded-s-2xl rounded-e-2xl">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#EC5082] text-white uppercase font-bold  ">
                        <tr>
                            <th>
                                <label>#</label>
                            </th>
                            <th>Transaction Id</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Status</th>
                            <th>Pay Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedPayments.map((myClass, index) => (
                            <tr
                                className="hover:bg-[#ec508113]"
                                key={myClass._id}
                            >
                                <th>
                                    <label>{index + 1}</label>
                                </th>
                                <td>
                                    <div className="font-bold ">
                                        {myClass.transactionId}
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold ">{myClass.quantity}</div>
                                </td>
                                <td className="">
                                    <p className='bg-[#EC5082] text-white px-2 rounded-full w-[80px] font-bold text-end'>$ {myClass.price}</p>
                                </td>
                                <td>
                                    <div className={`font-bold rounded-full text-center  p-2 w-[80px] ${myClass.status === 'pending' ? 'bg-red-50 text-red-700' : 'bg-green-100 text-green-700'}`}>{myClass.status}</div>
                                </td>
                                <td>
                                    <div className="font-bold ">
                                        Date: {myClass.date.slice(2, 10)}{" "}
                                        <p className='text-[#EC5082]'>
                                            Time: {myClass.date.slice(11, 19)}s
                                        </p>
                                    </div>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;