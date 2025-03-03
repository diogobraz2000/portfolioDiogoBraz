import React from 'react'

import { IoIosInformationCircleOutline, IoMdPlay } from 'react-icons/io'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"
import Image from 'next/image'
  
function Home() {
  return (
    <div className='h-screen w-screen'>
        <div className='absolute top-0 left-0 w-full h-1/2'>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="  w-full h-full object-cover z-10"
            >
                <source src="/home-video.mp4" type="video/mp4" />
            </video>
            <div className='absolute bottom-10 left-10 text-white'>
                <h1 className='text-4xl font-bold'>Diogo Braz - Full-Stack Developer</h1>
                <p className='w-1/2 text-sm'>I'm a front-end developer with a background in full-stack development, artificial intelligence, and robotics. Currently completing my Master’s in Robotics and Digital Systems at NOVA School of Science and Technology, I work on projects that blend software engineering with intelligent systems. My experience includes developing web applications, optimizing AI-driven solutions, and leading technical teams. I’ve worked on projects ranging from autonomous navigation systems to electric vehicle prototypes, always focusing on practical, scalable solutions. My goal is to create software that is both efficient and thoughtfully designed.</p>
                <div className='flex gap-2'>
                    <button className='flex p-2 bg-white text-black rounded-sm mt-2 gap-4 px-5'>
                        <IoMdPlay className='my-auto text-3xl'></IoMdPlay>
                        <h1 className='font-bold text-lg my-auto'>Resume</h1>
                    </button>
                    <a className='flex p-2 bg-[#6D6D6EB3] text-white rounded-sm mt-2 gap-4 px-5'>
                        <IoIosInformationCircleOutline  className='my-auto text-3xl'/>
                        <h1 className='font-bold text-lg my-auto'>Linkedin</h1>
                    </a>   
                </div>          
            </div>
        </div>
        <div className=' absolute top-1/2 w-full'>
            <div className='mt-10 w-full'>
                <h1 className='text-3xl font-bold text-white ml-5'>Today's Top Picks</h1>
                <Carousel className=' ml-5 gap-5 w-full   p-5'>
                    <CarouselContent className='p-4'>
                        <CarouselItem className='basis-1/6'>
                            <div className=' relative w-56 h-56 bg-black hover:shadow-red-500 hover:shadow-lg duration-500 rounded-lg hover:scale-105'>
                                <Image src="/skills.avif" width={600} height={600} alt='work Experience' className='w-full h-full rounded-lg opacity-50 '></Image>
                                <h1 className='absolute left-1/2 -translate-x-1/2 top-1/2 -tranlate-y-1/2 text-white font-bold text-lg'>Skills</h1>
                            </div>
                        </CarouselItem>
                        <CarouselItem className='basis-1/6'>
                            <div className=' relative w-56 h-56 bg-black hover:shadow-red-500 hover:shadow-lg duration-500 rounded-lg align-middle hover:scale-105'>
                                <Image src="/work-experience.jpg" width={1000} height={100} alt='work Experience' className='w-full h-full rounded-lg opacity-50 '></Image>
                                <h1 className='absolute left-1/2 -translate-x-1/2 top-1/2 -tranlate-y-1/2 text-white font-bold text-lg'>Experience</h1>
                            </div>
                        </CarouselItem>
                        <CarouselItem className='basis-1/6'>
                            <div className='relative w-56 h-56 bg-black hover:shadow-red-500 hover:shadow-lg duration-500 rounded-lg hover:scale-105'>
                                <Image src="/education.webp" width={1000} height={100} alt='work Experience' className='w-full h-full rounded-lg opacity-50 '></Image>
                                <h1 className='absolute left-1/2 -translate-x-1/2 top-1/2 -tranlate-y-1/2 text-white font-bold text-lg'>Education</h1>
                            </div>
                        </CarouselItem>
                        <CarouselItem className='basis-1/6'>
                            <div className='relative w-56 h-56 bg-black hover:shadow-red-500 hover:shadow-lg duration-500 rounded-lg hover:scale-105'>
                                <Image src="/certifications.jpg" width={1000} height={100} alt='work Experience' className='w-full h-full rounded-lg opacity-50 '></Image>
                                <h1 className='absolute left-1/2 -translate-x-1/2 top-1/2 -tranlate-y-1/2 text-white font-bold text-lg'>Certifications</h1>
                            </div>
                        </CarouselItem>
                        <CarouselItem className='basis-1/6'>
                            <div className='relative w-56 h-56 bg-black hover:shadow-red-500 hover:shadow-lg duration-500 rounded-lg hover:scale-105'>
                                <Image src="/projects.avif" width={1000} height={100} alt='work Experience' className='w-full h-full rounded-lg opacity-50 '></Image>
                                <h1 className='absolute left-1/2 -translate-x-1/2 top-1/2 -tranlate-y-1/2 text-white font-bold text-lg'>Projects</h1>
                            </div>
                        </CarouselItem>
                        <CarouselItem className='basis-1/6'>
                            <div className='relative w-56 h-56 bg-black hover:shadow-red-500 hover:shadow-lg duration-500 rounded-lg hover:scale-105'>
                                <Image src="/contacts.webp" width={1000} height={100} alt='work Experience' className='w-full h-full rounded-lg opacity-50 '></Image>
                                <h1 className='absolute left-1/2 -translate-x-1/2 top-1/2 -tranlate-y-1/2 text-white font-bold text-lg'>Contact Me</h1>
                            </div>
                        </CarouselItem>
                        
                    </CarouselContent>
  
                </Carousel>
                
            </div>
            <div className='mt-10 w-full'>
                <h1 className='text-3xl font-bold text-white ml-5'>Today's Top Picks</h1>
                <Carousel className=' ml-5 gap-5 w-full   p-5'>
                    <CarouselContent className='p-4'>
                        <CarouselItem className='basis-1/6'>
                            <div className=' relative w-56 h-56 bg-black hover:shadow-red-500 hover:shadow-xl duration-500 rounded-lg'>
                                <Image src="/skills.avif" width={600} height={600} alt='work Experience' className='w-full h-full rounded-lg opacity-50 '></Image>
                                <h1 className='absolute left-1/2 -translate-x-1/2 top-1/2 -tranlate-y-1/2 text-white font-bold text-lg'>Hobbies</h1>
                            </div>
                        </CarouselItem>
                        <CarouselItem className='basis-1/6'>
                            <div className=' relative w-56 h-56 bg-black hover:shadow-red-500 hover:shadow-xl duration-500 rounded-lg align-middle'>
                                <Image src="/work-experience.jpg" width={1000} height={100} alt='work Experience' className='w-full h-full rounded-lg opacity-50 '></Image>
                                <h1 className='absolute left-1/2 -translate-x-1/2 top-1/2 -tranlate-y-1/2 text-white font-bold text-lg'>Music</h1>
                            </div>
                        </CarouselItem>
                        <CarouselItem className='basis-1/6'>
                            <div className='relative w-56 h-56 bg-black hover:shadow-red-500 hover:shadow-xl duration-500 rounded-lg'>
                                <Image src="/work-experience.jpg" width={1000} height={100} alt='work Experience' className='w-full h-full rounded-lg opacity-50 '></Image>
                                <h1 className='absolute left-1/2 -translate-x-1/2 top-1/2 -tranlate-y-1/2 text-white font-bold text-lg'>Books</h1>
                            </div>
                        </CarouselItem>
                        
                        
                    </CarouselContent>
  
                </Carousel>
                
            </div>
        </div>
        
    </div>
  )
}

export default Home