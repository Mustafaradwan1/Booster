import React from 'react'
import Link from 'next/link'
import { INavUserLinks } from '@/type/type'
const NavbarLinks = ({navUserLink, style, onClose}:{navUserLink:INavUserLinks[],style:string, onClose?:()=> void }) => {
  return (
    <div>
        <ul className={style} >
            {navUserLink.map((ele)=>(
                <li onClick={onClose} key={ele.title} className='mx-4 text-[14px]'>
                    <Link href={ele.hash}>{ele.title}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default NavbarLinks