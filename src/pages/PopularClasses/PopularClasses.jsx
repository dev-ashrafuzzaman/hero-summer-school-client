
import PopularClassessCard from './PopularClassessCard';

const testfakdata = [

    {
        name: 'English Spoken',
        image: 'https://i.ibb.co/bQ6nyVj/Japanese-Landscape.png',
        instructorName: 'Nusrat Jahan',
        availableSeats: 30,
        price: 30,
    },
    {
        name: 'English Spoken',
        image: 'https://i.ibb.co/bQ6nyVj/Japanese-Landscape.png',
        instructorName: 'Nusrat Jahan',
        availableSeats: 0,
        price: 18,
    },
    {
        name: 'English Spoken',
        image: 'https://i.ibb.co/bQ6nyVj/Japanese-Landscape.png',
        instructorName: 'Nusrat Jahan',
        availableSeats: 30,
        price: 36,
    },
    {
        name: 'English Spoken',
        image: 'https://i.ibb.co/bQ6nyVj/Japanese-Landscape.png',
        instructorName: 'Nusrat Jahan',
        availableSeats: 30,
        price: 120,
    },
    {
        name: 'English Spoken',
        image: 'https://i.ibb.co/bQ6nyVj/Japanese-Landscape.png',
        instructorName: 'Nusrat Jahan',
        availableSeats: 30,
        price: 180,
    },
    {
        name: 'English Spoken',
        image: 'https://i.ibb.co/bQ6nyVj/Japanese-Landscape.png',
        instructorName: 'Nusrat Jahan',
        availableSeats: 30,
        price: 90,
    }

] 

const PopularClasses = () => {
    return (
        <div className='grid md:grid-cols-3 md:gap-10 gap-6 max-w-screen-xl mx-auto md:my-32 my-10 px-4 md:px-0'>
            {
                testfakdata.map((popularClass , index) => <PopularClassessCard
                key={index}
                popularClass={popularClass}
                ></PopularClassessCard>)
            }
            
        </div>
    );
};

export default PopularClasses;