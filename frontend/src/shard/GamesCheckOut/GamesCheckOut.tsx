"use client"
import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import DiviBoost from './DiviBoost'

interface InformationProps {
  title: string
  span: string
  p: string
  img: StaticImageData
}
interface FormInformationProps {
  head: string;
  p: string;
  p2: string;
  services: { title: string; icon: string }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  DivisionBoosting: any[];
}
interface GamesCheckOutProps {
  information: InformationProps;
  formInformation?: FormInformationProps;
}
const GamesCheckOut = ({information,formInformation} : GamesCheckOutProps) => {
  const {title,img,span,p} = information
  const [isMobile, setIsMobile] = useState(false);
  const data = formInformation?.services || []
  const rows = [];
  for (let i = 0; i < data.length; i += 3) {
    rows.push(data.slice(i, i + 3));
  }
  console.log(data);
  
  useEffect(() => {
    if (typeof window === "undefined") return;
    const checkWidth = () => setIsMobile(window.innerWidth <= 1023);
    checkWidth();
    window.addEventListener("resize", checkWidth); 
    return () => window.removeEventListener("resize", checkWidth);
  }, []);
  return (
    <div className='container'>
        <header className={`h-[75vh] bg-cover bg-center`}
          style={{
          backgroundImage: isMobile ? `url(${img.src})` : "none",
        }}
        >
            <div className="flex items-center justify-between gap-10 h-full">
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
        <div className="section py-20">
          <div className="grid grid-cols-12 gap-[20px]">
            <div className="rank col-span-9 bg-[#1c1f2b] rounded-2xl py-16 px-10">
              <h2 className='text-5xl mb-4'>{formInformation?.head}</h2>
              <p className='mb-8'>{formInformation?.p}</p>
              <p >{formInformation?.p2}</p>
              <div className="space-y-[20px] mt-5">
                  {rows.map((row, rowIndex) => {
                    let gridCols = "grid-cols-3";
                   if (row.length === 2) gridCols = "grid-cols-2"; 
                    if (row.length === 1) gridCols = "grid-cols-1"; 
                    return (
                      <div
                        key={rowIndex}
                        className={`grid ${gridCols} gap-[20px]`}
                      >
                        {row.map((item, i) => (
                          <div
                            key={i}
                            className="bg-[#242836] cursor-pointer text-white text-center py-6 rounded-lg font-semibold">
                            {item.title}
                          </div>
                        ))}
                      </div>
                    );
                  })}
              </div>
              <DiviBoost divi={formInformation?.DivisionBoosting} />
            </div>
            <div className="checkout col-span-3 bg-[#242634] p-4 rounded-2xl">

            </div>
          </div>
          <h2>
            
          </h2>
        </div>
    </div>
  )
}

export default GamesCheckOut