'use client'
import React, { useEffect } from 'react'
import { FaAws, FaDocker, FaGit, FaGithub, FaPython } from 'react-icons/fa6'
import { SiGooglecloud, SiKubernetes } from 'react-icons/si'
import gsap from 'gsap'

function Cloud() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(".seven4", { opacity: 0, x: "-500vw" }, { opacity: 1, x: 0, duration: 1, ease: "power4.out", delay: 20 })
      .fromTo(".six4", { opacity: 0, x: "-150vw" }, { opacity: 1, x: 0, duration: 1, ease: "power4.out" })
      .fromTo(".five4", { opacity: 0, x: "-150vw" }, { opacity: 1, x: 0, duration: 1, ease: "power4.out" })
      .fromTo(".four4", { opacity: 0, x: "-150vw" }, { opacity: 1, x: 0, duration: 1, ease: "power4.out" })
      .fromTo(".three4", { opacity: 0, x: "-150vw" }, { opacity: 1, x: 0, duration: 1, ease: "power4.out" })
      .fromTo(".two4", { opacity: 0, x: "-150vw" }, { opacity: 1, x: 0, duration: 1, ease: "power4.out" })
      .fromTo(".one4", { opacity: 0, x: "-150vw" }, { opacity: 1, x: 0, duration: 1, ease: "power4.out" })
  }, [])

  return (
    <div className='mb-10'>
      <div className='relative mt-20 w-full'>
        <h1 className='flex border-b-2 border-red-500 text-white w-fit h-fit mx-auto text-3xl font-bold pb-2'>DevOps & Cloud</h1>
        <div className='flex flex-wrap justify-center items-center gap-10 w-3/4 mx-auto mt-10 max-md:w-full max-md:mx-auto'>
          {/* CI/CD */}
          <div className='h-56 w-36 bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5 one4 opacity-0'>
            <FaPython className='text-red-600 font-bold text-4xl w-fit mx-auto' />
            <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>CI/CD</h1>
            <h2 className='text-slate-200 text-sm mt-5 mx-auto w-fit text-center'>Continuous Integration and Deployment</h2>
          </div>
          {/* Git */}
          <div className='h-56 w-36 bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5 two4 opacity-0'>
            <FaGit className='text-red-600 font-bold text-4xl w-fit mx-auto' />
            <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>Git</h1>
            <h2 className='text-slate-200 text-sm mt-5 mx-auto w-fit text-center'>Version-control</h2>
          </div>
          {/* Github */}
          <div className='h-56 w-36 bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5 three4 opacity-0'>
            <FaGithub className='text-red-600 font-bold text-4xl w-fit mx-auto' />
            <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>Github</h1>
            <h2 className='text-slate-200 text-sm mt-5 mx-auto w-fit text-center'>Code Hosting Platform</h2>
          </div>
          {/* Docker */}
          <div className='h-56 w-36 bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5 four4 opacity-0'>
            <FaDocker className='text-red-600 font-bold text-4xl w-fit mx-auto' />
            <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>Docker</h1>
            <h2 className='text-slate-200 text-sm mt-5 mx-auto w-fit text-center'>Containerization</h2>
          </div>
          {/* Kubernetes */}
          <div className='h-56 w-36 bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5 five4 opacity-0'>
            <SiKubernetes className='text-red-600 font-bold text-4xl w-fit mx-auto' />
            <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>Kubernetes</h1>
            <h2 className='text-slate-200 text-sm mt-5 mx-auto w-fit text-center'>Container Orchestration</h2>
          </div>
          {/* AWS */}
          <div className='h-56 w-36 bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5 six4 opacity-0'>
            <FaAws className='text-red-600 font-bold text-4xl w-fit mx-auto' />
            <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>AWS</h1>
            <h2 className='text-slate-200 text-sm mt-5 mx-auto w-fit text-center'>Cloud Platform</h2>
          </div>
          {/* Google Cloud */}
          <div className='h-56 w-36 bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5 seven4 opacity-0'>
            <SiGooglecloud className='text-red-600 font-bold text-4xl w-fit mx-auto' />
            <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit text-center'>Google Cloud Platform</h1>
            <h2 className='text-slate-200 text-sm mt-5 mx-auto w-fit text-center'>Cloud Platform</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cloud
