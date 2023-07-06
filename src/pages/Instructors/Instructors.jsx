import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import PopulerInstructorsCard from "../Home/PopulerInstructors/PopulerInstructorsCard";
import InstructorCard from "./InstructorCard";


const Instructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: instructors = [], refetch } = useQuery(['instructors'], async () => {
        const res = await axiosSecure.get('/users/instructor')
        return res.data;
    })
    return (
        <div className='grid md:grid-cols-3 md:gap-10 gap-6 max-w-screen-xl mx-auto md:py-32 py-20 px-4 md:px-0'>
            {
                instructors.map((instructor, index) => <InstructorCard
                    key={index}
                    instructor={instructor}
                ></InstructorCard>)
            }
        </div>
    );
};

export default Instructors;