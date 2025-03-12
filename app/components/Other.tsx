'use client'
import React, { useEffect } from 'react'
import { SiNumpy, SiOpencv, SiPandas, SiPytorch } from 'react-icons/si'
import gsap from 'gsap';
function Other() {
    useEffect(()=>{
        const tl =gsap.timeline();

        tl.fromTo(".one3",{opacity:0,x:"500vw"},{opacity:1,x:0,duration:1,ease:"power4.out",delay:15})
        .fromTo(".two3",{opacity:0,x:"150vw"},{opacity:1,x:0,duration:1,ease:"power4.out"})
        .fromTo(".three3",{opacity:0,x:"150vw"},{opacity:1,x:0,duration:1,ease:"power4.out"})
        .fromTo(".four3",{opacity:0,x:"150vw"},{opacity:1,x:0,duration:1,ease:"power4.out"})
    },[])  
  return (
    <div>
        <div className='relative mt-20 w-full'>
            <h1 className='flex border-b-2 border-red-500 text-white w-fit h-fit mx-auto text-3xl font-bold pb-2 text-center'>ML & Data Science & Computer Vision</h1>
            <div className='flex flex-wrap justify-center items-center gap-10 w-3/4 mx-auto mt-10 max-md:w-full max-md:mx-auto'>
                {/* Python */}
                <div className='h-56 w-36 bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5 one3 opacity-0 '>
                    <SiPytorch className='text-red-600 font-bold text-4xl w-fit mx-auto ' />
                    <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>Pytorch</h1>
                    <h2 className='text-slate-200 text-sm mt-5 mx-auto w-fit text-center'>Machine Learning framework</h2>
                </div>
                {/* OpneCV */}
                <div className='h-56 w-36 bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5 two3 opacity-0 '>
                    <SiOpencv className='text-red-600 font-bold text-4xl w-fit mx-auto ' />
                    <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>OpenCV</h1>
                    <h2 className='text-slate-200 text-sm mt-5 mx-auto w-fit text-center'>Computer Vision and Machine Learning Software</h2>
                </div>
                {/* Pandas */}
                <div className='h-56 w-36 bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5 three3 opacity-0 '>
                    <SiPandas className='text-red-600 font-bold text-4xl w-fit mx-auto ' />
                    <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>Pandas</h1>
                    <h2 className='text-slate-200 text-sm mt-5 mx-auto w-fit text-center'>Data Analysis and Manipulation Library</h2>
                </div>
                {/* NumPy */}
                <div className='h-56 w-36 bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5 four3 opacity-0 '>
                    <SiNumpy className='text-red-600 font-bold text-4xl w-fit mx-auto ' />
                    <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>NumPy</h1>
                    <h2 className='text-slate-200 text-sm mt-5 mx-auto w-fit text-center'>Python Library</h2>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Other