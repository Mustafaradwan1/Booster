"use client"
import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'

interface InformationProps {
  title: string
  span: string
  p: string
  img: StaticImageData
}
const GamesCheckOut = ({information}: { information: InformationProps }) => {
  const {title,img,span,p} = information
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth <= 1023);
    window.addEventListener("resize", checkWidth); 
    return () => window.removeEventListener("resize", checkWidth);
  }, []);
  return (
    <div>
        <header className={`h-[75vh] bg-cover bg-center`}
          style={{
          backgroundImage: isMobile ? `url(${img.src})` : "none",
        }}
        >
            <div className="container flex items-center justify-between gap-10 h-full">
                <div className="info sm:w-[75%] lg:w-[35%]">
                    <h1 className='max-lg:text-white text-4xl sm:text-5xl md:text-6xl w-[80%] font-bold mb-5'>{title} <span className='text-4xl sm:text-5xl md:text-6xl text-[var(--main-color)]'>{span}</span></h1>
                    <p className='max-lg:text-white text-[15px]'>{p}</p>
                </div>
                <div className="image max-lg:hidden w-[60%] max-h-[450px] relative overflow-hidden">
                    <Image className='w-full [clip-path:polygon(10%_0%,100%_0%,100%_100%,0%_100%)]'  src={img} alt={title} />
                   <div className="absolute [clip-path:polygon(10%_0%,100%_0%,100%_100%,0%_100%)] -inset-1 pointer-events-none bg-gradient-to-t from-[#242634]/100 via-[#242634]/0 to-transparent"></div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default GamesCheckOut