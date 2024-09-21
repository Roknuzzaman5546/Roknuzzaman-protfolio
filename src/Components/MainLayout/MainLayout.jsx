import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";

const MainLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            // Check if the click is outside the sidebar or the toggle button
            const sidebar = document.querySelector(".side_bar");
            const toggleButton = document.querySelector(".toggle-button");
            if (sidebar && !sidebar.contains(e.target) && !toggleButton.contains(e.target)) {
                setIsSidebarOpen(true);
            }
        };

        // Add the click event listener
        document.addEventListener("click", handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className=" flex md:hidden">
                {/* medium device navbar */}
                <div className=" bg-[#222222] w-full transition-all duration-300 flex items-center justify-between py-3 px-5 border-b-[1px] border-[#444444] z-10 fixed">
                    <div className=" flex items-center justify-center gap-2">
                        <img className=" w-[40px] h-[35px] object-cover rounded" src="https://i.ibb.co/mTQJ4jg/portfolio.jpg" alt="" />
                        <h2 className=" text-xl font-bold text-white overflow-hidden">Sajib</h2>
                    </div>
                    <div
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="toggle-button"
                    >
                        <FaBars className=" text-white"></FaBars>
                    </div>
                </div>
            </div>
            <div className="flex gap-0 md:gap-[5px] ">
                <div
                    className={`side_bar bg-[#222222] min-h-screen md:max-h-[calc(100vh)] overflow-y-auto md:scrollbar-none w-[160px] md:min-w-[160px] z-[99999] text-white ${
                        isSidebarOpen ? "-ml-[160px] md:ml-0" : "fixed xl-ml-[160px]"
                    }`}
                >
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
