import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const usePayment = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/payment?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })
    return [payments, refetch]
};

export default usePayment;