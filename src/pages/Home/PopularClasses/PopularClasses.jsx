import { Link } from 'react-router-dom';
import useClasses from '../../../hooks/useClasses';
import PopularClassessCard from './PopularClassessCard';

const PopularClasses = () => {
    const [classes] = useClasses();
    const approvedClasses = classes.filter((Aclass) => Aclass.status === 'approved');
    const popularClasses = approvedClasses
        .sort((a, b) => b.totalEnroll - a.totalEnroll)
        .slice(0, 6);

    return (
        <>
            <div className='grid md:grid-cols-3 md:gap-10 gap-6 max-w-screen-xl mx-auto md:mt-32 my-10 px-4 md:px-0'>
                {
                    popularClasses.map((popularClass, index) => <PopularClassessCard
                        key={index}
                        classes={popularClass}
                    ></PopularClassessCard>)
                }


            </div>

            <div className='flex justify-center items-center mb-10'>
                <Link to="/classes"><button className='btn bg-[#EC5082] text-white '>Show all</button></Link>
            </div>
        </>
    );
};

export default PopularClasses;