import { useEffect } from "react";
import Aos from 'aos';

const Resume = () => {

    useEffect(() => {
        Aos.init({
            duration: 400,
            offset: 300
        });
    }, []);

    return (
        <div
            data-aos="zoom-in-up"
            data-aos-anchor-placement="top-center"
            className=' p-5 md:p-10 min-h-screen'>
            <h2 className='text-3xl font-bold border-b-[4px] border-[#ff714a] px-2 pb-2 text-white'>My Resume</h2>
            <h4 className=" text-right text-[#aaaa] text-xl mt-1">1 years of experience</h4>
            <div className=" grid grid-cols-10 mt-5">
                <div className=" col-span-7">
                    <h2 className="border-b-[4px] border-[#ff714a] text-2xl font-bold pb-1 inline-block">Education</h2>
                </div>
                <div className=" col-span-3">
                    <h2 className="border-b-[4px] border-[#ff714a] text-2xl font-bold pb-1 inline-block">Coding skill</h2>
                </div>
            </div>
        </div >
    );
};

export default Resume;