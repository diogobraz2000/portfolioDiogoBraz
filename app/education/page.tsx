
import React from 'react'
import TimelineEducation from '../components/TimelineEducation'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import { FaBrain, FaCss3, FaDocker, FaGit, FaGithub, FaHtml5, FaJs, FaNodeJs, FaPython, FaReact } from 'react-icons/fa6'
import { SiExpress, SiKubernetes } from 'react-icons/si'

function Home() {
  return (
    <div>
        <div className='mt-30'>
            <TimelineEducation></TimelineEducation>
        </div>
        <div id='certifications' className='mb-10'>
            <h1 className='text-red-600 text-3xl font-bold w-fit mx-auto mt-10'>Certifications</h1>
            <div>
                <Carousel className='w-3/4 mx-auto mt-10'>
                    <CarouselContent className='w-full mx-auto p-7 '>
                        <CarouselItem className='basis-1/3 max-xl:basis-full'>
                            <div className='bg-gray-950 shadow-red-500 border border-slate-500 shadow-md text-white h-96 p-5 rounded-2xl hover:shadow-lg duration-500 hover:scale-105'>
                                <Image src="/Harvard.png" width={150} height={150} alt='logo' className='border rounded-full w-28 h-28 bg-white'></Image>
                                <h1 className='mt-2 text-2xl font-bold'>Introduction to Artificial Intelligence with Python</h1>
                                <h2 className='text-large font-semibold'>CS50 Harvard Online</h2>
                                <div className='flex flex-wrap w-full mt-2 gap-2'>
                                    <div className='rounded-xl flex gap-1 bg-black w-fit px-2 hover:scale-105 hover:bg-red-600 hover:text-black hover:shadow-md hover:shadow-red-600 duration-500 text-white'>
                                        <FaPython className='my-auto '></FaPython>
                                        <h1>Pyhton</h1>
                                    </div>
                                    <div className='rounded-xl flex gap-1 bg-black w-fit px-2 text-white hover:scale-105 hover:bg-red-600 hover:text-black hover:shadow-md hover:shadow-red-600 duration-500'>
                                        <FaBrain className='my-auto '></FaBrain>
                                        <h1>AI</h1>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </CarouselItem>
                        
                        <CarouselItem className='basis-1/3 max-xl:basis-full'>
                            <div className='bg-gray-950 shadow-red-500 border border-slate-500 shadow-md text-white h-96 p-5 rounded-2xl hover:shadow-lg  duration-500 hover:scale-105'>
                                <Image src="/Harvard.png" width={150} height={150} alt='logo' className='border rounded-full w-28 h-28 bg-white'></Image>
                                <h1 className='mt-2 text-2xl font-bold'>Web Programming with Python and JavaScript </h1>
                                <h2 className='text-large font-semibold'>CS50 Harvard Online</h2>
                                <div className='flex flex-wrap w-full mt-2 gap-2'>
                                    <div className='rounded-xl flex gap-1 bg-black w-fit px-2 text-white  hover:scale-105 hover:bg-red-600 hover:text-black hover:shadow-md hover:shadow-red-600 duration-500'>
                                        <FaHtml5 className='my-auto '></FaHtml5>
                                        <h1>HTML</h1>
                                    </div>
                                    <div className='rounded-xl flex gap-1 bg-black w-fit px-2 text-white hover:scale-105 hover:bg-red-600 hover:text-black hover:shadow-md hover:shadow-red-600 duration-500'>
                                        <FaCss3 className='my-auto '></FaCss3>
                                        <h1>CSS</h1>
                                    </div>
                                    <div className='rounded-xl flex gap-1 bg-black w-fit px-2 text-white hover:scale-105 hover:bg-red-600 hover:text-black hover:shadow-md hover:shadow-red-600 duration-500'>
                                        <FaPython className='my-auto '></FaPython>
                                        <h1>Python</h1>
                                    </div>
                                    <div className='rounded-xl flex gap-1 bg-black w-fit px-2 text-white hover:scale-105 hover:bg-red-600 hover:text-black hover:shadow-md hover:shadow-red-600 duration-500'>
                                        <FaJs className='my-auto '></FaJs>
                                        <h1>JavaScript</h1>
                                    </div>
                                    <div className='rounded-xl flex gap-1 bg-black w-fit px-2 text-white hover:scale-105 hover:bg-red-600 hover:text-black hover:shadow-md hover:shadow-red-600 duration-500'>
                                        <FaGit className='my-auto '></FaGit>
                                        <h1>Git</h1>
                                    </div>
                                    <div className='rounded-xl flex gap-1 bg-black w-fit px-2 text-white hover:scale-105 hover:bg-red-600 hover:text-black hover:shadow-md hover:shadow-red-600 duration-500'>
                                        <FaGithub className='my-auto '></FaGithub>
                                        <h1>GitHub</h1>
                                    </div>
                                    
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className='basis-1/3 max-xl:basis-full'>
                            <div className='bg-gray-950 shadow-red-500 border border-slate-500 shadow-md text-white h-96 p-5 rounded-2xl hover:shadow-lg duration-500 hover:scale-105'>
                                <Image src="/udemy-logo.png" width={150} height={150} alt='logo' className='border rounded-full w-28 h-28 bg-white'></Image>
                                <h1 className='mt-2 text-2xl font-bold'>Microservices with NodeJS and React</h1>
                                <h2 className='text-large font-semibold'>Udemy - Stephen Grider</h2>
                                <div className='flex flex-wrap w-full mt-2 gap-2'>
                                    <div className='rounded-xl flex gap-1 bg-black w-fit px-2 text-white hover:scale-105 hover:bg-red-600 hover:text-black hover:shadow-md hover:shadow-red-600 duration-500'>
                                        <FaDocker className='my-auto '></FaDocker>
                                        <h1>Docker</h1>
                                    </div>
                                    <div className='rounded-xl flex gap-1 bg-black w-fit px-2 text-white hover:scale-105 hover:bg-red-600 hover:text-black hover:shadow-md hover:shadow-red-600 duration-500'>
                                        <SiKubernetes className='my-auto '></SiKubernetes>
                                        <h1>kubernetes</h1>
                                    </div>
                                    <div className='rounded-xl flex gap-1 bg-black w-fit px-2 text-white hover:scale-105 hover:bg-red-600 hover:text-black hover:shadow-md hover:shadow-red-600 duration-500'>
                                        <FaNodeJs className='my-auto '></FaNodeJs>
                                        <h1>NodeJs</h1>
                                    </div>
                                    <div className='rounded-xl flex gap-1 bg-black w-fit px-2 text-white hover:scale-105 hover:bg-red-600 hover:text-black hover:shadow-md hover:shadow-red-600 duration-500'>
                                        <FaReact className='my-auto '></FaReact>
                                        <h1>React</h1>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className='basis-1/3 max-xl:basis-full'>
                            <div className='bg-gray-950 shadow-red-500 border border-slate-500 shadow-md text-white h-96 p-5 rounded-2xl hover:shadow-lg  duration-500 hover:scale-105'>
                                <Image src="/CodeAC.png" width={150} height={150} alt='logo' className='border rounded-full w-28 h-28 bg-white'></Image>
                                <h1 className='mt-2 text-2xl font-bold'>Full-Stack Carreer Path</h1>
                                <h2 className='text-large font-semibold'>Code Academy</h2>
                                <div className='flex flex-wrap w-full mt-2 gap-2'>
                                    <div className='rounded-xl flex gap-1 bg-black w-fit px-2 text-white hover:scale-105 hover:bg-red-600 hover:text-black hover:shadow-md hover:shadow-red-600 duration-500'>
                                        <FaReact className='my-auto '></FaReact>
                                        <h1>React</h1>
                                    </div>
                                    <div className='rounded-xl flex gap-1 bg-black w-fit px-2 text-white hover:scale-105 hover:bg-red-600 hover:text-black hover:shadow-md hover:shadow-red-600 duration-500'>
                                        <FaNodeJs className='my-auto '></FaNodeJs>
                                        <h1>NodeJs</h1>
                                    </div>
                                    <div className='rounded-xl flex gap-1 bg-black w-fit px-2 text-white hover:scale-105 hover:bg-red-600 hover:text-black hover:shadow-md hover:shadow-red-600 duration-500'>
                                        <SiExpress className='my-auto '></SiExpress>
                                        <h1>Expres.js</h1>
                                    </div>
                                    <div className='rounded-xl flex gap-1 bg-black w-fit px-2 text-white hover:scale-105 hover:bg-red-600 hover:text-black hover:shadow-md hover:shadow-red-600 duration-500'>
                                        <FaJs className='my-auto '></FaJs>
                                        <h1>JavaScript</h1>
                                    </div>
                                    <div className='rounded-xl flex gap-1 bg-black w-fit px-2 text-white hover:scale-105 hover:bg-red-600 hover:text-black hover:shadow-md hover:shadow-red-600 duration-500'>
                                        <FaCss3 className='my-auto '></FaCss3>
                                        <h1>CSS</h1>
                                    </div>
                                    <div className='rounded-xl flex gap-1 bg-black w-fit px-2 text-white hover:scale-105 hover:bg-red-600 hover:text-black hover:shadow-md hover:shadow-red-600 duration-500'>
                                        <FaHtml5 className='my-auto '></FaHtml5>
                                        <h1>HTML</h1>
                                    </div>
                                    
                                </div>
                            </div>
                        </CarouselItem>
                        
                    </CarouselContent>
                    <CarouselPrevious className='bg-red-600 brightness-200'></CarouselPrevious>
                    <CarouselNext className='bg-red-600 brightness-200'></CarouselNext>
                </Carousel>
            </div>
        </div>
    </div>
  )
}

export default Home