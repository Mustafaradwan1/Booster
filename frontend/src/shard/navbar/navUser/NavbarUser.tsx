import { navUserLink } from '@/utils/utils'
import NavbarLinks from '../navbarLinks/NavbarLinks'
const NavbarUser = () => {
  return (
    <div className='max-lg:hidden'>
        <NavbarLinks navUserLink={navUserLink} style={"flex items-center"} />
    </div>
  )
}

export default NavbarUser