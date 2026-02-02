"use client"
import { motion } from 'framer-motion'
import Head from '@/shard/HeaderTitle/Head'
import { gamesImg } from '@/utils/utils'
import Image from 'next/image'

const PopularGames = () => {

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

  return (
    <div className='py-16 PopularGames relative'>
      <div className="container relative z-10">
        <Head h={"Popular Games"} p={"Most popular games right now"} btn={"Veiw All"} style={""} styleInfo={"flex items-center justify-between"} />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
          }}
         className='flex gap-4 flex-wrap justify-between'>
          {gamesImg.map((ele,ind)=>(
            <div 
            key={ind} className="PopularGamesBox rounded-lg  w-full sm:w-[calc(100%/2-30px)] md:w-[calc(100%/3-30px)] lg:w-[calc(100%/4-30px)] ">
              <motion.div 
            variants={itemVariants}
               className="PopularGamesBoxSec will-change-transform overflow-hidden rounded-lg h-55 cursor-pointer relative border border-gray-600 hover:border-[--text-main-color] ">
                <Image 
                fill
                    sizes="(max-width: 640px) 100vw,
           (max-width: 1024px) 50vw,
           25vw"
                 src={ele.img} alt={"game title"} className=' object-fill'/>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default PopularGames