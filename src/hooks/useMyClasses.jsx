import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useMyClassas = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: myClasses = [] } = useQuery({
        queryKey: ['myClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/myClasses?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })
    return [myClasses, refetch]
};

export default useMyClassas;