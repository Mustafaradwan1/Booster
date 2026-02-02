"use client"
import { motion } from 'framer-motion'
import Head from "@/shard/HeaderTitle/Head";
import { CommunityData, CommunityData2 } from "@/utils/utils";
import { useState } from "react";

const Community = () => {
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
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
    },
  },
}
const itemVariants2 = (direction: 'left' | 'bottom' | 'right') => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
    y: direction === 'bottom' ? 100 : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut'as const },
  },
});
    const style = "w-full sm:w-[calc(50%-16px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-16px)] rounded-xl card bg-[#101828] py-8 border border-gray-800 flex flex-col items-center";
    const style2 = `w-full sm:w-[calc(100%/3-16px)] rounded-lg card py-8 flex flex-col px-8`;

    const [hovered, setHovered] = useState(Array(CommunityData2.length).fill(false));
    const handleMouseEnter = (index:number) => {
        const newHovered = [...hovered];
        newHovered[index] = true;
        setHovered(newHovered);
    }

    const handleMouseLeave = (index:number) => {
        const newHovered = [...hovered];
        newHovered[index] = false;
        setHovered(newHovered);
    }

    return (
        <div className="py-16 bg-[#000000] Community relative">
            <div className="container z-10 relative">
                <Head 
                    h={"Join Our Community"} 
                    p={"Connect with millions of gamers worldwide and be part of something epic"} 
                    style='text-center' 
                    styleInfo='' 
                />
                <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{
                once: true,
                }}
                className="flex flex-wrap mt-20 gap-4">
                    {CommunityData.map((ele, ind) => {
                        const Icon  = ele.icon;
                        return (
                            <motion.div
                            variants={itemVariants}
                             key={ind} className={style}>
                                <div className={`${ele.iconStyle} icon w-15 h-15 mb-4 rounded-full flex items-center justify-center text-3xl`}>
                                  <Icon/>
                                </div>
                               <h2 className="text-3xl">{ele.num}</h2>
                               <p className="text-gray-500">{ele.title}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div

                 className="flex flex-wrap mt-10 gap-4">
                    {CommunityData2.map((ele, ind) => {
                        const direction = ind === 0 ? 'left' : ind === 1 ? 'bottom' : 'right';
                        const Icon  = ele.icon;
                        return (
                            <motion.div
                                    variants={itemVariants2(direction)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
                             key={ind} className={`${style2} ${ele.style}`}>
                                <div
                                    onMouseEnter={() => handleMouseEnter(ind)}
                                    onMouseLeave={() => handleMouseLeave(ind)}
                                    className={`
                                        ${ele.iconStyle} icon CommunityIcon 
                                        w-12.5 h-12.5 mb-4 rounded-xl flex items-center justify-center text-2xl
                                        transition-transform duration-1000
                                        ${hovered[ind] ? "rotate-360" : "rotate-0"}
                                    `}
                                >
                                    <Icon/>
                                </div>
                               <h2 className="text-xl font-bold mb-2">{ele.title}</h2>
                               <p className="text-gray-500">{ele.title2}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </div>
    );
}

export default Community;
