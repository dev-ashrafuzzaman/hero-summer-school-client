import useClasses from '../../../hooks/useClasses';
import PopularClassessCard from './PopularClassessCard';

const PopularClasses = () => {
    const [classes] = useClasses();
    const approvedClasses = classes.filter((Aclass) => Aclass.status === 'approved');
    const popularClasses = approvedClasses
    .sort((a, b) => b.totalEnroll - a.totalEnroll)
    .slice(0, 6);

    return (
        <div className='grid md:grid-cols-3 md:gap-10 gap-6 max-w-screen-xl mx-auto md:my-32 my-10 px-4 md:px-0'>
            {
                popularClasses.map((popularClass , index) => <PopularClassessCard
                key={index}
                classes={popularClass}
                ></PopularClassessCard>)
            }
            
        </div>
    );
};

export default PopularClasses;