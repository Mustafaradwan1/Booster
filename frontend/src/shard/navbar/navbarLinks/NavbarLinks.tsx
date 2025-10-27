"use client"
import { navLink } from '@/utils/utils'
import Link from 'next/link'
import React, { useState } from 'react'
const NavbarLinks = ({ style, onClose}:{style:string, onClose?:()=> void }) => {
  const [Active, setActive] = useState(false)
  const styleLi = "mx-4 text-sm h-full flex items-center justify-center"
  return (
    <div className='h-full'>
        <ul className={`${style} h-full`} >
          <li onClick={onClose} className={styleLi}><Link href={"/"}>Home</Link></li>
          <li onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} className={`${styleLi} relative` }>
            Get Boosting
            {Active && 
            <ul className='absolute z-50 top-[60px] left-0 bg-[#292C3D] w-[240px] p-5 rounded-lg flex flex-col gap-5 text-[#fffd]'>
              {navLink.map((ele,ind)=>(
                <li onClick={onClose} key={ind} className='mx-4 text-sm'>
                  <Link href={ele.hash}>{ele.title}</Link>
                </li>
              ))}
              
            </ul>
            }
          </li>
          <li onClick={onClose} className={styleLi}>FragPunk Duo</li>
          <li onClick={onClose} className={styleLi}>LoL Accounts</li>
        </ul>
    </div>
  )
}

export default NavbarLinks