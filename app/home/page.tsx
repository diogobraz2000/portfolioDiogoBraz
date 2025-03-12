'use client'
import React from 'react'

import { IoIosInformationCircleOutline, IoMdPlay } from 'react-icons/io'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"
import Image from 'next/image'
import ScrollingTechnologies from '../components/Scroll'
  
function Home() {
  return (
    <div className='h-screen w-screen'>
        <div className='relative max-md:relative md:top-0 md:left-0 w-full max-md:w-fit max-md:mx-auto md:h-1/2 '>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="  w-full h-full object-cover z-10 max-md:hidden"
            >
                <source src="/home-video.mp4" type="video/mp4" />
            </video>
            <div className='absolute max-md:relative  max-md:w-fit max-md:mt-20 bottom-10 max-md:bottom-0 left-10 max-md:left-0 px-5 text-white max-md:mb-20'>
                <h1 className='text-4xl max-md:text-xl font-bold'>Diogo Braz - Full-Stack Developer</h1>
                <p className='w-1/2 max-md:w-full text-sm'>I&apos;m a front-end developer with a background in full-stack development, artificial intelligence, and robotics. Currently completing my Master&apos;s in Robotics and Digital Systems at NOVA School of Science and Technology, I work on projects that blend software engineering with intelligent systems. My experience includes developing web applications, optimizing AI-driven solutions, and leading technical teams. I&apos;ve worked on projects ranging from autonomous navigation systems to electric vehicle prototypes, always focusing on practical, scalable solutions. My goal is to create software that is both efficient and thoughtfully designed.</p>
                <div className='flex gap-2'>
                    <a className='flex p-2 bg-white text-black rounded-sm mt-2 gap-4 px-5' href="/cv.pdf">
                        <IoMdPlay className='my-auto text-3xl'></IoMdPlay>
                        <h1 className='font-bold text-lg my-auto'>Resume</h1>
                    </a>
                    <a className='flex p-2 bg-[#6D6D6EB3] text-white rounded-sm mt-2 gap-4 px-5' href='https://www.linkedin.com/in/diogo-miguel-braz-8339271a0/'>
                        <IoIosInformationCircleOutline  className='my-auto text-3xl'/>
                        <h1 className='font-bold text-lg my-auto'>Linkedin</h1>
                    </a>   
                </div>          
            </div>
        </div>
        <div className=' relative mt-32 max-md:mt-32 w-auto'>
            <div className='mt-10 w-full'>
                <h1 className='text-3xl font-bold text-white ml-5'>Today&apos;s Top Picks</h1>
                <Carousel className=' flex justify-center items-center gap-5  max-md:w-screen '>
                    <CarouselContent className=' flex items-center w-screen  py-5'>
                        <CarouselItem className='basis-1/6 max-md:basis-1/2 max-lg:basis-1/3 max-xl:basis-1/4'>
                            <div className=' relative w-56 h-56 max-md:w-40 max-md:h-40 bg-black hover:shadow-red-500 hover:shadow-lg duration-500 rounded-lg hover:scale-105 ' onClick={ ()=>{window.location.href='/skills';}}>
                                <Image src="/skills.avif" width={600} height={600} alt='work Experience' className='w-full h-full rounded-lg opacity-50 '></Image>
                                <h1 className='absolute left-1/2 -translate-x-1/2 top-1/2 -tranlate-y-1/2 text-white font-bold text-lg'>Skills</h1>
                            </div>
                        </CarouselItem>
                        <CarouselItem className='basis-1/6 max-md:basis-1/2 max-lg:basis-1/3 max-xl:basis-1/4'>
                            <div className=' relative w-56 h-56 max-md:w-40 max-md:h-40 bg-black hover:shadow-red-500 hover:shadow-lg duration-500 rounded-lg  hover:scale-105' onClick={ ()=>{window.location.href='/professional';}}>
                                <Image src="/work-experience.jpg" width={1000} height={100} alt='work Experience' className='w-full h-full rounded-lg opacity-50 '></Image>
                                <h1 className='absolute left-1/2 -translate-x-1/2 top-1/2 -tranlate-y-1/2 text-white font-bold text-lg'>Experience</h1>
                            </div>
                        </CarouselItem>
                        <CarouselItem className='basis-1/6 max-md:basis-1/2  max-lg:basis-1/3 max-xl:basis-1/4'>
                            <div className='relative w-56 h-56 max-md:w-40 max-md:h-40 bg-black hover:shadow-red-500 hover:shadow-lg duration-500 rounded-lg hover:scale-105' onClick={ ()=>{window.location.href='/education';}}>
                                <Image src="/education.webp" width={1000} height={100} alt='work Experience' className='w-full h-full rounded-lg opacity-50 '></Image>
                                <h1 className='absolute left-1/2 -translate-x-1/2 top-1/2 -tranlate-y-1/2 text-white font-bold text-lg'>Education</h1>
                            </div>
                        </CarouselItem>
                        <CarouselItem className='basis-1/6 max-md:basis-1/2 max-lg:basis-1/3 max-xl:basis-1/4'>
                            <div className='relative w-56 h-56 max-md:w-40 max-md:h-40 bg-black hover:shadow-red-500 hover:shadow-lg duration-500 rounded-lg hover:scale-105' onClick={ ()=>{window.location.href='/education#certifications';}}>
                                <Image src="/certifications.jpg" width={1000} height={100} alt='work Experience' className='w-full h-full rounded-lg opacity-50 '></Image>
                                <h1 className='absolute left-1/2 -translate-x-1/2 top-1/2 -tranlate-y-1/2 text-white font-bold text-lg'>Certifications</h1>
                            </div>
                        </CarouselItem>
                        <CarouselItem className='basis-1/6 max-md:basis-1/2 max-lg:basis-1/3 max-xl:basis-1/4'>
                            <div className='relative w-56 h-56 max-md:w-40 max-md:h-40 bg-black hover:shadow-red-500 hover:shadow-lg duration-500 rounded-lg hover:scale-105' onClick={ ()=>{window.location.href='/projects';}}>
                                <Image src="/projects.avif" width={1000} height={100} alt='work Experience' className='w-full h-full rounded-lg opacity-50 '></Image>
                                <h1 className='absolute left-1/2 -translate-x-1/2 top-1/2 -tranlate-y-1/2 text-white font-bold text-lg'>Projects</h1>
                            </div>
                        </CarouselItem>
                        <CarouselItem className='basis-1/6 max-md:basis-1/2 max-lg:basis-1/3 max-xl:basis-1/4'>
                            <div className='relative w-56 h-56 max-md:w-40 max-md:h-40 bg-black hover:shadow-red-500 hover:shadow-lg duration-500 rounded-lg hover:scale-105' onClick={ ()=>{window.location.href='/contacts';}}>
                                <Image src="/contacts.webp" width={1000} height={100} alt='work Experience' className='w-full h-full rounded-lg opacity-50 '></Image>
                                <h1 className='absolute left-1/2 -translate-x-1/2 top-1/2 -tranlate-y-1/2 text-white font-bold text-lg text-center'>Contact Me</h1>
                            </div>
                        </CarouselItem>
                        
                    </CarouselContent>
  
                </Carousel>
                
            </div>
            <ScrollingTechnologies></ScrollingTechnologies>
        </div>
        
    </div>
  )
}

export default Home