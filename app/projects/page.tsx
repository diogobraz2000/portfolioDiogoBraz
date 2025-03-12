import Image from 'next/image';
import React, { JSX } from 'react'
import { FaJava, FaNodeJs, FaPython, FaReact } from 'react-icons/fa6';
import { SiC, SiExpress, SiFastapi, SiPandas } from 'react-icons/si';

function Home() {
    const techIcons: Record<string, JSX.Element> = {
        "React": <FaReact className="my-auto text-red-600" />,
        "NodeJS": <FaNodeJs className="my-auto text-red-600" />,
        "ExpressJS": <SiExpress className="my-auto text-red-600" />,
        "Python": <FaPython className="my-auto text-red-600" />,
        "Pandas": <SiPandas className="my-auto text-red-600" />,
        "Java": <FaJava className="my-auto text-red-600" />,
        "FastAPI": <SiFastapi className="my-auto text-red-600" />,
        "YOLO": <></>,
        "C/C++": <SiC className="my-auto text-red-600" />,
        "JADE": <></>
    };
    const projects = [
        {
            id:1,
            name:"Green Corner House Web App",
            img:"/gch-website.png",
            description:"This project is a fully functional rental guest house website that streamlines the booking process for guests while providing property owners with an easy-to-manage platform. The website offers a seamless experience for booking stays, checking in, and managing reservations with an intuitive and user-friendly interface.",
            tech:["React","NodeJS", "ExpressJS"],
            status:"On Progress"
        },
        {
            id:6,
            name:"Vehicle Route Optimization Engine",
            img:"/vre.webp",
            description:"This project is a Vehicle Route Optimization Engine designed to efficiently plan and optimize routes for vehicles in real-time. Whether for logistics, delivery services, ride-sharing, or fleet management, this system provides the best possible routes based on various parameters such as traffic conditions, road restrictions, and delivery priorities.",
            tech:["React","NodeJS", "ExpressJS","Python","FastAPI"],
            status:"On Progress"
        },
        {
            id:2,
            name:"Air Quality Analytics",
            img:"/aqanal.webp",
            description:"An application that gets data from a Portuguese website that contains information about the air quality in different measurement stations. The app filters the information and plots the data for simple analyses",
            tech:["Python","Pandas"],
            status:"Completed"
        },
        {
            id:3,
            name:"Multi-Agent Manufacturing System",
            img:"/mams.webp",
            description:"The system comprises 2 working stations, an AVG, responsible for transporting the products to stations, and 2 Quality Control Stations. The system verifies if a station can receive a product and calls the AVG to transport the product to the free one.",
            tech:["JADE","Java","Python","YOLO","FastAPI"],
            status:"Completed"
        },
        {
            id:4,
            name:"Pharmacy Automated Supply ",
            img:"/pas.webp",
            description:"The storage has a certain number of containers and the system is responsible for storing the products in the correct container. The user sets which container they want to store the pills in and stores that value to use to get the pills when the user asks for it.",
            tech:["C/C++"],
            status:"Completed"
        },
        {
            id:5,
            name:"Home Automation System",
            img:"/has.webp",
            description:"The system is composed by movement sensors, intelligent lamps, fire sensors, air quality sensors, and temperature sensors. The main goal is to optimize the energy consumption. Thus, every time the temperature reaches a certain temperature the AC is activated according to that. The lights will be set to on every time a person passes the sensor. The fire sensor is for a fire alarm that activates a fire sprinkler.",
            tech:["C/C++"],
            status:"Completed"
        }
    ];
  return (
    <div className='mt-20'>
      <h1 className='text-red-600 text-3xl text-center font-bold'>Projects</h1>
      <div className='flex flex-wrap px-24 max-md:px-5 gap-10 justify-center  py-20   '>
        {projects.map((project)=>
            <div key={project.id} className='bg-zinc-900 group overflow-hidden pb-5 max-md:w-screen mx-1 w-96 h-[650px]  shadow-sm rounded-lg shadow-red-600 hover:shadow-lg duration-700 hover:scale-105'>
                <Image src={project.img} width={2000} height={2000} className='w-full h-1/3 rounded-t-lg' alt='Project'></Image>
                <div className='p-5'>
                    <h1 className='text-red-600 font-bold text-xl'>{project.name}</h1>
                    <div className={`${project.status=="Completed"?"bg-green-200":"bg-amber-200"} rounded-full  w-fit p-1 px-2 mt-5`}>
                        <h2 className={`${project.status=="Completed"?"tex-green-600":"text-amber-600"}`}>{project.status}</h2>
                    </div>
                    <ul className='text-red-600   flex flex-wrap gap-4 mt-5'>
                        {project.tech.map((item,index)=>
                            <li  key={index} className='text-white rounded-full shadow-lg shadow-black bg-gray-800 p-1 px-2 flex gap-1'>
                                {techIcons[item] || <FaReact className="my-auto text-red-600" />}
                                {item}
                            </li>
                        )}
                    </ul>
                    <p className='text-white mt-5 overflow-hidden word-wrap'>{project.description}</p>
                </div>
                
            </div>
        )}
      </div>
    </div>
  )
}

export default Home