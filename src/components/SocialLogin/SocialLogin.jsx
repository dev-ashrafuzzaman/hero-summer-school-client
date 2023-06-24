
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <div className="mb-6">
                <button className="w-full btn bg-[#FFFFFF] border font-bold   hover:bg-blue-50 hover:border-2 hover:border-blue-500"><FaGoogle className="text-blue-500 text-2xl"></FaGoogle> Sign in with Google</button>
            </div>
            <div className="divider">
                <p className="px-10  border rounded-xl">OR</p>
            </div>
        </div>
    );
};

export default SocialLogin;