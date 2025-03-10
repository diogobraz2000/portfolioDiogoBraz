'use client'
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {

  const [clicked,setClicked]=useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); 
    
    setTimeout(() => {
      window.location.href = "/profiles"; // Manually navigate after delay
    }, 4000);
  };
   useEffect(()=>{
      if (isFirstRender) {
        setIsFirstRender(false);
        return; // Skip the first render
      }
      else{
        if (audioRef.current) {
          audioRef.current.play();
        }
        gsap.fromTo(".logo",{scale:1},{scale:1.5,duration:2});
      }
      
   },[clicked,isFirstRender])
   useEffect(()=>{
    gsap.fromTo(".start",{opacity:0},{opacity:1,duration:2,yoyo:true,repeat:-1});
 },[])
  return (
    <Link href="/about" onClick={handleClick}>
      <div className="flex flex-col  h-screen" onClick={()=>{setClicked(true)}}>
        <audio ref={audioRef} src="/netflix-sound.mp3" />
        <Image src="/logo.png" width={500} height={500} alt="Logo" className="w-fit mx-auto my-auto h-fit logo" ></Image>
        {!clicked?<p className="mx-auto mb-5 start text-white text-xl">Click to start</p>:<></>}

      </div>
    </Link>
  );
}
