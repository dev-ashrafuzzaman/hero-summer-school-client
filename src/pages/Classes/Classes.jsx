
import useClasses from '../../hooks/useClasses';
import PopularClassessCard from '../Home/PopularClasses/PopularClassessCard';

const Classes = () => {
    const [classes] = useClasses();
    const approvedClasses = classes.filter((Aclass) => Aclass.status === 'approved');

    return (
    <>
        <div className='grid md:grid-cols-3 md:gap-10 gap-6 max-w-screen-xl mx-auto md:py-32 py-20 px-4 md:px-0'>
            {
                approvedClasses.map((popularClass, index) => <PopularClassessCard
                    key={index}
                    classes={popularClass}
                ></PopularClassessCard>)
            }
        </div>
    </>
    );
};

export default Classes;