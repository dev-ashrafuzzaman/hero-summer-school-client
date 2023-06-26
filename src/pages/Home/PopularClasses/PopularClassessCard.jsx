
const PopularClassessCard = ({ popularClass }) => {
    const { name, image, instructorName, availableSeats, price ,totalEnroll } = popularClass;
    return (
        <div>
            <div className={`card bg-base-100 shadow-xl border-2   ${availableSeats === 0 ? 'border-2 border-red-400' : 'border-white'}`}>
                <div className='bg-red-500  pb-8 flex flex-col items-center justify-end h-[250px] rounded-2xl bg-cover' style={{
                    backgroundImage: `url(${image})`
                }}>
                    <div>
                        <div className='flex justify-center items-center gap-4 '>
                            <div className={`bg-white p-2 rounded-lg border-2 ${availableSeats === 0 ? 'border-red-500 bg-[#fff2f6] ' : ''} hover:border-2 hover:border-[#EC5082] hover:bg-[#fff2f6]`}>
                                <p>Available Seat:  <span className='font-bold'> {availableSeats}</span></p>
                            </div>
                            <div className='bg-white p-2 rounded-lg border-2 hover:border-2 hover:border-[#BAD650] hover:bg-[#fafdef]'>
                                <p>Course Price: <span className='font-bold'>${price}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body space-y-2">
                    <h2 className="text-3xl font-semibold">{name}</h2>
                    <p className='text-xl text-[#5D5E5E]'>Instructor: {instructorName} Total Enroll: {totalEnroll}</p>
                    <div className="card-actions justify-end">
                        <button className={`btn main-color-bg w-full font-bold text-xl text-white`} disabled={availableSeats === 0 ? true : false} >Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularClassessCard;
//  {
//     name: 'English Spoken',
//     image: 'https://i.ibb.co/7Q9WCRX/card-cover.png',
//     instructorName: 'Nusrat Jahan',
//     availableSeats: 30,
//     price: 1500,
// }