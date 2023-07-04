import { Link } from "react-router-dom";



const MyEnrolledClassCard = ({ enrolledClasses }) => {
    console.log(enrolledClasses)
    const { name, image, instructorName } = enrolledClasses;
    return (
        <div>
            <div>
                <div className={`card bg-base-100 shadow-xl border-2`}>
                    <div className='bg-red-500  pb-8 flex flex-col items-center justify-end h-[250px] rounded-2xl bg-cover' style={{
                        backgroundImage: `url(${image})`
                    }}>

                    </div>
                    <div className="card-body space-y-2">
                        <h2 className="text-3xl font-semibold">{name}</h2>
                        <p className='text-xl text-[#5D5E5E]'>Instructor: {instructorName}</p>
                        <div className="flex justify-center items-center gap-4 font-semibold">
                            <progress className="progress progress-success w-full" value="70" max="100"></progress>
                            <p>70%</p>
                        </div>
                        <p className="text-sm text-slate-400">Progress bar dynamic and more technology will be added in future</p>
                        <div className="card-actions justify-end">
                            <Link to="/dashboard/student/class-player" className={`btn main-color-bg w-full font-bold text-xl text-white`}>Continue</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyEnrolledClassCard;