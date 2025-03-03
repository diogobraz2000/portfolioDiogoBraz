import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div className='w-screen h-screen flex flex-col'>
        <div className='w-fith-fit  my-auto mx-auto'>
            <h1 className='w-fit mx-auto text-4xl'>Who's Watching?</h1>
            <div className='flex mt-5 gap-5'>
                <Link href="/home" className='cursor-pointer'>
                    <div className='h-40 w-40 rounded-2xl bg-white cursor-pointer '>
                        <Image src="/netflix-avatar-red.jpg" width={100} height={100} alt="avatar" className='w-full h-full cursor-pointer'></Image>
                    </div>
                    <h1 className='mx-auto w-fit mt-1'>Recruiter</h1>
                </Link>
                
                <Link href="/home" className='cursor-pointer'>
                    <div className='h-40 w-40 rounded-2xl bg-white'>
                        <Image src="/netflix-avatar-blue.jpg" width={100} height={100} alt="avatar" className='w-full h-full'></Image>
                    </div>
                    <h1 className='mx-auto w-fit mt-1'>Developer</h1>
                </Link>
               
            </div>
        </div>
    </div>
  )
}

export default Home