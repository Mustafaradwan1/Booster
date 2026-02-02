import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='bg-black '>
      <hr className="text-gray-700 pb-16"/>
      <div className="container  text-white flex-wrap flex gap-5 justify-between ">
        <div className='sm:w-[85%] md:w-[calc(50%-20px)] lg:w-[calc(35%-20px)]'>
          <div className="info sm:w-full">
            <h2 className="text-gradient-main text-3xl font-bold mb-5">
               NEXUS
            </h2>
            <p className='mb-5 text-gray-500'>The ultimate gaming platform for competitive players. Join millions of gamers worldwide and become a legend.</p>
            <div className="icon flex gap-4 text-2xl text-gray-500">
              <FaFacebookF/>
              <FaInstagram/>
              <FiTwitter/>
              <CiYoutube/>
              <MdOutlineMail/>
            </div>
          </div>
        </div>
        <ul className='sm:w-[calc(50%-20px)] max-sm:my-2 max-lg:my-8 md:w-[calc(25%-20px)] lg:w-[calc(15%-20px)] flex flex-col gap-5'>
          <li className='text-[var(--main-color)]'>Games</li>
          <li className='cursor-pointer text-gray-500'>All Games</li>
          <li className='cursor-pointer text-gray-500'>Featured</li>
          <li className='cursor-pointer text-gray-500'>Coming Soon</li>
          <li className='cursor-pointer text-gray-500'>Top Rated</li>
        </ul>
        <ul className='sm:w-[calc(50%-20px)] max-sm:my-2 max-lg:my-8 md:w-[calc(25%-20px)] lg:w-[calc(15%-20px)]  flex flex-col gap-5'>
          <li className='text-[var(--main-color)]'>Esports</li>
          <li className='cursor-pointer text-gray-500'>Tournaments</li>
          <li className='cursor-pointer text-gray-500'>Leaderboards</li>
          <li className='cursor-pointer text-gray-500'>Teams</li>
          <li className='cursor-pointer text-gray-500'>Schedule</li>
        </ul>
        <ul className='sm:w-[calc(50%-20px)] max-sm:mt-2 max-lg:mt-8 md:w-[calc(25%-20px)] lg:w-[calc(20%-20px)]  flex flex-col gap-5'>
          <li className='text-[var(--main-color)]'>Support</li>
          <li className='cursor-pointer text-gray-500'>Help Center</li>
          <li className='cursor-pointer text-gray-500'>Contact Us</li>
          <li className='cursor-pointer text-gray-500'>Privacy Policy</li>
          <li className='cursor-pointer text-gray-500'>Terms of Service</li>
        </ul>
        <hr className="text-gray-700 w-full mt-8"/>
        <div className="pb-8 pt-3 flex items-center justify-between w-full text-gray-500 text-sm">
          <p>© 2024 NEXUS Gaming. All rights reserved.</p>
          <ul className="flex gap-5">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer