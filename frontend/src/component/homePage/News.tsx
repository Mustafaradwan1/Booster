"use client"
import { motion } from 'framer-motion'
import { MdAccessTime } from "react-icons/md";
import { NewsImage } from '@/utils/utils'
import Image from "next/image";
import Head from "@/shard/HeaderTitle/Head";
const News = () => {
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
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
}
  return (
    <div className="bg-black py-16">
        <div className="container">
          <Head h={"Latest News"} p={"Stay updated with the latest gaming news"} btn={"View All News"} style={""} styleInfo="flex items-center justify-between" />
                <motion.div
                                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{
                once: true,
                }}
                className="cards mt-12 flex justify-between gap-5 flex-wrap ">
                    {NewsImage.map((ele,ind)=>(
                        <motion.div
                             variants={itemVariants}
                        key={ind} className="card overflow-hidden relative bg-[#101828]  rounded-xl newsCard  w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]">
                          <div className="image h-53.75 w-full relative ">
                              <Image fill src={ele} alt="sd"/>
                          </div>
                          <div className="info relative z-10 px-5 py-8">
                            <h3 className="mb-3 font-bold text-xl">New Season Pass Available Now</h3>
                            <p className="text-gray-500 text-sm mb-2">Unlock exclusive rewards, skins, and battle perks with the Season 5 Battle Pass.</p>
                            <p className="text-gray-500 flex items-center text-sm">
                              <MdAccessTime className="mr-3"/>   2 hours ago
                            </p>
                          </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
  )
}

export default News