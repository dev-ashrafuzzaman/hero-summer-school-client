import useCourse from '../../../hooks/useCourse';
import PopularClassessCard from './PopularClassessCard';

const PopularClasses = () => {
    const [courses] = useCourse();
    const popularCourse = courses
    .sort((a, b) => b.totalEnroll - a.totalEnroll)
    .slice(0, 6);

    return (
        <div className='grid md:grid-cols-3 md:gap-10 gap-6 max-w-screen-xl mx-auto md:my-32 my-10 px-4 md:px-0'>
            {
                popularCourse.map((popularClass , index) => <PopularClassessCard
                key={index}
                popularClass={popularClass}
                ></PopularClassessCard>)
            }
            
        </div>
    );
};

export default PopularClasses;