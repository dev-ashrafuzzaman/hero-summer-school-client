import { FaPhoneAlt } from "react-icons/fa";


const CallSection = () => {
    return (
        <div className="bg-[#111827] md:my-32 my-10 md:mx-auto max-w-screen-xl md:px-20 px-2 md:py-10 py-2 mx-2 rounded-2xl flex justify-between items-center">
            <div>
                <h3 className="md:text-4xl font-bold text-white">Call for any information</h3>
                <p className="md:text-2xl text-slate-400 font-semibold">8 am to 11 pm</p>
            </div>
            <button className="btn main-color-bg text-white font-bold w-[120px]"><FaPhoneAlt></FaPhoneAlt>16999</button>
        </div>
    );
};

export default CallSection;