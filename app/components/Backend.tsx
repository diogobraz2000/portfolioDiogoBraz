'use client'
import React, { useEffect } from 'react'
import { FaJava, FaNodeJs, FaPhp, FaPython } from 'react-icons/fa6'
import gsap from 'gsap'

function Backend() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(".one1", { opacity: 0, x: "500vw" }, { opacity: 1, x: 0, duration: 1, ease: "power4.out", delay: 5 })
      .fromTo(".two1", { opacity: 0, x: "150vw" }, { opacity: 1, x: 0, duration: 1, ease: "power4.out" })
      .fromTo(".three1", { opacity: 0, x: "150vw" }, { opacity: 1, x: 0, duration: 1, ease: "power4.out" })
      .fromTo(".four1", { opacity: 0, x: "150vw" }, { opacity: 1, x: 0, duration: 1, ease: "power4.out" })
  }, [])

  return (
    <div className='relative mt-20 w-full'>
      <h1 className='flex border-b-2 border-red-500 text-white w-fit h-fit mx-auto text-3xl font-bold pb-2'>Backend</h1>
      <div className='flex flex-wrap justify-center items-center gap-10 w-3/4 max-md:w-full max-md:mx-auto mt-10'>
        {/* Python */}
        <div className='h-56 w-36 bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5 one1 opacity-0'>
          <FaPython className='text-red-600 font-bold text-4xl w-fit mx-auto' />
          <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>Python</h1>
          <h2 className='text-slate-200 text-sm mt-5 mx-auto w-fit text-center'>Object-oriented Programming Language</h2>
        </div>
        {/* Java */}
        <div className='h-56 w-36 bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5 two1 opacity-0'>
          <FaJava className='text-red-600 font-bold text-4xl w-fit mx-auto' />
          <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>Java</h1>
          <h2 className='text-slate-200 text-sm mt-5 mx-auto w-fit text-center'>Object-oriented Programming Language</h2>
        </div>
        {/* Node.js */}
        <div className='h-56 w-36 bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5 three1 opacity-0'>
          <FaNodeJs className='text-red-600 font-bold text-4xl w-fit mx-auto' />
          <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>Node.js</h1>
          <h2 className='text-slate-200 text-sm mt-5 mx-auto w-fit text-center'>Backend Runtime</h2>
        </div>
        {/* PHP */}
        <div className='h-56 w-36 bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5 four1 opacity-0'>
          <FaPhp className='text-red-600 font-bold text-4xl w-fit mx-auto' />
          <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>PHP</h1>
          <h2 className='text-slate-200 text-sm mt-5 mx-auto w-fit text-center'>Backend Language</h2>
        </div>
      </div>
    </div>
  )
}

export default Backend
