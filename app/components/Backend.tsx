'use client'
import React, { useEffect } from 'react'
import { FaCss3, FaHtml5, FaJava, FaJs, FaNodeJs, FaPhp, FaPython, FaReact } from 'react-icons/fa6'
import { SiTypescript } from 'react-icons/si'
import gsap from 'gsap'
function Backend() {
    useEffect(()=>{
        const tl =gsap.timeline();

        tl.fromTo(".four1",{opacity:0,x:"-500vw"},{opacity:1,x:0,duration:1,ease:"power4.out",delay:5})
        .fromTo(".three1",{opacity:0,x:"-150vw"},{opacity:1,x:0,duration:1,ease:"power4.out"})
        .fromTo(".two1",{opacity:0,x:"-150vw"},{opacity:1,x:0,duration:1,ease:"power4.out"})
        .fromTo(".one1",{opacity:0,x:"-150vw"},{opacity:1,x:0,duration:1,ease:"power4.out"})
    },[])
  return (
    <div>
        <div className='relative mt-20 w-full'>
                    <h1 className=' flex border-b-2 border-red-500 text-white w-fit h-fit mx-auto text-3xl font-bold pb-2'>Backend</h1>
                    <div className='grid grid-cols-6 gap-10 w-3/4 mx-auto mt-10'>
                        <div className=' h-48  bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5 one1 opacity-0'>
                            <FaPython className='text-red-600 font-bold text-4xl w-fit mx-auto '></FaPython>
                            <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>Python</h1>
                            <h2 className=' text-slate-200 text-sm mt-5 mx-auto w-fit text-center'>Object-oriented Programming Language</h2>
                        </div>
                        <div className=' h-48  bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5 two1 opacity-0'>
                            <FaJava className='text-red-600  font-bold text-4xl w-fit mx-auto '></FaJava>
                            <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>Java</h1>
                            <h2 className=' text-slate-200 text-sm mt-5 mx-auto w-fit text-center'>Object-oriented Programming Language</h2>
                        </div>
                        <div className=' h-48  bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5 three1 opacity-0'>
                            <FaNodeJs className='text-red-600 font-bold text-4xl w-fit mx-auto '></FaNodeJs>
                            <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>Node.js</h1>
                            <h2 className=' text-slate-200 text-sm mt-5 mx-auto w-fit'>Backend Runtime</h2>
                        </div>
                        <div className=' h-48  bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5 four1 opacity-0'>
                            <FaPhp className='text-red-600 font-bold text-4xl w-fit mx-auto '></FaPhp>
                            <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>PHP</h1>
                            <h2 className=' text-slate-200 text-sm mt-5 mx-auto w-fit'>Backend Language</h2>
                        </div>
                        
                    </div>
                </div>
    </div>
  )
}

export default Backend