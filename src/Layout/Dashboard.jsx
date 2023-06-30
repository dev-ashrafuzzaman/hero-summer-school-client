import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCartPlus, FaHome, FaSchool, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import useSelected from "../hooks/useSelected";

const Dashboard = () => {
const [ selected] = useSelected();
    const isAdmin = false;
    return (

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
                            <li className="hover:text-[#778a34]"><NavLink to="/dashboard/adminhome"><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to="addItem"><FaUtensils></FaUtensils>Add Items</NavLink></li>
                            <li><NavLink to="manageItem"><FaWallet></FaWallet>Management Items</NavLink></li>
                            <li><NavLink to="payment-history"><FaBook></FaBook>Manage Booking</NavLink></li>
                            <li><NavLink to="all-users"><FaUsers></FaUsers>All Users</NavLink></li>
                        </> : <>
                            <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to="my-enrolled-classes"><FaSchool></FaSchool> My Enrolled Classes</NavLink></li>
                            <li><NavLink to="payment-history"><FaWallet></FaWallet>Payment History</NavLink></li>
                            <li><NavLink className={'flex'} to="my-selected-classes"><FaCartPlus></FaCartPlus> My Selected Classes</NavLink></li>
                        </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to="/">Home</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;