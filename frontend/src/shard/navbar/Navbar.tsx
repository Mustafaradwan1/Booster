"use client"
import NavbarUser from './navUser/NavbarUser'
import Logo from './Logo'
import NavBotns from './NavBotns/NavBotns'
import Menu from './menu/Menu'
import { motion } from 'framer-motion'
const Navbar = () => {
  return (
    <motion.div className='h-15 shadow z-50 fixed top-0 left-0 right-0 bg-[#1D1F2B]'
        initial={{opacity:0,y:-100}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.175}}
    >
        <div className="container  h-full flex items-center justify-between">
          <div className='flex items-center'>
            <Menu/>
            <Logo/>
          </div>
          <NavbarUser/>
          <NavBotns/>
        </div>
    </motion.div>
  )
}

export default Navbar 