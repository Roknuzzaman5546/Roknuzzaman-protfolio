import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="flex gap-[4px] ">
            <div className="w-[180px] bg-[#222222]">
                <Navbar />
            </div>
            <div className="bg-[#222222] w-full">
                <OutletScrollableContainer>
                    <Outlet />
                </OutletScrollableContainer>
            </div>
        </div>
    );
};

const OutletScrollableContainer = ({ children }) => {
    return (
        <div style={{ maxHeight: "calc(100vh)", overflowY: "auto" }} className=" chatScroll">
            {children}
        </div>
    );
};

export default MainLayout;
