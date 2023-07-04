import "./PopularInstroctor.css"
import { MdVerified, MdOutlineMail } from 'react-icons/md';
import { RiPresentationLine } from 'react-icons/ri';
const PopulerInstructorsCard = ({ instructor }) => {
    const {
        name,
        image,
        email,
        classTaken,
    } = instructor;
    return (
        <div>
            {/* Dextop Content */}
            <div className="hidden md:block icon-image relative h-[25px] w-[25px] md:h-[70px]   md:w-[70px] md:mx-3 mx-1 cursor-pointer shadow shadow-black bg-white rounded-full ">
                <div className="icon ">
                    <img className="absolute" src={image} alt="" />
                </div>
                <div className="hover-image one absolute h-[350px] md:w-[300px] w-[150px] ">
                    <div className="img">
                        <img src={image} alt="" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <div className="name flex justify-center items-center gap-2">{name}<MdVerified className="main-color-text"></MdVerified></div>
                            <div className="job flex justify-center items-center gap-2"><MdOutlineMail></MdOutlineMail> {email} <span className="badge badge-outline font-bold border-[#BAD650] bg-[#f7faeb]"><RiPresentationLine className="text-black"></RiPresentationLine> {classTaken}</span></div>
                            <button className="badge badge-outline font-bold text-white main-color-bg">See Classes</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Content */}
            <div className="blcok md:hidden border-2 border-white card bg-base-100 shadow-xl">
                <div className='bg-red-500  pb-8 flex flex-col items-center justify-end h-[250px] rounded-2xl bg-cover bg-center'
                    style={{
                        backgroundImage: `url(${image})`
                    }}
                >

                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div><MdVerified className="main-color-text"></MdVerified></div>
                    </h2>
                    <p className="flex justify-start items-center gap-2"><MdOutlineMail></MdOutlineMail> {email}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline font-bold border-[#BAD650] bg-[#f7faeb]"><RiPresentationLine></RiPresentationLine> {classTaken}</div>
                        <button className="badge badge-outline font-bold text-white main-color-bg">See Classes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopulerInstructorsCard;