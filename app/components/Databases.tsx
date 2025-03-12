'use client'
import React, { useEffect } from 'react'
import { SiMongodb, SiMysql, SiPostgresql } from 'react-icons/si'
import gsap from 'gsap';

function Databases() {
    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(".three2", { opacity: 0, x: "-150vw" }, { opacity: 1, x: 0, duration: 1, ease: "power4.out", delay: 10 })
            .fromTo(".two2", { opacity: 0, x: "-150vw" }, { opacity: 1, x: 0, duration: 1, ease: "power4.out" })
            .fromTo(".one2", { opacity: 0, x: "-150vw" }, { opacity: 1, x: 0, duration: 1, ease: "power4.out" })
    }, [])

    return (
        <div>
            <div className='relative mt-20 w-full'>
                <h1 className='flex border-b-2 border-red-500 text-white w-fit h-fit mx-auto text-3xl font-bold pb-2'>Databases</h1>
                <div className='flex flex-wrap justify-center items-center gap-10 w-3/4 mx-auto mt-10 max-md:w-full max-md:mx-auto'>
                    {/* MySQL */}
                    <div className='h-56 w-36 bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5 one2 opacity-0'>
                        <SiMysql className='text-red-600 font-bold text-4xl w-fit mx-auto ' />
                        <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>MySQL</h1>
                        <h2 className='text-slate-200 text-sm mt-5 mx-auto w-fit text-center'>Relational Database</h2>
                    </div>
                    {/* PostgreSQL */}
                    <div className='h-56 w-36 bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5 two2 opacity-0'>
                        <SiPostgresql className='text-red-600 font-bold text-4xl w-fit mx-auto ' />
                        <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>PostgreSQL</h1>
                        <h2 className='text-slate-200 text-sm mt-5 mx-auto w-fit text-center'>Relational Database</h2>
                    </div>
                    {/* MongoDB */}
                    <div className='h-56 w-36 bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5 three2 opacity-0'>
                        <SiMongodb className='text-red-600 font-bold text-4xl w-fit mx-auto ' />
                        <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>MongoDB</h1>
                        <h2 className='text-slate-200 text-sm mt-5 mx-auto w-fit text-center'>NoSQL database</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Databases
