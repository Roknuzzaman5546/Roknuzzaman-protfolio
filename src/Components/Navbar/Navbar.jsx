import { NavLink } from "react-router-dom";
import './Navbar.css'
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const { handleScrollAbout,
        handleScrollProject,
        handleScrollContact, } = useContext(AuthContext)

    return (
        <div className=" w-full h-full flex flex-col justify-between py-[30px]">
            {/* navbar profile section */}
            <div className=" flex flex-col items-center justify-center mb-[30px]">
                <img className=" w-[80px] max-h-[80px] object-cover rounded-lg mb-5" src="https://i.ibb.co/mTQJ4jg/portfolio.jpg" alt="" />
                <h3 className=" text-2xl font-bold text-white overflow-hidden">Sajib</h3>
            </div>
            <div>
                {/* menu section */}
                <ul className=" text-center w-full flex flex-col">
                    <NavLink
                        onClick={handleScrollAbout}
                        to="/"
                        className={({ isActive, isPending }) => isPending ? "w-full border-t border-[#333] text-white py-[10px] font-serif active:bg-[#333333] li" : isActive ? " w-full text-white py-[10px] font-serif bg-[#333333] shadow-left" : "w-full border-t border-[#333] text-white py-[10px] font-serif active:bg-[#333333] li"}>About</NavLink>

                    <NavLink
                        onClick={handleScrollContact}
                        to="/services"
                        className={({ isActive, isPending }) => isPending ? "w-full border-t border-[#333] text-white py-[10px] font-serif active:bg-[#333333] li" : isActive ? " w-full text-white py-[10px] font-serif bg-[#333333] shadow-left" : "w-full border-t border-[#333] text-white py-[10px] font-serif active:bg-[#333333] li"}>Resume</NavLink>

                    <NavLink
                        to="/skills"
                        className={({ isActive, isPending }) => isPending ? "w-full border-t border-[#333] text-white py-[10px] font-serif active:bg-[#333333] li" : isActive ? " w-full text-white py-[10px] font-serif bg-[#333333] shadow-left" : "w-full border-t border-[#333] text-white py-[10px] font-serif active:bg-[#333333] li"}>Skills</NavLink>

                    <NavLink
                        onClick={handleScrollProject}
                        to="/projects"
                        className={({ isActive, isPending }) => isPending ? "w-full border-t border-[#333] text-white py-[10px] font-serif active:bg-[#333333] li" : isActive ? " w-full text-white py-[10px] font-serif bg-[#333333] shadow-left" : "w-full border-t border-[#333] text-white py-[10px] font-serif active:bg-[#333333] li"}>Projects</NavLink>

                    <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "w-full border-t border-[#333] text-white py-[10px] font-serif active:bg-[#333333] li" : isActive ? " w-full text-white py-[10px] font-serif bg-[#333333] shadow-left" : "w-full border-t border-[#333] text-white py-[10px] font-serif active:bg-[#333333] li"}>Contact</NavLink>
                </ul>
                {/* Social link and copyright section */}
                <div className="text-center w-full flex items-center justify-center gap-3 mt-[30px]">
                    <span className=" bg-[#4444] text-[#aaaa] p-[6px] hover:bg-[#2578B4] hover:text-black">
                        <FaTwitter></FaTwitter>
                    </span>
                    <span className=" bg-[#4444] text-[#aaaa] p-[6px] hover:bg-[#2578B4] hover:text-black">
                        <FaLinkedin></FaLinkedin>
                    </span>
                    <span className=" bg-[#4444] text-[#aaaa] p-[6px] hover:bg-[#2578B4] hover:text-black">
                        <FaFacebook></FaFacebook>
                    </span>
                </div>
            </div>
            {/* copyright section */}
            <div className=" text-center mt-16 text-xs text-[#aaa]">
                © 2021 All rights
                reserved.
            </div>
        </div>
    );
};

export default Navbar;