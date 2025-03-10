'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function NavBar() {
  const[scrolled,setScrolled]=useState(false);
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Change background color based on scroll position
      if (scrollPosition > scrollHeight / 2) {
        setScrolled(true); // Change this color as needed
      } else {
        setScrolled(false); // Change this color as needed
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='flex fixed top-0 w-full  z-50'>
        <ul className={`flex gap-5 text-white w-full p-5 duration-700 ${scrolled? "bg-black" :"bg-gradient-to-b from-black to-black/0 "}`}>
            <li><Link href="/"><Image src="/logo.png" width={100} height={100} alt='logo'></Image></Link></li>
            <li><Link href="/home">Home</Link></li>
            <li><Link href="/professional">Professional</Link></li>
            <li><Link href="/education">Education</Link></li>
            <li><Link href="/skills">Skills</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="">Hire Me</Link></li>
        </ul>
    </div>
  )
}

export default NavBar