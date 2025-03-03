import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <div className='h-10  flex p-2 fixed '>
        <ul className='flex gap-4'>
            <li><Link href=""><Image src="/logo.png" width={100} height={100} alt='logo'></Image></Link></li>
            <li><Link href="">Home</Link></li>
            <li><Link href="">Professional</Link></li>
            <li><Link href="">Skills</Link></li>
            <li><Link href="">Projects</Link></li>
            <li><Link href="">Hire Me</Link></li>
        </ul>
    </div>
  )
}

export default NavBar