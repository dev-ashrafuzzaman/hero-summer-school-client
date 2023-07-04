import { Link } from 'react-router-dom';
import headerLogo from '../../../assets/logo/logo-white-color.png'
import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { FaCartPlus } from 'react-icons/fa';
import useSelected from '../../../hooks/useSelected';
import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';

const NavBar = () => {
    const themeData = localStorage.getItem("theme") ? localStorage.getItem("theme") : "light";
    const [theme, setTheme] = useState(themeData);
    const { user, logoutUser } = useAuth();
    const [selected] = useSelected();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const handleTheme = (event) => {
        if (event.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);


    const handleLogout = () => {
        logoutUser()
            .then(() => { })
            .then(error => {
                console.log(error)
            })
    }

    const itrem =
        <>
            <li className='hover:text-[#BAD650] font-semibold'><Link to='/'>Home</Link></li>
            <li className='hover:text-[#BAD650] font-semibold'><Link to='/instructors'>Instructors</Link></li>
            <li className='hover:text-[#BAD650] font-semibold'><Link to='/classes'>Classes</Link></li>

            {
                user ? <>

                    <li className='hover:text-[#BAD650] font-semibold'><Link to={`${isAdmin ? '/dashboard/admin/admin-home' : isInstructor ? '/dashboard/instructor/instructor-home' : '/dashboard/student/student-home'}`}>Dashboard</Link></li>
                    <button className='hover:text-[#BAD650] font-semibold' onClick={handleLogout}><Link>Logout</Link></button>


                </> : <>
                    <li className='hover:text-[#BAD650] font-semibold'><Link to={'/login'}>Login</Link></li>
                </>
            }
        </>
    return (
        <div className='absolute'>
            <div className='w-full bg-[#121220] flex justify-center items-center  fixed z-10 bg-opacity-60  '>
                <div className="navbar  max-w-screen-xl">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn- lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {itrem}
                            </ul>
                        </div>
                        <img className='hidden md:block' src={headerLogo} alt="" />
                        <h3 className='block md:hidden font-bold sec-color-text text-4xl pl-2'>HLA</h3>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className=" flex justify-center items-center gap-4 mt-2 text-white ">
                            {itrem}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <label className="swap swap-rotate me-4 text-white">

                            {/* this hidden checkbox controls the state */}
                            <input
                                type="checkbox"
                                onChange={handleTheme}
                                checked={theme === "light" ? false : true}
                            />

                            {/* sun icon */}
                            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                        {
                            user && <img className='w-12 border-2 hover:border-2 hover:border-[#BAD650] rounded-full' src={user.photoURL} alt="" />
                        }
                    </div>
                </div>
            </div>
            {isAdmin || isInstructor ? <></> : user ?
                <Link to='/dashboard/student/my-selected-classes'>
                    <div className='h-[150px] bg-cover bg-center border-2 bg-[#fefff9] border-[#BAD650] top-96 fixed z-10 rounded-e-2xl'
                        style={{
                            backgroundImage: `url("https://i.ibb.co/Z2TYJDc/BG-green-gray.png")`
                        }}
                    >
                        <h3 className='text-[#000000] text-2xl  -rotate-90 mt-16 font-bold flex justify-center items-center gap-2'><FaCartPlus></FaCartPlus> {selected.length}</h3>
                    </div>
                </Link> : <></>
            }
        </div>
    );
};

export default NavBar;