import Link from 'next/link'
import React from 'react'
import logo from "../../../public/mainPage/logo/logo.png"
import Image from 'next/image'
const Logo = () => {
  return (
    <div className='max-lg:mr-5'>
      <Link href={"/"}>
        <Image src={logo} height={120} width={120} alt={"logo"} />
      </Link>
    </div>
  )
}

export default Logo