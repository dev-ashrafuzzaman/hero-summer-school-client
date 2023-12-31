import { useQuery } from "@tanstack/react-query";

const useClasses = () => {

    const { data: classes = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('https://server.udvabonibd.com/classes');
            return res.json();
        }
    })

    return [classes, refetch, loading]
};

export default useClasses;