"use client"
import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import DiviBoost from './DiviBoost'
import { FormInformation } from '@/type/boosting'

interface InformationProps {
  title: string
  span: string
  p: string
  img: StaticImageData
}
interface GamesCheckOutProps {
  information: InformationProps;
  formInformation?: FormInformation;
}
const GamesCheckOut = ({information,formInformation} : GamesCheckOutProps) => {
  const {title,img,span,p} = information
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const checkWidth = () => setIsMobile(window.innerWidth <= 1023);
    checkWidth();
    window.addEventListener("resize", checkWidth); 
    return () => window.removeEventListener("resize", checkWidth);
  }, []);
  return (
    <div>

    <div className=''>
        <header className={`h-[75vh] bg-cover bg-center mb-10`}
          style={{
          backgroundImage: isMobile ? `url(${img.src})` : "none",
        }}
        >
            <div className="flex container items-center justify-between gap-10 h-full">
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
        <div className="section py-10 container">
          <div className="grid grid-cols-12 gap-[20px]">
            {formInformation && <DiviBoost divi={formInformation} />}
            <div className="checkout col-span-12 xl:col-span-3 bg-[#1c1f2b] p-4 rounded-2xl">
              <h5 className='border-b pb-5 text-3xl sm:text-4xl md:text-5xl text-center'>Checkout</h5>
              <h6 className='text-3xl font-bold mt-3'>Summary</h6>
              <div className='flex justify-between my-4'>
                <p>Division Boosting</p>
                <span>100 egp</span>           
              </div>
              <div className='flex justify-between'>
                <p>Extra Win</p>
                <span>100 egp</span>           
              </div>
              <div className='flex justify-between items-center gap-4 mt-6'>
                Assign to your favorite Booster
                <button className='bg-red-600 rounded-full cursor-pointer w-[50px] h-[50px] flex items-center justify-center'>+</button>
              </div>
              <div className='flex justify-between my-10'>
                <p>Total Price:</p>
                <span>100 egp</span>           
              </div>
              <button className='bg-red-600 rounded-xl  py-2 px-8 cursor-pointer'>place order</button>

            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default GamesCheckOut