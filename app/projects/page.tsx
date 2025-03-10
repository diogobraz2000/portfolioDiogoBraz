import Image from 'next/image';
import React from 'react'
import { FaReact } from 'react-icons/fa6';

function Home() {
    const projects = [
        {
            id:1,
            name:"Green Corner House Web App",
            img:"/gch-website.png",
            description:"A website that permits user to book and check their bookings for a tourism rental property",
            tech:["React","NodeJS", "ExpressJS"],
            status:"On Progress"
        },
        {
            id:2,
            name:"Air Quality Analytics",
            img:"/gch-website.png",
            description:"An application that gets data from a Portuguese website that contains information about the air quality in different measurement stations. The app filters the information and plots the data for simple analyses",
            tech:["Python","Pandas"],
            status:"Completed"
        },
        {
            id:3,
            name:"Multi-Agent Manufacturing System",
            img:"/gch-website.png",
            description:"The system comprises 2 working stations, an AVG, responsible for transporting the products to stations, and 2 Quality Control Stations. The system verifies if a station can receive a product and calls the AVG to transport the product to the free one.",
            tech:["JADE","Java"],
            status:"Completed"
        },
        {
            id:4,
            name:"Pharmacy Automated Supply ",
            img:"/gch-website.png",
            description:"The storage has a certain number of containers and the system is responsible for storing the products in the correct container. The user sets which container they want to store the pills in and stores that value to use to get the pills when the user asks for it.",
            tech:["C/C++"],
            status:"Completed"
        },
        {
            id:5,
            name:"Home Automation System",
            img:"/gch-website.png",
            description:"The system is composed by movement sensors, intelligent lamps, fire sensors, air quality sensors, and temperature sensors. The main goal is to optimize the energy consumption. Thus, every time the temperature reaches a certain temperature the AC is activated according to that. The lights will be set to on every time a person passes the sensor. The fire sensor is for a fire alarm that activates a fire sprinkler.",
            tech:["C/C++"],
            status:"Completed"
        }
    ];
  return (
    <div className='mt-20'>
      <h1 className='text-red-600 text-3xl text-center font-bold'>Projects</h1>
      <div className='flex flex-wrap px-24 gap-x-10 justify-center mt-20   '>
        {projects.map((project)=>
            <div className='bg-gray-900 group  w-96 h-96  mt-[20px] shadow-sm rounded-lg shadow-red-600 hover:shadow-lg duration-700 hover:scale-105'>
                <Image src={project.img} width={2000} height={2000} className='w-full h-1/2 rounded-t-lg' alt='Project'></Image>
                <div className='p-5'>
                    <h1 className='text-red-600 font-bold text-xl'>{project.name}</h1>
                    <div className='rounded-full bg-amber-200 w-fit p-1 px-2 mt-5'>
                        <h2 className='text-amber-600'>{project.status}</h2>
                    </div>
                    <ul className='tex-white   flex flex-wrap gap-4 mt-5'>
                        {project.tech.map((item)=>
                            <li className='text-white rounded-full shadow-lg shadow-black bg-gray-800 p-1 px-2 flex gap-1'>
                                <FaReact className='my-auto'></FaReact>
                                {item}
                            </li>
                        )}
                    </ul>
                    
                </div>
                
            </div>
        )}
      </div>
    </div>
  )
}

export default Home