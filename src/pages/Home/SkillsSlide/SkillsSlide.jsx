import { MdVerifiedUser } from "react-icons/md";


const SkillsSlide = () => {
    return (
        <div className='bg-black py-20 text-slate-200'>
            <div className='mx-auto max-w-screen-xl  px-2'>
                <p className="text-3xl font-bold text-center mb-2 ">The best skill development platform in the country</p>
                <div className="flex justify-center items-center gap-10 mb-10">
                    <p className="flex items-center gap-1"><MdVerifiedUser className="text-blue-500"></MdVerifiedUser> Best Teacher</p>
                    <p className="flex items-center gap-1"><MdVerifiedUser className="text-blue-500"></MdVerifiedUser> 5 lakh+ students</p>
                    <p className="flex items-center gap-1"><MdVerifiedUser className="text-blue-500"></MdVerifiedUser> 70+ online courses</p>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-2">
                    <div className="bg-[#1C2741] px- py-10 text-center rounded-2xl border-2 hover:border-green-600">
                        <p className="text-xl font-semibold">Language Learning Courses</p>
                        <p>10 Courses</p>
                    </div>
                    <div className="bg-[#1C2741] px- py-10 text-center rounded-2xl border-2 hover:border-green-600">
                        <p className="text-xl font-semibold">Skills & IT Courses</p>
                        <p>12 Courses</p>
                    </div>
                    <div className="bg-[#1C2741] px- py-10 text-center rounded-2xl border-2 hover:border-green-600">
                        <p className="text-xl font-semibold">Career Readiness</p>
                        <p>1 Courses</p>
                    </div>
                    <div className="bg-[#1C2741] px- py-10 text-center rounded-2xl border-2 hover:border-green-600">
                        <p className="text-xl font-semibold">Bundle</p>
                        <p>12 Courses</p>
                    </div>
                    <div className="bg-[#1C2741] px- py-10 text-center rounded-2xl border-2 border-green-600 hover:border-white">
                        <p className="text-xl font-semibold">Freelancing Courses</p>
                        <p>6 Courses</p>
                    </div>
                    <div className="bg-[#1C2741] px- py-10 text-center rounded-2xl border-2 border-green-600 hover:border-white">
                        <p className="text-xl font-semibold">Design & Creative Courses</p>
                        <p>9 Courses</p>
                    </div>
                    <div className="bg-[#1C2741] px- py-10 text-center rounded-2xl border-2 border-green-600 hover:border-white">
                        <p className="text-xl font-semibold">Kids' Courses (Age 7-14)</p>
                        <p>4 Courses</p>
                    </div>
                    <div className="bg-[#1C2741] px- py-10 text-center rounded-2xl border-2 border-green-600 hover:border-white">
                        <p className="text-xl font-semibold">Professional Courses</p>
                        <p>11 Courses</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsSlide;