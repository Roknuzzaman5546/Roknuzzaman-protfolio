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
            <div className=" grid grid-cols-10 mt-5 text-white gap-2">
                {/* Education part */}
                <div className=" col-span-7">
                    <h2 className="border-b-[4px] border-[#ff714a] text-2xl font-bold pb-1 inline-block mb-2">Education</h2>
                    {/* tpi section */}
                    <div className=" flex">
                        <div className="w-[30%] text-right border-r border-gray-300 pr-2">
                            <h2 className="font-bold">Thakurgaon Polytechnic Institute</h2>
                            <p className=" text-gray-400 text-sm">2020,June-20424,December</p>
                        </div>
                        <div className=" w-[70%] pl-5 mb-5">
                            <h2 className=" font-bold">Computer science & Engineering Technology</h2>
                            <p className=" text-sm text-gray-400 mt-2">Thakurgaon polytechnic Institute is Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laboriosam praesentium enim similique deserunt optio possimus reprehenderit perferendis vitae! Repudiandae, temporibus? Distinctio, dolor? Animi praesentium id perferendis culpa reiciendis ut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laboriosam praesentium enim similique deserunt optio possimus reprehenderit perferendis vitae! Repudiandae, temporibus? Distinctio, dolor? Animi praesentium id perferendis culpa reiciendis ut.
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" col-span-3">
                    <h2 className="border-b-[4px] border-[#ff714a] text-2xl font-bold pb-1 inline-block">Coding skill</h2>
                </div>
            </div>
        </div >
    );
};

export default Resume;