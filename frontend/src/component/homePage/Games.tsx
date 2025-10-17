import Image from 'next/image'
import React from 'react'
import img from "../../../public/mainPage/Games/destiny-2.png"
const Games = () => {
  return (
    <div className='py-20 '>
        <div className='flex justify-center'>
            <h2 className='chooseHead w-fit text-center relative font-bold mb-8 text-2xl   sm:text-3xl'>Choose your game:</h2>
        </div>
            <div className="container flex flex-wrap gap-4 justify-between  items-center">
                <div className="box hover:scale-105 transition duration-200 cursor-pointer w-[70%] m-auto sm:w-[calc(50%-16px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-16px)]">
                    <Image src={img} alt={"game title"} />
                </div>
                <div className="box hover:scale-105 transition duration-200 cursor-pointer w-[70%] m-auto sm:w-[calc(50%-16px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-16px)]">
                    <Image src={img} alt={"game title"} />
                </div>
                <div className="box hover:scale-105 transition duration-200 cursor-pointer w-[70%] m-auto sm:w-[calc(50%-16px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-16px)]">
                    <Image src={img} alt={"game title"} />
                </div>
                <div className="box hover:scale-105 transition duration-200 cursor-pointer w-[70%] m-auto sm:w-[calc(50%-16px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-16px)]">
                    <Image src={img} alt={"game title"} />
                </div>
                <div className="box hover:scale-105 transition duration-200 cursor-pointer w-[70%] m-auto sm:w-[calc(50%-16px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-16px)]">
                    <Image src={img} alt={"game title"} />
                </div>
                <div className="box hover:scale-105 transition duration-200 cursor-pointer w-[70%] m-auto sm:w-[calc(50%-16px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-16px)]">
                    <Image src={img} alt={"game title"} />
                </div>
                <div className="box hover:scale-105 transition duration-200 cursor-pointer w-[70%] m-auto sm:w-[calc(50%-16px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-16px)]">
                    <Image src={img} alt={"game title"} />
                </div>
                <div className="box hover:scale-105 transition duration-200 cursor-pointer w-[70%] m-auto sm:w-[calc(50%-16px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-16px)]">
                    <Image src={img} alt={"game title"} />
                </div>
                <div className="box hover:scale-105 transition duration-200 cursor-pointer w-[70%] m-auto sm:w-[calc(50%-16px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-16px)]">
                    <Image src={img} alt={"game title"} />
                </div>
                <div className="box hover:scale-105 transition duration-200 cursor-pointer w-[70%] m-auto sm:w-[calc(50%-16px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-16px)]">
                    <Image src={img} alt={"game title"} />
                </div>
                <div className="box hover:scale-105 transition duration-200 cursor-pointer w-[70%] m-auto sm:w-[calc(50%-16px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-16px)]">
                    <Image src={img} alt={"game title"} />
                </div>
                <div className="box hover:scale-105 transition duration-200 cursor-pointer w-[70%] m-auto sm:w-[calc(50%-16px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-16px)]">
                    <Image src={img} alt={"game title"} />
                </div>
                <div className="box hover:scale-105 transition duration-200 cursor-pointer w-[70%] m-auto sm:w-[calc(50%-16px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-16px)]">
                    <Image src={img} alt={"game title"} />
                </div>
                <div className="box hover:scale-105 transition duration-200 cursor-pointer w-[70%] m-auto sm:w-[calc(50%-16px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-16px)]">
                    <Image src={img} alt={"game title"} />
                </div>
                <div className="box hover:scale-105 transition duration-200 cursor-pointer w-[70%] m-auto sm:w-[calc(50%-16px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-16px)]">
                    <Image src={img} alt={"game title"} />
                </div>
                <div className="box hover:scale-105 transition duration-200 cursor-pointer w-[70%] m-auto sm:w-[calc(50%-16px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-16px)]">
                    <Image src={img} alt={"game title"} />
                </div>

            </div>
    </div>
  )
}

export default Games