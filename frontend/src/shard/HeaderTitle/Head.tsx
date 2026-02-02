"use client"
import { motion } from 'framer-motion'
interface Ihead {
    h:string
    p:string
    btn?:string
    style:string
    styleInfo:string
}

const Head = ({h,p,btn,style,styleInfo}:Ihead) => {
  return (
    <div className={`${style} mb-12`}>
      {btn === undefined ?
      <div>

        <motion.h2
          initial={{y:20,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:0.7}}
          viewport={{
            once: true,
          }}
        className="text-2xl md:text-3xl lg:text-4xl font-bold">{h}</motion.h2>
          <div className={styleInfo}>
           <motion.p
              initial={{y:20, opacity:0}}
              whileInView={{y:0, opacity:1}}
              transition={{duration:0.7}}
              viewport={{
              once: true,
              }} className='text-gray-500'>
              {p}
            </motion.p>
        </div>
      </div>
       :
       <>
        <motion.h2
          initial={{x:-100,opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:0.7}}
          viewport={{
            once: true,
          }}
        className="text-2xl md:text-3xl lg:text-4xl font-bold">{h}</motion.h2>
                <div className={styleInfo}>
          <motion.p
              initial={{x:-100,opacity:0}}
              whileInView={{x:0,opacity:1}}
              transition={{duration:0.7}}
              viewport={{
              once: true,
              }} className='text-gray-500'>
                {p}
          </motion.p>
            <motion.button
              initial={{x:100,opacity:0}}
              whileInView={{x:0,opacity:1}}
              transition={{duration:0.7}}
              viewport={{
              once: true,
              }}
            className="text-(--text-main-color) cursor-pointer">{btn}</motion.button>
        </div>
       </>
       }


    </div>
  )
}

export default Head