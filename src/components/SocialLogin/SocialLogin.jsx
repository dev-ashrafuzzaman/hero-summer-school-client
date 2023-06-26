
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const { googleSigninUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignUser = () => {
        googleSigninUser()
            .then(result => {
                const logginUser = result.user;
                console.log(logginUser);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Sucessfull',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
    }

    return (
        <div>
            <div className="mb-6">
                <button onClick={handleGoogleSignUser} className="w-full btn bg-[#FFFFFF] border font-bold   hover:bg-blue-50 hover:border-2 hover:border-blue-500"><FaGoogle className="text-blue-500 text-2xl"></FaGoogle> Sign in with Google</button>
            </div>
            <div className="divider">
                <p className="px-10  border rounded-xl">OR</p>
            </div>
        </div>
    );
};

export default SocialLogin;