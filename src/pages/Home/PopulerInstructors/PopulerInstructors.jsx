import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import "./PopularInstroctor.css"
import PopulerInstructorsCard from "./PopulerInstructorsCard";

const PopulerInstructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: instructor = [] } = useQuery(['instructor'], async () => {
        const res = await axiosSecure.get('/users/instructor')
        return res.data;
    })
    return (
        <>
            <div className="bg-[#121220] py-10 md:p-10 px-2 md:mb-36 mb-10" >
                <div className="flex justify-center items-center">
                    <h3 className="divider  md:w-1/2  sec-color-text text-center md:text-4xl text-3xl mb-10  font-bold "><span className="border-2 p-2 rounded-full ">Popular Instructors</span></h3>
                </div>
                <div className=" md:h-[500px] grid grid-cols-1 gap-5 md:flex md:justify-center md:items-end ">

                    {
                        instructor.map((instructor, index) => <PopulerInstructorsCard
                            key={index}
                            instructor={instructor}
                        ></PopulerInstructorsCard>)
                    }

                </div>
            </div>
        </>
    );
};

export default PopulerInstructors;