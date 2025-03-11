"use client"
import gsap from 'gsap'
import React, { useEffect } from 'react'
import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa6'
import { SiTypescript } from 'react-icons/si'

function Frontend() {
    useEffect(()=>{
        const tl =gsap.timeline();

        tl.fromTo(".five",{opacity:0,x:"-500vw"},{opacity:1,x:0,duration:1,ease:"power4.out"})
        .fromTo(".four",{opacity:0,x:"-150vw"},{opacity:1,x:0,duration:1,ease:"power4.out"})
        .fromTo(".three",{opacity:0,x:"-150vw"},{opacity:1,x:0,duration:1,ease:"power4.out"})
        .fromTo(".two",{opacity:0,x:"-150vw"},{opacity:1,x:0,duration:1,ease:"power4.out"})
        .fromTo(".one",{opacity:0,x:"-150vw"},{opacity:1,x:0,duration:1,ease:"power4.out"})
    },[])
  return (
    <div>
        <div className='relative mt-20 w-full'>
            <h1 className=' flex border-b-2 border-red-500 text-white w-fit h-fit mx-auto text-3xl font-bold pb-2'>Frontend</h1>
            <div className='flex flex-wrap gap-10 w-3/4 mx-auto mt-10'>
                <div className=' h-56 w-36 bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5 one opacity-0'>
                    <FaReact className='text-red-600 font-bold text-4xl w-fit mx-auto '></FaReact>
                    <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>React</h1>
                    <h2 className=' text-slate-200 text-sm mt-5 mx-auto w-fit text-center'>Frontend Framework</h2>
                </div>
                <div className=' h-56 w-36 bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5 two opacity-0' >
                    <FaJs className='text-red-600  font-bold text-4xl w-fit mx-auto '></FaJs>
                    <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>JavaScript</h1>
                    <h2 className=' text-slate-200 text-sm mt-5 mx-auto w-fit text-center'>Scripting Language</h2>
                </div>
                <div className=' h-56 w-36 bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5 three opacity-0'>
                    <FaHtml5 className='text-red-600 font-bold text-4xl w-fit mx-auto '></FaHtml5>
                    <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>HTML5</h1>
                    <h2 className=' text-slate-200 text-sm mt-5 mx-auto w-fit text-center'>Markup Language</h2>
                </div>
                <div className=' h-56 w-36 bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5 four opacity-0'>
                    <FaCss3 className='text-red-600 font-bold text-4xl w-fit mx-auto '></FaCss3>
                    <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>CSS</h1>
                    <h2 className=' text-slate-200 text-sm mt-5 mx-auto w-fit text-center'>Web Pages Styling</h2>
                </div>
                <div className=' h-56 w-36 bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5 five opacity-0'>
                 
                    <SiTypescript className='text-red-600 font-bold text-3xl w-fit mx-auto '></SiTypescript>
                    <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>TypeScript</h1>
                    <h2 className=' text-slate-200 text-sm mt-5 mx-auto w-fit text-center'>Superset of JavaScript</h2>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Frontend