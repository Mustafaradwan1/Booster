import { gamesImg } from '@/utils/utils'
import Image from 'next/image'
import React from 'react'
import { CiStar } from "react-icons/ci";
import { LuUsersRound } from "react-icons/lu";

const PopularGames = () => {
  return (
    <div className='py-10 '>
      <div className="container">
        <h2 className='chooseHead w-fit relative font-bold mb-2 text-2xl   sm:text-3xl'>Popular Games</h2>
        <p className='flex items-center justify-between mb-12'>
          <span>Most popular games right now</span>
          <span className='text-[var(--text-main-color)]'>Veiw All</span>
        </p>
      <div className='flex gap-4 justify-between'>
                {gamesImg.map((ele,ind)=>(
                <div key={ind} className="PopularGamesBox  md:w-[calc(25%-16px)]">
                  <div className="PopularGamesBoxSec h-[400px]  object-cover w-full cursor-pointer relative border border-gray-600 hover:border-[var(--text-main-color)] rounded-lg overflow-hidden">
                    <Image  src={ele.img} alt={"game title"} className='w-full h-full object-fill'/>
                    <div className='absolute bottom-0 w-full p-5'>
                      <h5 className='text-xl font-bold'>{ele.h2}</h5>
                      <p className='flex justify-between w-full items-center'>
                        <span className='flex gap-1 items-center'><CiStar className='text-xl text-amber-300' />{ele.rate}</span>
                        <span className='flex gap-1 items-center'><LuUsersRound className='text-xl text-amber-300' />{ele.view}</span>
                      </p>
                    </div>
                  </div>
                </div>
                ))}
        </div>
            </div>
    </div>
  )
}

export default PopularGames