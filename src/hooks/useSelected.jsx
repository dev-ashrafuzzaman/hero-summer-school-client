import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useSelected = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: selected = [] } = useQuery({
        queryKey: ['selected', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/selected?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })
    return [selected, refetch]
};

export default useSelected;