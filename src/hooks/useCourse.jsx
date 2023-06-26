import { useQuery } from "@tanstack/react-query";

const useCourse = () => {

    const {data:courses =[], isLoading: loading , refetch} = useQuery({
        queryKey:['courses'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/course');
            return res.json();
        }
    })

    return [courses , loading , refetch]
};

export default useCourse;