import { gamesImg } from '@/utils/utils'
import Image from 'next/image'
import React from 'react'
const Games = () => {
  return (
    <div className='py-20 '>
        <div className='flex justify-center'>
            <h2 className='chooseHead w-fit text-center relative font-bold mb-8 text-2xl   sm:text-3xl'>Choose your game:</h2>
        </div>
            <div className="container flex flex-wrap gap-4  items-center">
                {gamesImg.map((ele,ind)=>(
                <div key={ind} className="box hover:scale-105 transition duration-200 cursor-pointer w-[70%] sm:w-[calc(50%-16px)] relative h-[200px] md:w-[calc(33.33%-16px)] lg:w-[calc(20%-16px)]">
                    <Image fill src={ele.img} alt={"game title"} />
                </div>

                ))}
            </div>
    </div>
  )
}

export default Games