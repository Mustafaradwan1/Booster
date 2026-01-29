"use client"
import Link from 'next/link'
const NavbarLinks = ({ style, onClose}:{style:string, onClose?:()=> void }) => {
  const styleLi = "mx-4 text-sm cursor-pointer hover:text-[var(--text-main-color)] h-full flex items-center justify-center navLink relative"
  return (
    <div className='h-full'>
        <ul className={`${style} h-full`} >
          <li onClick={onClose} className={styleLi}><Link href={"/"}>Home</Link></li>
          <li onClick={onClose} className={styleLi}>Games</li>
          <li onClick={onClose} className={styleLi}>Tournaments</li>
          <li onClick={onClose} className={styleLi}>Community</li>
          <li onClick={onClose} className={styleLi}>News</li>
        </ul>
    </div>
  )
}

export default NavbarLinks