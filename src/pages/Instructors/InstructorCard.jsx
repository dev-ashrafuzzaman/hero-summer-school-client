import { MdOutlineMail, MdVerified } from "react-icons/md";
import { RiPresentationLine } from "react-icons/ri";

const InstructorCard = ({ instructor }) => {
    const {
        name,
        image,
        email,
        classTaken,
    } = instructor;
    return (
        <>
            <div className="border-2 border-white card bg-base-100 shadow-xl">
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
        </>
    );
};

export default InstructorCard;