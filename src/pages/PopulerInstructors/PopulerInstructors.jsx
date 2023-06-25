import "./PopularInstroctor.css"
import PopulerInstructorsCard from "./PopulerInstructorsCard";
import bgimg from '../../assets/bg/cool-background.svg'

const popularInstructor = [

    {
        name: 'Nusrat Jahan',
        profileImg: 'https://i.ibb.co/cJcWfrd/Arabic-Teacher.png',
        email: 'nus@herola.com',
        classTaken: 3,
        takenClessName: [
            'English Language',
            'Bangla Language',
            'Japanes Language'
        ]
    },

    {
        name: 'Nusrat Jahan',
        profileImg: 'https://i.ibb.co/cJcWfrd/Arabic-Teacher.png',
        email: 'nus@herola.com',
        classTaken: 3,
        takenClessName: [
            'English Language',
            'Bangla Language',
            'Japanes Language'
        ]
    },

    {
        name: 'Nusrat Jahan',
        profileImg: 'https://i.ibb.co/cJcWfrd/Arabic-Teacher.png',
        email: 'nus@herola.com',
        classTaken: 3,
        takenClessName: [
            'English Language',
            'Bangla Language',
            'Japanes Language'
        ]
    },

    {
        name: 'Nusrat Jahan',
        profileImg: 'https://i.ibb.co/cJcWfrd/Arabic-Teacher.png',
        email: 'nus@herola.com',
        classTaken: 3,
        takenClessName: [
            'English Language',
            'Bangla Language',
            'Japanes Language'
        ]
    },

    {
        name: 'Nusrat Jahan',
        profileImg: 'https://i.ibb.co/cJcWfrd/Arabic-Teacher.png',
        email: 'nus@herola.com',
        classTaken: 3,
        takenClessName: [
            'English Language',
            'Bangla Language',
            'Japanes Language'
        ]
    },

    {
        name: 'Nusrat Jahan',
        profileImg: 'https://i.ibb.co/cJcWfrd/Arabic-Teacher.png',
        email: 'nus@herola.com',
        classTaken: 3,
        takenClessName: [
            'English Language',
            'Bangla Language',
            'Japanes Language'
        ]
    },


]
const PopulerInstructors = () => {
    return (
        <>
            {/* style={{
                    backgroundImage: `url(${bgimg})`
                }} */}

            <div className="bg-[#121220] py-10 md:p-10 px-2 my-20" >
                <div className="flex justify-center items-center">
                    <h3 className="divider  md:w-1/2  sec-color-text text-center md:text-4xl text-3xl mb-10  font-bold "><span className="border-2 p-2 rounded-full ">Popular Instructors</span></h3>
                </div>
                <div className=" md:h-[500px] grid grid-cols-1 gap-5 md:flex md:justify-center md:items-end ">

                    {
                        popularInstructor.map((instructor, index) => <PopulerInstructorsCard
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