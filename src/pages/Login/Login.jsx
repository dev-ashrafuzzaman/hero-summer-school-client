
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loginUser } = useAuth();
    const [logError, setLogError] = useState(false);
    const [focusEmail, setFocusEmail] = useState(false)
    const [focusPass, setFocusPass] = useState(false)
    const [focusCheckBox, setFocusCheckBox] = useState(false)
    const [visiblePass, setvisiblePass] = useState(false)

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleOnFocusEmail = (value) => {
        setFocusEmail(value)
    }
    const handleOnFocusPass = (value) => {
        setFocusPass(value)
    }
    const handleOnFocusCheckBox = (value) => {
        if (value) {
            setFocusCheckBox(true)
        } else {
            setFocusCheckBox(false)
        }
    }
    const handlePassVisible = (value) => {
        setvisiblePass(value)
    }


    const onSubmit = (data) => {
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Sucessfull',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
                setLogError(false)
            })
            .catch(() => {
                setLogError(true)
                toast.error('Worng Email/Password try again!', {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }

    return (
        <>
            <Helmet>
                <title>HLA | Login</title>
            </Helmet>
            <div className="flex justify-center bg-[#EEF2F6]  pt-28 pb-44">
                <div className="card shadow-2xl bg-base-100 p-10 w-[700px]">
                    <div className="card-body">
                        <div className="text-center space-y-4 mb-6">
                            <h3 className="text-4xl font-bold sec-color-text">Hi, Welcome Back</h3>
                            <h4 className="text-xl text-slate-400">Enter your credentials to continue</h4>
                        </div>
                        <SocialLogin></SocialLogin>
                        <p className="text-center  font-semibold my-6">Sign in with Email address</p>
                        {/* Form start */}
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className={`border-2 rounded-xl p-4 ${logError && 'border-red-500 hover:border-red-500'}  bg-[#F8FAFC] ${focusEmail ? 'border-[#BAD650] hover:border-[#BAD650]' : 'hover:border-black '}`}>
                                <p className={`text-slate-400  ${focusEmail ? 'main-color-text ' : ''}`}>Email Address</p>
                                <input {...register("email", { required: true })} onFocus={() => handleOnFocusEmail(!focusEmail)} onBlur={() => handleOnFocusEmail(!focusEmail)} type="email" placeholder="Type Your Email" className="font-semibold border-none outline-none  w-full" />
                            </div>
                            {errors.email && <span className=" text-red-600">Email is required</span>}
                            <div className={`border-2 flex justify-between items-center rounded-xl p-4 ${logError && 'border-red-500 hover:border-red-500'}  bg-[#F8FAFC] ${focusPass ? 'border-[#BAD650] hover:border-[#BAD650]' : 'hover:border-black '}`}>
                                <div className="w-11/12">
                                    <p className={`text-slate-400  ${focusPass ? 'main-color-text ' : ''}`}>Password</p>
                                    <input {...register("password", { required: true })} onFocus={() => handleOnFocusPass(!focusPass)} onBlur={() => handleOnFocusPass(!focusPass)} type={`${visiblePass ? 'text' : 'password'}`} placeholder="Type Your Password" className="font-semibold border-none outline-none  w-full" />
                                </div>
                                <p className="text-2xl" onClick={() => handlePassVisible(!visiblePass)}>{visiblePass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</p>
                            </div>
                            {errors.password?.type === 'required' && <span className=" text-red-600">Password is required</span>}
                            {/* Forgot Password Area */}
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <span>Remember me</span>
                                    <input type="checkbox" onChange={() => handleOnFocusCheckBox(!focusCheckBox)} checked={focusCheckBox} className="checkbox" />
                                </div>
                                <Link><p className="main-color-text text-end">Forgot Password?</p></Link>
                            </div>
                            {/* Submit Btn */}
                            <div>
                                <input className="btn main-color-bg w-full mt-4 font-bold text-white text-xl" type="submit" value="Sign In" />
                            </div>
                        </form>
                        <div className="divider"></div>
                        <Link to='/signup'> <p className="font-semibold text-center text-sm hover:text-[#EC5082]">Dont Have an Account?</p></Link>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </>
    );
};

export default Login;