import React from 'react'
import logo from "../../../public/mainPage/logo/logo1.jpeg"
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='bg-[#1D1F2B] py-25'>
      <div className="container text-white flex-wrap flex gap-5 justify-between ">
        <div className='sm:w-[85%] md:w-[calc(50%-20px)] lg:w-[calc(35%-20px)]'>
          <div className="info sm:w-[70%]">
            <div className="logo text-4xl mb-8 max-w-[200px] h-[40px] relative">
              <Image src={logo} alt='logo' className='' fill />
            </div>
            <p className='mb-5'>Top rated boosting services provider since 2020.</p>
            <p className='leading-[2] text-sm text-[#ffffffc7]'>Turboboost isn’t endorsed or in any way affiliated with Activision Riot Games, Electronic Arts, Blizzard, Valve Corporation, Epic Games, Psyonix, and doesn’t reflect the views or opinions of anyone officially involved in producing or managing Valorant, Overwatch, Rocket League, Fortnite, FragPunk, Dota, Counter Strike, Apex Legends, Marvel Rivals and League of Legends. All trademarks and logos belong to their respective owners. All submitted art content remains the copyright of its original copyright holder.</p>
            <p>Contact:<span className='text-[var(--main-color)]'>partners@turbosmurfs.gg</span></p>
          </div>
        </div>
        <ul className='sm:w-[calc(50%-20px)] max-sm:my-2 max-lg:my-8 md:w-[calc(25%-20px)] lg:w-[calc(20%-20px)] flex flex-col gap-5'>
          <li className='text-[var(--main-color)]'>For Customers</li>
          <li className='cursor-pointer'>Order Boosting</li>
          <li className='cursor-pointer'>Customer Panel</li>
          <li className='cursor-pointer'>Our Boosters</li>
          <li className='cursor-pointer'>Coaching</li>
          <li className='cursor-pointer'>Valorant Ping Test</li>
          <li className='cursor-pointer'>Apex Legends Ping Test</li>
          <li className='cursor-pointer'>Overwatch 2 Ping Test</li>
          <li className='cursor-pointer'>Marvel Rivals Ping Test</li>
          <li className='cursor-pointer'>Counter Strike 2 Ping Test</li>
          <li className='cursor-pointer'>Blog</li>
        </ul>
        <ul className='sm:w-[calc(50%-20px)] max-sm:my-2 max-lg:my-8 md:w-[calc(25%-20px)] lg:w-[calc(15%-20px)]  flex flex-col gap-5'>
          <li className='text-[var(--main-color)]'>For Boosters</li>
          <li className='cursor-pointer'>Booster Panel</li>
          <li className='cursor-pointer'>Applications</li>
          <li className='cursor-pointer'>FAQs</li>
        </ul>
        <div className='sm:w-[90%] md:w-[calc(45%-20px)] lg:w-[calc(30%-20px)]  flex flex-col gap-5'>
          <h2 className='text-[var(--main-color)]'>Need help?</h2>
          <p>We offer 24/7 Customer Support. If you need any help or have questions don&apos;t hesitate to ask us!</p>
          <div className='flex gap-4'>
            <button className='rounded-lg px-6 py-3 max-sm:text-sm text-white cursor-pointer bg-[var(--main-color)]'>Get Support</button>
            <button className='rounded-lg px-6 py-3 max-sm:text-sm text-white cursor-pointer bg-blue-600'>Join Our Discord</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer