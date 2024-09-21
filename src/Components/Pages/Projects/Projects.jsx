import { useContext, useEffect, useState } from "react";
import 'aos/dist/aos.css';
import Aos from 'aos';
import './Project.css'
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Projects = () => {
    const { scrollProject } = useContext(AuthContext)
    const [project, setProject] = useState()
    // console.log(project);

    useEffect(() => {
        fetch('/portfolio.json')
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])

    useEffect(() => {
        Aos.init({
            duration: 400,
            offset: 300
        });
    }, []);

    const { user } = project || {};
    const { projects } = user || {};
    // console.log(projects);


    return (
        <div
            data-aos="zoom-in-up"
            data-aos-anchor-placement="top-center"
            className=' p-5 md:p-10 min-h-screen md:mt-0 mt-[58px]'
            ref={scrollProject}
        >
            {/* services header section */}
            <h2 className='text-3xl font-bold border-b-[4px] border-[#ff714a] px-2 pb-2 text-white'>My Portfolio</h2>
            <h4 className=" text-right text-[#aaaa] text-xl mt-1">My Projects</h4>
            {/* projects details */}
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
                {
                    projects?.map(item => (
                        <div key={item._id}>
                            <div className="cart">
                                {/* project img and title */}
                                <div className=" overflow-hidden relative">
                                    <img className="background-image" src={item?.image?.url} alt="" />
                                    <p className=" absolute top-2 left-2 text-white block text-xs p-[2px] rounded-sm bg-[#222222]">{item?.title}</p>
                                </div>
                                {/* img details */}
                                <div className="rounded-b-md p-4 project-shadow">
                                    <div className=" flex justify-between items-center gap-2">
                                        <div className=" w-[80%]">
                                            <p className=" text-xs text-[#aaaa]">{item?.techStack}</p>
                                            <h1 className=' text-xl font-bold text-[#aaaa] text-white'>{item?.title}</h1>
                                            <p className=' text-[#aaaa] text-xs'>{item?.description}</p>
                                        </div>
                                        {/* details section */}
                                        <div className=" w-[20%] flex flex-col items-center gap-2">
                                            <button className="button-project"> <a target="blank" href={item?.liveUrl}>Live site</a></button>
                                            {item.githubServer ?
                                                <div className="flex flex-col items-center gap-2">
                                                    <button className="button-project"> <a target="blank" href={item?.githubClient}>Client</a></button>
                                                    <button className="button-project"> <a target="blank" href={item?.githubServer}>Server</a></button>
                                                </div>
                                                :
                                                <button className="button-project"> <a target="blank" href={item?.githubCode}>Code</a></button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Projects;

