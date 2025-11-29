import React from 'react'
import Image from 'next/image'
import { headerImg } from '@/utils/utils'
const Header = () => {
  const boxStyle = "relative group rounded-[14px] w-full sm:w-[47%] md:w-[30%] overflow-hidden bg-gradient-to-br from-[#3d2342f7] via-[#2a1a2fef] to-[#150d18f6] shadow-[0_0_15px_rgba(0,0,0,0.6)] transition-transform duration-300 cursor-pointer hover:scale-[1.05]"
  return (
    <header className='header min-h-[100vh] py-[100px] bg-cover '>
        <div className="container z-40 relative  h-full flex items-start max-xl:flex-col xl:items-center gap-[20px]">
            <div className="info w-full md:w-[55%] xl:w-[45%] text-white">
                <h1 className='mb-4 text-xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold'>Instantly Level Up Your Game with the Most Powerful Boosting Tool</h1>
                <p className='max-sm:text-[14px]'>
                    <span className='inline-block text-main w-full font-bold'>Welcome to the best lol boosting site</span>
                    With our PROs, it became POSSIBLE. Don&apos;t spend your precious time and nerves on routine — GET cheap and hassle-free boost NOW!
                </p>
                <button className='text-white px-8 py-3 rounded-lg  block mt-10 mb-6 border-main cursor-pointer border-[2px] hover:bg-transparent bg-main'>
                  Order Now
                </button>
                <span>See our 868 reviews on </span>
            </div>
            <div className="boxes m-auto w-[200px] sm:w-[65%] md:w-[75%] lg:w-[65%] xl:w-[50%] flex flex-wrap items-center gap-5">
                {headerImg.map((ele,ind)=>(
                    <div  key={ind}  className={boxStyle}>
                      <div className="relative z-10 flex items-center justify-center">
                        <Image width={1000} height={1000}
                          className=" transition-transform duration-300 group-hover:scale-[1.1] select-none"
                          src={ele.img}
                          alt="League of Legends logo"
                        />
                      </div>
                    </div>
                ))}
            </div>
        </div>
    </header>
  )
}

export default Header