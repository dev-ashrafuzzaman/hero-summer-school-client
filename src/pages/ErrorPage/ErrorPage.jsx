
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo-brand-color.png'

const ErrorPage = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center h-full">
            <Helmet>
                <title>HLA | Error 404</title>
            </Helmet>
            <div className="flex justify-center items-center text-2xl">
                <div className='space-y-6'>
                    <img src={logo} alt="" />
                    <h3><span className='font-bold'>404.</span> <span className='text-[#5D5E5E]'>Thats an error.</span></h3>
                    <p ><span className='font-semibold'>The requested URL <br /> /badpage was not found on <br /> this server.</span> <span className='text-[#5D5E5E]'>Thats all we know.</span></p>
                </div>
                <img
                    className=""
                    src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/media/507f015a7efd81cec270faf9c4f1aabd.gif"
                    alt=""
                />
            </div>

            <Link to="/">
                <button className="bg-[#EC5082] hover:bg-[#ec50817b] text-white text-center font-bold p-4 rounded-lg">
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;