import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";

const MainLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        // console.log(isSidebarOpen);
    };

    return (
        <>
            <div className=" flex md:hidden">
                {/* medium device navbar */}
                <div className=" bg-[#222222] w-full transition-all duration-300 flex items-center justify-between py-3 px-5 border-b-[1px] border-[#444444] ">
                    <div className=" flex items-center justify-center gap-2">
                        <img className=" w-[40px] h-[35px] object-cover rounded" src="https://i.ibb.co/mTQJ4jg/portfolio.jpg" alt="" />
                        <h2 className=" text-xl font-bold text-white overflow-hidden">Sajib</h2>
                    </div>
                    <div onClick={toggleSidebar}>
                        <FaBars></FaBars>
                    </div>
                </div>
            </div>
            <div className="flex gap-0 md:gap-[5px] ">
                <div className={`side_bar bg-[#222222] min-h-screen  w-[160px] md:min-w-[160px] z-[99999] text-white ${isSidebarOpen ? "-ml-[160px] md:ml-0" : "fixed xl-ml-[160px]"
                    }`}>
                    <Navbar />
                </div>
                <div className="bg-[#222222] w-full">
                    <OutletScrollableContainer>
                        <Outlet />
                    </OutletScrollableContainer>
                </div>
            </div>
        </>
    );
};

const OutletScrollableContainer = ({ children }) => {
    return (
        <div className=" max-h-full md:max-h-[calc(100vh)] overflow-y-auto chatScroll">
            {children}
        </div>
    );
};

export default MainLayout;
