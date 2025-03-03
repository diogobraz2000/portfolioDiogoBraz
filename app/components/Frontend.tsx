import React from 'react'
import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa6'
import { SiTypescript } from 'react-icons/si'

function Frontend() {
  return (
    <div>
        <div className='absolute mt-20 w-full'>
            <h1 className=' flex border-b-2 border-red-500 text-white w-fit h-fit mx-auto text-3xl font-bold'>Frontend</h1>
            <div className='grid grid-cols-6 gap-10 w-3/4 mx-auto mt-10'>
                <div className=' h-48  bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5'>
                    <FaReact className='text-red-600 font-bold text-4xl w-fit mx-auto '></FaReact>
                    <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>React</h1>
                    <h2 className=' text-slate-200 text-sm mt-5 mx-auto w-fit'>Frontend Framework</h2>
                </div>
                <div className=' h-48  bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5'>
                    <FaJs className='text-red-600  font-bold text-4xl w-fit mx-auto '></FaJs>
                    <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>JavaScript</h1>
                    <h2 className=' text-slate-200 text-sm mt-5 mx-auto w-fit'>Scripting Language</h2>
                </div>
                <div className=' h-48  bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5'>
                    <FaHtml5 className='text-red-600 font-bold text-4xl w-fit mx-auto '></FaHtml5>
                    <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>HTML5</h1>
                    <h2 className=' text-slate-200 text-sm mt-5 mx-auto w-fit'>Markup Language</h2>
                </div>
                <div className=' h-48  bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5'>
                    <FaCss3 className='text-red-600 font-bold text-4xl w-fit mx-auto '></FaCss3>
                    <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>CSS</h1>
                    <h2 className=' text-slate-200 text-sm mt-5 mx-auto w-fit'>Web Pages Styling</h2>
                </div>
                <div className=' h-48  bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5'>
                
                    <SiTypescript className='text-red-600 font-bold text-3xl w-fit mx-auto '></SiTypescript>
                    <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>React</h1>
                    <h2 className=' text-slate-200 text-sm mt-5 mx-auto w-fit'>Frontend Framework</h2>
                </div>
                <div className=' h-48  bg-zinc-900 hover:shadow-lg hover:shadow-red-600 duration-500 hover:scale-105 rounded-lg p-5'>
                    <FaReact className='text-red-600 font-bold text-4xl w-fit mx-auto '></FaReact>
                    <h1 className='font-bold text-white text-xl mt-5 mx-auto w-fit'>React</h1>
                    <h2 className=' text-slate-200 text-sm mt-5 mx-auto w-fit'>Frontend Framework</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend