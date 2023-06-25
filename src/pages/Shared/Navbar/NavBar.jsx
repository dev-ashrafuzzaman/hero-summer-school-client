import { Link } from 'react-router-dom';
import headerLogo from '../../../assets/logo/logo-white-color.png'

const NavBar = () => {
    const itrem =
        <>
            <li className='hover:text-[#BAD650] font-semibold'><Link to='/'>Home</Link></li>
            <li className='hover:text-[#BAD650] font-semibold'><Link to='/instructors'>Instructors</Link></li>
            <li className='hover:text-[#BAD650] font-semibold'><Link to='/classes'>Classes</Link></li>
            <li className='hover:text-[#BAD650] font-semibold'><Link to={'/dashboard'}>Dashboard</Link></li>
            <li className='hover:text-[#BAD650] font-semibold'><Link to={'/login'}>Login</Link></li>
        </>
    return (
        <div className='w-full bg-black flex justify-center items-center  fixed z-10 bg-opacity-40  '>
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
                    <img className='w-12 border-2 hover:border-2 hover:border-[#BAD650] rounded-full' src="https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default NavBar;