import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

function Home() {
  return (
    <div className='mt-96 max-2xl:mt-30 duration-500'>
        <div className='p-5 mx-auto w-fit max-md:w-screen h-fit my-auto'>
            <div className='flex gap-4'>
                <Image src="/profilepic.jpeg" width={1000} height={1000} alt='profile' className='w-48 h-48 max-md:w-20 max-md:h-20 rounded-full my-auto'></Image>
                <div className='mx-auto h-fit p-2'>
                    <h1 className='text-4xl text-red-600 max-md:text-2xl'>Diogo Miguel Braz</h1>
                    <div className='flex gap-2 max-md:flex-col max-md:justify-center'>
                        <Link href="https://github.com/diogobraz2000" className='w-fit px-4 flex gap-2 max-md:mx-auto bg-purple-500 rounded-lg mt-4 hover:scale-105 hover:shadow-md duration-500 hover:shadow-zinc-700'>
                            <FaGithub className='text-white text-2xl my-auto '></FaGithub>
                            <h1 className='text-xl text-white'>GitHub</h1>
                        </Link>
                        <Link href="https://www.linkedin.com/in/diogo-miguel-braz-8339271a0/" className='w-fit px-4 max-md:mx-auto flex gap-2 bg-blue-500 rounded-lg mt-4 hover:scale-105 hover:shadow-md duration-500 hover:shadow-zinc-700'>
                            <FaLinkedin className='text-white text-2xl my-auto '></FaLinkedin>
                            <h1 className='text-xl text-white'>LinkedIn</h1>
                        </Link>
                    </div>
                    <h1 className='rounded-full bg-zinc-900 hover:shadow-red-600 text-white hover:shadow-md duration-700 w-fit mx-auto p-2 mt-5 hover:scale-105'>diogodbraz@icloud.com</h1>
                    
                </div>
            </div>
            <p className='text-zinc-200 max-md:w-full w-xl mt-5'>Software Developer with expertise in Full-Stack Development, Machine Learning, and Computer Vision. Experienced in designing scalable applications using JavaScript (MERN Stack), Python, and AI frameworks. Strong background in microservices architecture, cloud deployment, and embedded systems. Passionate about problem-solving and innovation in software engineering.</p>
        </div>
    </div>
  )
}

export default Home