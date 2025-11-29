import React from 'react'
import NavbarUser from './navUser/NavbarUser'
import Logo from './Logo'
import Search from './search/Search'
import NavBotns from './NavBotns/NavBotns'
import Menu from './menu/Menu'

const Navbar = () => {
  return (
    <div className='h-[60px] shadow z-50'>
        <div className="container  h-full flex items-center justify-between">
          <div className='flex'>
            <Menu/>
            <Logo/>
          </div>
          <NavbarUser/>
          <div className='max-sm:hidden max-lg:flex-1 lg:w-[250px] mr-4'><Search/></div>
          <NavBotns/>
        </div>
    </div>
  )
}

export default Navbar 