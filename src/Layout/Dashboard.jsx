import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaAddressCard, FaCartPlus, FaHome, FaSchool, FaUsers, FaWallet } from "react-icons/fa";
import useSelected from "../hooks/useSelected";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [selected] = useSelected();
    const totalPrice = selected.reduce((sum, classes) => classes.price + sum, 0);
    const navigate = useNavigate();
    const { user, logoutUser } = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const themeData = localStorage.getItem("theme") ? localStorage.getItem("theme") : "light";
    const [theme, setTheme] = useState(themeData);

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
            .then(() => {
                navigate('/login')
            })
            .then(error => {
                console.log(error)
            })
    }



    return (

        <>
            <div className="navbar text-[#BAD650] bg-[#121220] pe-20">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">HLA-DASHBOARD</a>
                    <div className="form-control pl-28">
                        <div className="input-group">
                            <input type="text" placeholder="Search…" className="input input-bordered" />
                            <button className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                    <Link to='/'><button className="ml-6 btn btn-outline text-[#BAD650]">Website</button></Link>
                </div>

                <div className="flex-none">
                    {
                        isAdmin ? <></> : isInstructor ? <></> : <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">{selected.length}</span>
                                </div>
                            </label>
                            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-200 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-[#EC5082] text-lg">{selected.length} Classes</span>
                                    <span className="text-info">Subtotal: ${totalPrice}</span>
                                    <div className="card-actions">
                                        <Link to="student/my-selected-classes">
                                            <button className="btn bg-[#EC5082] text-white  btn-block">View cart</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img className="border-2 bg-white border-[#BAD650] rounded-full" src={user?.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm text-[#EC5082] dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>
                                <label className="swap swap-rotate me-4 ">

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
                            </a></li>
                            <li onClick={handleLogout}><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-[#121220] font-bold text-base  text-[#BAD650]">
                        {/* Sidebar content here */}
                        {
                            isAdmin ? <>
                                <li><NavLink to="admin/admin-home"><FaHome></FaHome>Admin Home</NavLink></li>
                                <li><NavLink to="admin/manage-classes"><FaSchool></FaSchool>Manage Classes</NavLink></li>
                                <li><NavLink to="admin/manage-users"><FaUsers></FaUsers>Manage Users</NavLink></li>
                            </> : isInstructor ? <>
                                <li><NavLink to="instructor/instructor-home"><FaHome></FaHome>Instructor Home</NavLink></li>
                                <li><NavLink to="instructor/add-class"><FaAddressCard></FaAddressCard>Add a Class</NavLink></li>
                                <li><NavLink to="instructor/my-classes"><FaSchool></FaSchool>My Classes</NavLink></li>
                            </> : <>
                                <li><NavLink to="student/student-home"><FaHome></FaHome>User Home</NavLink></li>
                                <li><NavLink to="student/my-enrolled-classes"><FaSchool></FaSchool>My Enrolled Classes</NavLink></li>
                                <li><NavLink to="student/payment-history"><FaWallet></FaWallet>Payment History</NavLink></li>
                                <li><NavLink className={'flex'} to="student/my-selected-classes"><FaCartPlus></FaCartPlus> My Selected Classes</NavLink></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;