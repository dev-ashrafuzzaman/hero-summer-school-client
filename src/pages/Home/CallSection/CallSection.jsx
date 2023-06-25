import { FaPhone } from "react-icons/fa";


const CallSection = () => {
    return (
        <div className="bg-[#111827] my-32 mx-auto max-w-screen-xl px-20 py-10 rounded-2xl flex justify-between items-center">
            <div>
                <h3 className="text-4xl font-bold text-white">Call for any information regarding the course</h3>
                <p className="text-2xl text-slate-400 font-semibold">8 am to 11 pm</p>
            </div>
            <button className="btn main-color-bg text-white font-bold w-[120px]"><FaPhone></FaPhone>16999</button>
        </div>
    );
};

export default CallSection;