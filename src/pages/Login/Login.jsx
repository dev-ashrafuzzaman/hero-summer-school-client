
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";

const Login = () => {

    const [focusEmail, setFocusEmail] = useState(false)
    const [focusPass, setFocusPass] = useState(false)
    const [focusCheckBox, setFocusCheckBox] = useState(false)
    const [visiblePass, setvisiblePass] = useState(false)
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

    const handleFrom = event => {
        event.preventDefault();
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
                        <form onSubmit={handleFrom} className="space-y-6">
                            <div className={`border-2 rounded-xl p-4  bg-[#F8FAFC] ${focusEmail ? 'border-[#BAD650] hover:border-[#BAD650]' : 'hover:border-black '}`}>
                                <p className={`text-slate-400  ${focusEmail ? 'main-color-text ' : ''}`}>Email Address</p>
                                <input required onFocus={() => handleOnFocusEmail(!focusEmail)} onBlur={() => handleOnFocusEmail(!focusEmail)} type="email" placeholder="Type Your Email" className="font-semibold border-none outline-none  w-full" />
                            </div>
                            <div className={`border-2 flex justify-between items-center rounded-xl p-4  bg-[#F8FAFC] ${focusPass ? 'border-[#BAD650] hover:border-[#BAD650]' : 'hover:border-black '}`}>
                                <div className="w-11/12">
                                    <p className={`text-slate-400  ${focusPass ? 'main-color-text ' : ''}`}>Password</p>
                                    <input required onFocus={() => handleOnFocusPass(!focusPass)} onBlur={() => handleOnFocusPass(!focusPass)} type={`${visiblePass ? 'text' : 'password'}`} placeholder="Type Your Password" className="font-semibold border-none outline-none  w-full" />
                                </div>
                                <p className="text-2xl" onClick={() => handlePassVisible(!visiblePass)}>{visiblePass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</p>
                            </div>
                            {/* Forgot Password Area */}
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <span>Remember me</span>
                                    <input type="checkbox" onClick={() => handleOnFocusCheckBox(!focusCheckBox)} checked={focusCheckBox} className="checkbox" />
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
            </div>
        </>
    );
};

export default Login;