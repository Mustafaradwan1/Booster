"use client"
import { motion } from 'framer-motion'

const Header = () => {
  const style = "text-center numberBox"
  return (
    <header className='header min-h-screen py-25 bg-cover flex items-center'>
        <div className="container flex gap-20 flex-col justify-center items-center z-40 relative">
            <motion.div
             initial={{scale:0,opacity:0}}
              animate={{scale:1,opacity:1}}
              transition={{duration:0.5,delay:0.3}}
             className="info w-[90%] sm:w-[70%] text-center text-white">
                <h1 className='mb-4 text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold'>
                  Instantly Level Up Your Game with the Most Powerful Boosting Tool
                </h1>
                <p className='md:text-lg lg:text-xl md:w-[75%] m-auto'>
                  Join millions of players worldwide. Compete in tournaments, climb the ranks, and become a legend.
                </p>
            </motion.div>
            <div className="number w-[90%] sm:w-[70%] flex max-sm:flex-col max-sm:justify-center max-sm:gap-6 flex-wrap justify-between">
              <motion.div
                initial={{opacity:0,y:100}}
                animate={{opacity:1,y:0}}
                transition={{delay:0.3}}
                className={style}>
                <h6 className='text-4xl font-bold'>2.5M+</h6>
                <p className='text-sm'>Active Players</p>
              </motion.div>
              <motion.div
                initial={{opacity:0,y:100}}
                animate={{opacity:1,y:0}}
                transition={{delay:0.5}}
                className={style}>
                <h6 className='text-4xl font-bold'>10K+</h6>
                <p className='text-sm'>Daily Matches</p>
              </motion.div>
              <motion.div
                initial={{opacity:0,y:100}}
                animate={{opacity:1,y:0}}
                transition={{delay:0.7}}
                className={style}>
                <h6 className='text-4xl font-bold'>$500K</h6>
                <p className='text-sm'>Prize Pool</p>
              </motion.div>
            </div>

        </div>
    </header>
  )
}

export default Header