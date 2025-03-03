import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <div className='flex fixed top-0 w-full  z-50'>
        <ul className='flex gap-5 text-white bg-gradient-to-b from-black to-black/0 w-full p-5'>
            <li><Link href="/"><Image src="/logo.png" width={100} height={100} alt='logo'></Image></Link></li>
            <li><Link href="/home">Home</Link></li>
            <li><Link href="">Professional</Link></li>
            <li><Link href="">Skills</Link></li>
            <li><Link href="">Projects</Link></li>
            <li><Link href="">Hire Me</Link></li>
        </ul>
    </div>
  )
}

export default NavBar