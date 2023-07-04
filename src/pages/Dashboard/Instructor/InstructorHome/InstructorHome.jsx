import { Helmet } from "react-helmet-async";
import useAuth from "../../../../hooks/useAuth";
import useMyClassas from "../../../../hooks/useMyClasses";


const InstructorHome = () => {
    const { user } = useAuth();
    const [myClasses] = useMyClassas();

    return (
        <div className='w-full px-20 mt-10 h-full'>
             <Helmet>
                <title>Dashboard | Home</title>
            </Helmet>
            <div>
                <h3 className='font-bold text-2xl text-start'>Welcome Back! <span className='text-[#EC5082]'> {user.displayName}</span></h3>
            </div>
            <div className='grid xl:grid-cols-4 md:grid-cols-2 gap-6 mt-10'>
                <div className='flex justify-between items-center bg-gradient-to-r from-teal-500 to-teal-500/40 px-6 py-8 rounded-xl'>
                    <div>
                        <p className='text-xl font-semibold'>Added Classes</p>
                        <p className='text-4xl font-bold'>{myClasses.length}</p>
                    </div>
                    <img className='w-20 opacity-50' src="https://www.svgrepo.com/download/40913/classroom.svg" alt="" />
                </div>

                <div className='flex justify-between items-center bg-gradient-to-r from-cyan-500 to-cyan-500/40 px-6 py-8 rounded-xl'>
                    <div>
                        <p className='text-xl font-semibold'>Total Approved</p>
                        <p className='text-4xl font-bold'>{myClasses.filter(myclass => myclass.status === 'approved').length}</p>
                    </div>
                    <img className='w-20 opacity-50' src="https://cdn-icons-png.flaticon.com/512/4157/4157027.png" alt="" />
                </div>

                <div className='flex justify-between items-center bg-gradient-to-r from-indigo-500 to-indigo-500/40 px-6 py-8 rounded-xl'>
                    <div>
                        <p className='text-xl font-semibold'>Total Pending</p>
                        <p className='text-4xl font-bold'>{myClasses.filter(myclass => myclass.status === 'pending').length}</p>
                    </div>
                    <img className='w-20 opacity-50' src="https://cdn-icons-png.flaticon.com/512/2516/2516759.png" alt="" />
                </div>

                <div className='flex justify-between items-center bg-gradient-to-r from-yellow-500 to-yellow-500/40 px-6 py-8 rounded-xl'>
                    <div>
                        <p className='text-xl font-semibold'>Total Denied</p>
                        <p className='text-4xl font-bold'>{myClasses.filter(myclass => myclass.status === 'denied').length}</p>
                    </div>
                    <img className='w-20 opacity-50' src="https://cdn-icons-png.flaticon.com/512/157/157903.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default InstructorHome;