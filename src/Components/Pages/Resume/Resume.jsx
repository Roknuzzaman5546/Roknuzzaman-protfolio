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
            <div className=" grid md:grid-cols-10 mt-5 text-white gap-2">
                <div className=" md:col-span-6 w-full">
                    <h2 className="border-b-[4px] border-[#ff714a] text-2xl font-bold pb-1 inline-block mb-2">Education</h2>
                    {/* Education part */}
                    <div>
                        {/* tpi section */}
                        <div className=" flex">
                            <div className=" md:w-[30%] w-[40%] text-right border-r border-gray-300 pr-2">
                                <h2 className="font-bold">Thakurgaon Polytechnic Institute</h2>
                                <p className=" text-gray-400 text-sm">2020,June-20424,December</p>
                            </div>
                            <div className=" md:w-[70%] w-[60%] md:pl-5 pl-3 mb-5">
                                <h2 className=" font-bold">Diploma in Engineering || CSE</h2>
                                <p className=" text-sm text-gray-400 mt-2">Thakurgaon polytechnic Institute is Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laboriosam praesentium enim similique deserunt optio possimus reprehenderit perferendis vitae! Repudiandae, temporibus? Distinctio, dolor? Animi praesentium id perferendis culpa reiciendis ut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laboriosam praesentium enim similique deserunt optio possimus reprehenderit perferendis vitae! Repudiandae, temporibus? Distinctio, dolor? Animi praesentium id perferendis culpa reiciendis ut.
                                </p>
                            </div>
                        </div>
                        {/* border section */}
                        <div className=" flex">
                            <div className=" md:w-[30%] w-[40%]"></div>
                            <div className="w-3 h-3 rounded-full border-2 border-[#ff714a] mr-2"></div>
                            <div className=" md:w-[70%] w-[60%]"></div>
                        </div>
                        {/* gs&c Section */}
                        <div className=" flex">
                            <div className="md:w-[30%] w-[40%] text-right border-r border-gray-300 pr-2">
                                <h2 className="font-bold">Gayabari School & Collage</h2>
                                <p className=" text-gray-400 text-sm">2014,January-20420,January</p>
                            </div>
                            <div className=" md:w-[70%] w-[60%] md:pl-5 pl-3 mb-5">
                                <h2 className=" font-bold">Secondary School Certificate || Science</h2>
                                <p className=" text-sm text-gray-400 mt-2">Thakurgaon polytechnic Institute is Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laboriosam praesentium enim similique deserunt optio possimus reprehenderit perferendis vitae! Repudiandae, temporibus? Distinctio, dolor? Animi praesentium id perferendis culpa reiciendis ut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laboriosam praesentium enim similique deserunt optio possimus reprehenderit perferendis vitae! Repudiandae, temporibus? Distinctio, dolor? Animi praesentium id perferendis culpa reiciendis ut.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* certificate */}
                    <h2 className="border-b-[4px] border-[#ff714a] text-2xl font-bold pb-1 inline-block mb-2 mt-5">Certificate</h2>
                    <div className=" mt-3">
                        {/* PH certificate */}
                        <div className=" flex">
                            <div className="md:w-[30%] w-[40%] text-right border-r border-gray-300 pr-2">
                                <h2 className="font-bold">Programming hero</h2>
                                <p className=" text-gray-400 text-sm">2023,June-20423,December</p>
                            </div>
                            <div className=" md:w-[70%] w-[60%] md:pl-5 pl-3 mb-5">
                                <h2 className=" font-bold">Complete Web Development</h2>
                                <p className=" text-sm text-gray-400 mt-2">Thakurgaon polytechnic Institute is Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laboriosam praesentium enim similique deserunt optio possimus reprehenderit perferendis vitae! Repudiandae, temporibus? Distinctio, dolor? Animi praesentium id perferendis culpa reiciendis ut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laboriosam praesentium enim similique deserunt optio possimus reprehenderit perferendis vitae! Repudiandae, temporibus? Distinctio, dolor? Animi praesentium id perferendis culpa reiciendis ut.
                                </p>
                            </div>
                        </div>
                        {/* border section */}
                        <div className=" flex">
                            <div className=" md:w-[30%] w-[40%]"></div>
                            <div className="w-3 h-3 rounded-full border-2 border-[#ff714a] mr-2"></div>
                            <div className=" md:w-[70%] w-[60%]"></div>
                        </div>
                        {/* Great learning section python */}
                        <div className=" flex">
                            <div className="md:w-[30%] w-[40%] text-right border-r border-gray-300 pr-2">
                                <h2 className="font-bold">Great learning</h2>
                                <p className=" text-gray-400 text-sm">2024,February</p>
                            </div>
                            <div className=" md:w-[70%] w-[60%] md:pl-5 pl-3 mb-5">
                                <h2 className=" font-bold">How to build your own chatbot using Python</h2>
                                <p className=" text-sm text-gray-400 mt-2">Thakurgaon polytechnic Institute is Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laboriosam praesentium enim similique deserunt optio possimus reprehenderit perferendis vitae! Repudiandae, temporibus? Distinctio, dolor? Animi praesentium id perferendis culpa reiciendis ut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laboriosam praesentium enim similique deserunt optio possimus reprehenderit perferendis vitae! Repudiandae, temporibus? Distinctio, dolor? Animi praesentium id perferendis culpa reiciendis ut.
                                </p>
                            </div>
                        </div>
                        {/* border section */}
                        <div className=" flex">
                            <div className=" md:w-[30%] w-[40%]"></div>
                            <div className="w-3 h-3 rounded-full border-2 border-[#ff714a] mr-2"></div>
                            <div className=" md:w-[70%] w-[60%]"></div>
                        </div>
                        {/* Great learning php */}
                        <div className=" flex">
                            <div className="md:w-[30%] w-[40%] text-right border-r border-gray-300 pr-2">
                                <h2 className="font-bold">Great Learning</h2>
                                <p className=" text-gray-400 text-sm">2024,March</p>
                            </div>
                            <div className=" md:w-[70%] w-[60%] md:pl-5 pl-3 mb-5">
                                <h2 className=" font-bold">Php for beginners</h2>
                                <p className=" text-sm text-gray-400 mt-2">Thakurgaon polytechnic Institute is Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laboriosam praesentium enim similique deserunt optio possimus reprehenderit perferendis vitae! Repudiandae, temporibus? Distinctio, dolor? Animi praesentium id perferendis culpa reiciendis ut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laboriosam praesentium enim similique deserunt optio possimus reprehenderit perferendis vitae! Repudiandae, temporibus? Distinctio, dolor? Animi praesentium id perferendis culpa reiciendis ut.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Download cv */}
                    <button className="button-orange hover:bg-[#ff714a] mt-5 text-white font-serif hover:text-black text-xl font-bold">
                        <a target="blank" href="https://drive.google.com/file/d/1F9yYcWU5sKh_ctndV8jxwZgq0tpuJTcu/view?usp=sharing">Download CV</a>
                    </button>
                </div>
                {/* Coding skills */}
                <div className=" md:col-span-4 ml-2">
                    <h2 className="border-b-[4px] border-[#ff714a] text-2xl font-bold pb-1 inline-block">Coding skill</h2>
                    {/* HTMl */}
                    <div className=" mt-3">
                        <div className=" flex justify-between items-center">
                            <h2>HTML</h2>
                            <p className=" text-gray-400 text-sm  text-right">98%</p>
                        </div>
                        <div className=" w-full p-[2px] rounded-lg border border-[#ff714a] flex items-center">
                            <div className=" w-[98%] bg-[#ff714a] p-[2px] rounded-lg"></div>
                        </div>
                    </div>
                    {/* Css */}
                    <div className=" mt-3">
                        <div className=" flex justify-between items-center mb-1">
                            <h2>CSS</h2>
                            <p className=" text-gray-400 text-sm  text-right">90%</p>
                        </div>
                        <div className=" w-full p-[2px] rounded-lg border border-[#ff714a] flex items-center">
                            <div className=" w-[90%] bg-[#ff714a] p-[2px] rounded-lg"></div>
                        </div>
                    </div>
                    {/* Tailwind Css */}
                    <div className=" mt-3">
                        <div className=" flex justify-between items-center mb-1">
                            <h2>Tailwind css</h2>
                            <p className=" text-gray-400 text-sm  text-right">90%</p>
                        </div>
                        <div className=" w-full p-[2px] rounded-lg border border-[#ff714a] flex items-center">
                            <div className=" w-[90%] bg-[#ff714a] p-[2px] rounded-lg"></div>
                        </div>
                    </div>
                    {/* Daisy ui */}
                    <div className=" mt-3">
                        <div className=" flex justify-between items-center mb-1">
                            <h2>Daisy ui</h2>
                            <p className=" text-gray-400 text-sm  text-right">95%</p>
                        </div>
                        <div className=" w-full p-[2px] rounded-lg border border-[#ff714a] flex items-center">
                            <div className=" w-[95%] bg-[#ff714a] p-[2px] rounded-lg"></div>
                        </div>
                    </div>
                    {/* JavaScript */}
                    <div className=" mt-3">
                        <div className=" flex justify-between items-center mb-1">
                            <h2>JavaScript</h2>
                            <p className=" text-gray-400 text-sm  text-right">70%</p>
                        </div>
                        <div className=" w-full p-[2px] rounded-lg border border-[#ff714a] flex items-center">
                            <div className=" md:w-[70%] w-[60%] bg-[#ff714a] p-[2px] rounded-lg"></div>
                        </div>
                    </div>
                    {/* ReactJS */}
                    <div className=" mt-3">
                        <div className=" flex justify-between items-center mb-1">
                            <h2>ReactJS</h2>
                            <p className=" text-gray-400 text-sm  text-right">80%</p>
                        </div>
                        <div className=" w-full p-[2px] rounded-lg border border-[#ff714a] flex items-center">
                            <div className=" w-[80%] bg-[#ff714a] p-[2px] rounded-lg"></div>
                        </div>
                    </div>
                    {/* NOde js */}
                    <div className=" mt-3">
                        <div className=" flex justify-between items-center mb-1">
                            <h2>Node Js</h2>
                            <p className=" text-gray-400 text-sm  text-right">70%</p>
                        </div>
                        <div className=" w-full p-[2px] rounded-lg border border-[#ff714a] flex items-center">
                            <div className=" md:w-[70%] w-[60%] bg-[#ff714a] p-[2px] rounded-lg"></div>
                        </div>
                    </div>
                    {/* Express JS */}
                    <div className=" mt-3">
                        <div className=" flex justify-between items-center mb-1">
                            <h2>Express JS</h2>
                            <p className=" text-gray-400 text-sm  text-right">70%</p>
                        </div>
                        <div className=" w-full p-[2px] rounded-lg border border-[#ff714a] flex items-center">
                            <div className=" w-[70%] bg-[#ff714a] p-[2px] rounded-lg"></div>
                        </div>
                    </div>
                    {/* NextJS */}
                    <div className=" mt-3">
                        <div className=" flex justify-between items-center mb-1">
                            <h2>Next.Js </h2>
                            <p className=" text-gray-400 text-sm  text-right">50%</p>
                        </div>
                        <div className=" w-full p-[2px] rounded-lg border border-[#ff714a] flex items-center">
                            <div className=" w-[50%] bg-[#ff714a] p-[2px] rounded-lg"></div>
                        </div>
                    </div>
                    {/* Redux */}
                    <div className=" mt-3">
                        <div className=" flex justify-between items-center mb-1">
                            <h2>Redux</h2>
                            <p className=" text-gray-400 text-sm  text-right">50%</p>
                        </div>
                        <div className=" w-full p-[2px] rounded-lg border border-[#ff714a] flex items-center">
                            <div className=" w-[50%] bg-[#ff714a] p-[2px] rounded-lg"></div>
                        </div>
                    </div>
                    {/* Laravel */}
                    <div className=" mt-3">
                        <div className=" flex justify-between items-center mb-1">
                            <h2>Laravel with react</h2>
                            <p className=" text-gray-400 text-sm  text-right">40%</p>
                        </div>
                        <div className=" w-full p-[2px] rounded-lg border border-[#ff714a] flex items-center">
                            <div className=" w-[50%] bg-[#ff714a] p-[2px] rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Resume;