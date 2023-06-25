import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import footerLogo from "../../../assets/logo/logo-512.png"

const Footer = () => {
    return (
        <div className="bg-[#121220] relative  ">
            <div className="hidden md:block">
                <div className="flex justify-center items-center absolute -top-[30%] w-full">
                    <div className="border-2 shadow shadow-[#abc54b] hover:border-[#abc54b] bg-[#ffffff] text-white bg-cover bg-center w-1/2 py-16 px-10 rounded-2xl"
                        style={{
                            backgroundImage: `url("https://i.ibb.co/Z2TYJDc/BG-green-gray.png")`
                        }}
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-[#9cb541] text-2xl  font-semibold">Ready to get started?</p>
                                <p className="text-[#637817] text-2xl font-bold">Talk to us today</p>
                            </div>
                            <button className="btn bg-[#9cb541] hover:bg-[#637817] text-white ">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-screen-xl md:pt-28 pt-10 pb-10  w-full  px-2 text-white grid grid-cols-2 md:grid-cols-4 gap-10  md:gap-2">
                <div>
                    <img className="w-32 mb-2" src={footerLogo} alt="" />

                    <div className="flex gap-4 text-2xl">
                        <a className="hover:text-[#BAD650]" href="https://twitter.com/">
                            <FaTwitter />
                        </a>
                        <a className="hover:text-[#BAD650]" href="https://www.facebook.com/">
                            <FaFacebook />
                        </a>
                        <a className="hover:text-[#BAD650]" href="https://www.instagram.com/">
                            <FaInstagram />
                        </a>
                        <a className="hover:text-[#BAD650]" href="https://www.youtube.com/">
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                <div>
                    <h1 className="md:text-3xl text-xl mb-2 font-semibold">Company</h1>
                    <ul>
                        <li className="hover:text-[#BAD650]">
                            <Link>Career</Link>
                        </li>
                        <li className="hover:text-[#BAD650]">
                            <Link>Join as a Teacher</Link>
                        </li>
                        <li className="hover:text-[#BAD650]">
                            <Link>Privacy Policy</Link>
                        </li>
                        <li className="hover:text-[#BAD650]">
                            <Link>Refund Policy</Link>
                        </li>
                        <li className="hover:text-[#BAD650]">
                            <Link>Terms & Condition</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h1 className="md:text-3xl text-xl mb-2 font-semibold">Other</h1>
                    <ul>
                        <li className="hover:text-[#BAD650]">
                            <Link>Blog</Link>
                        </li>
                        <li className="hover:text-[#BAD650]">
                            <Link>Offers</Link>
                        </li>
                        <li className="hover:text-[#BAD650]">
                            <Link>Verify Certificate</Link>
                        </li>
                        <li className="hover:text-[#BAD650]">
                            <Link>Book Store</Link>
                        </li>
                        <li className="hover:text-[#BAD650]">
                            <Link>Notes & Guides</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h1 className="text-3xl mb-2 font-semibold">Contact</h1>
                    <p className="mb-4">
                        Phone:
                        16999 <br /> Email: help@hla.com
                    </p>
                    <div>
                        <img
                            className="md:w-3/5"
                            src="https://i.ibb.co/3S25qLj/pngkey-com-hawaiian-lei-png-9280025.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="bg-[#2d2d4b] font-bold text-white text-center p-2">
                <p>
                    &copy; 2023 <span className="text-[#BAD650] ">HLA</span>.
                    by Ashrafuzzaman
                </p>
            </div>
        </div>
    );
};

export default Footer;