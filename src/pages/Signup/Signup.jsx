import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [focusName, setFocusName] = useState(false)
    const [focusEmail, setFocusEmail] = useState(false)
    const [focusPhoto, setFocusPhoto] = useState(false)
    const [focusPass, setFocusPass] = useState(false)
    const [focusConPass, setFocusConPass] = useState(false)
    const [focusCheckBox, setFocusCheckBox] = useState(false)
    const [visiblePass, setvisiblePass] = useState(false)
    const [visibleConPass, setvisibleConPass] = useState(false)
    const handleOnFocusName = (value) => {
        setFocusName(value)
    }
    const handleOnFocusEmail = (value) => {
        setFocusEmail(value)
    }
    const handleOnFocusPhoto = (value) => {
        setFocusPhoto(value)
    }
    const handleOnFocusPass = (value) => {
        setFocusPass(value)
    }
    const handleOnFocusConPass = (value) => {
        setFocusConPass(value)
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
    const handlePassConVisible = (value) => {
        setvisibleConPass(value)
    }

    // React Form Control User Register Area
    const onSubmit = (data) => {

        if (data.password === data.confirmPassword) {
            console.log(data)
            setFocusPass(false)
            setFocusConPass(false)
        } else {
            toast.error('Passwords are not same! Try again...', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setFocusPass('notMatch')
            setFocusConPass('notMatch')

        }
    }
    return (
        <>
            <div className="flex justify-center bg-[#EEF2F6] pt-28 pb-44">
                <div className="card shadow-2xl bg-base-100 p-10 w-[700px]">
                    <div className="card-body">
                        <div className="text-center space-y-4 mb-6">
                            <h3 className="text-4xl font-bold sec-color-text">Sign Up</h3>
                            <h4 className="text-xl text-slate-400">Enter your credentials to continue</h4>
                        </div>
                        {/* Social Login */}
                        <SocialLogin></SocialLogin>
                        <p className="text-center  font-semibold my-6">Sign Up with Email address</p>
                        {/* Form start */}
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Type Name */}

                            <div className={`border-2 rounded-xl p-4  bg-[#F8FAFC]  ${focusName ? 'border-[#BAD650] hover:border-[#BAD650]' : 'hover:border-black '}`}>
                                <p className={`text-slate-400   ${focusName ? 'text-blue-500 ' : ''}`}>Name</p>
                                <input {...register("name")} onFocus={() => handleOnFocusName(!focusName)} onBlur={() => handleOnFocusName(!focusName)} type="text" placeholder="Type Your Name" className="font-semibold border-none outline-none  w-full" />
                            </div>

                            {/* Type Email */}
                            <div className={`border-2 rounded-xl p-4  bg-[#F8FAFC] ${errors.email && 'border-red-500 hover:border-red-500'} ${focusEmail ? 'border-[#BAD650] hover:border-[#BAD650]' : 'hover:border-black '}`}>
                                <p className={`text-slate-400 ${errors.email && 'text-red-500'}  ${focusEmail ? 'text-blue-500 ' : ''}`}>Email Address</p>
                                <input {...register("email", { required: true })} onFocus={() => handleOnFocusEmail(!focusEmail)} onBlur={() => handleOnFocusEmail(!focusEmail)} type="email" placeholder="Type Your Email" className="font-semibold border-none outline-none  w-full" />

                            </div>
                            {errors.email && <span className=" text-red-600">Email is required</span>}
                            {/* Type Password */}
                            <div className={`border-2 flex justify-between items-center rounded-xl p-4  bg-[#F8FAFC] ${errors.password && 'border-red-500 hover:border-red-500'} ${focusPass ? 'border-[#BAD650] hover:border-[#BAD650]' : 'hover:border-black '} ${focusPass === 'notMatch' && 'border-red-500 hover:border-red-500'}`}>
                                <div className="w-11/12">
                                    <p className={`text-slate-400 ${errors.password && 'text-red-500'}  ${focusPass ? 'text-blue-500 ' : ''}`}>Password</p>
                                    <input onFocus={() => handleOnFocusPass(!focusPass)} onBlur={() => handleOnFocusPass(!focusPass)} type={`${visiblePass ? 'text' : 'password'}`} placeholder="Type Your Password" className="font-semibold border-none outline-none  w-full"
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                        })}
                                    />
                                </div>
                                <p className="text-2xl" onClick={() => handlePassVisible(!visiblePass)}>{visiblePass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</p>
                            </div>
                            {errors.password?.type === 'required' && <span className=" text-red-600">Password is required</span>}
                            {errors.password?.type === 'minLength' && <span className=" text-red-600">Password must be minumum 6 characters</span>}
                            {errors.password?.type === 'maxLength' && <span className=" text-red-600">Password must be less then 20 characters</span>}
                            {errors.password?.type === 'pattern' && <span className=" text-red-600">Password don't have a capital letter & special character</span>}
                            {/* Confirm Password */}
                            <div className={`border-2 flex justify-between items-center rounded-xl p-4  bg-[#F8FAFC] ${errors.confirmPassword && 'border-red-500 hover:border-red-500'} ${focusConPass ? 'border-[#BAD650] hover:border-[#BAD650]' : 'hover:border-black '} ${focusConPass === 'notMatch' && 'border-red-500 hover:border-red-500'}`}>
                                <div className="w-11/12">
                                    <p className={`text-slate-400 ${errors.confirmPassword && 'text-red-500'}  ${focusConPass ? 'text-blue-500 ' : ''}`}>Confirm Password</p>
                                    <input onFocus={() => handleOnFocusConPass(!focusConPass)} onBlur={() => handleOnFocusConPass(!focusConPass)} type={`${visibleConPass ? 'text' : 'password'}`} placeholder="Type Confirm Password" className="font-semibold border-none outline-none  w-full"
                                        {...register("confirmPassword", {
                                            required: true,
                                        })}
                                    />
                                </div>
                                <p className="text-2xl" onClick={() => handlePassConVisible(!visibleConPass)}>{visibleConPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</p>
                            </div>
                            {errors.confirmPassword?.type === 'required' && <span className=" text-red-600">Passwords are not same</span>}

                            {/* Photo Url */}
                            <div className={`border-2 rounded-xl p-4  bg-[#F8FAFC]  ${focusPhoto ? 'border-[#BAD650] hover:border-[#BAD650]' : 'hover:border-black '}`}>
                                <p className={`text-slate-400   ${focusPhoto ? 'text-blue-500 ' : ''}`}>Photo URL</p>
                                <input {...register("photoURL")} onFocus={() => handleOnFocusPhoto(!focusPhoto)} onBlur={() => handleOnFocusPhoto(!focusPhoto)} type="url" placeholder="Type Photo URL" className="font-semibold border-none outline-none  w-full" />
                            </div>

                            {/* Forgot Password Area */}
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" onClick={() => handleOnFocusCheckBox(!focusCheckBox)} checked={focusCheckBox} className="checkbox" />
                                    <span>Agree with <a className="underline hover:text-[#EC5082]" href="">Terms & Condition</a></span>
                                </div>
                            </div>
                            {/* Submit Btn */}
                            <div>
                                <input className="btn main-color-bg w-full mt-4 font-bold text-white text-xl" type="submit" disabled={!focusCheckBox} value="Sign Up" />
                            </div>
                        </form>
                        <div className="divider"></div>
                        <p className="font-semibold text-center text-xl hover:text-[#EC5082]"><a href="">Already Have an Account?</a></p>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </>
    );
};

export default Signup;