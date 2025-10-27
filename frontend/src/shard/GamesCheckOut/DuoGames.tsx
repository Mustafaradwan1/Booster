/* eslint-disable react-hooks/exhaustive-deps */
import { DuoGamesSection } from '@/type/boosting';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react'

const DuoGames = ({data} : {data:DuoGamesSection}) => {
  const [ImageActive, setImageActive] = useState<string | StaticImageData | null>(null);
  const boostingBoxes = data?.DueGamesBox || [];
  const selectOptions = data?.selectOptions || [];
  const addons = data?.Addons || [];
   useEffect(() => {
    if (boostingBoxes.imgs.length > 0 && boostingBoxes.imgs.length > 0) {
      setImageActive(boostingBoxes.imgs[0]);
    }
  }, [boostingBoxes]);
  if (!data || data.DueGamesBox.imgs?.length === 0) return null;
  return (
    <div className="col-span-12">
      <div className="bg-[#1c1f2b] rounded-2xl py-16">
        <div className='grid grid-cols-12 gap-5 mb-10'>
            <div className="col-span-12 bg-[#242836] rounded-2xl py-12 px-8">
              <h3 className='text-3xl sm:text-4xl md:text-5xl mb-2'>{boostingBoxes.title}</h3>
              <p>{boostingBoxes.p}</p>
              <div className="bg-[#202332] rounded-lg flex justify-center items-center h-[90px] mt-8">
                {ImageActive ? (
                  <Image
                    src={ImageActive}
                    alt="active-rank"
                    width={80}
                    height={80}
                    className="rounded-lg object-contain"
                  />
                ) : (
                  <span className="text-gray-400">No image selected</span>
                )}
              </div>

              <div className="image  max-sm:flex-wrap mt-4 flex justify-between overflow-x-auto no-scrollbar gap-1">
                {boostingBoxes.imgs.map((img, ind) => (
                   <div
                    key={ind}
                     className={`w-[40px] sm:w-full h-[40px] p-1 rounded-lg cursor-pointer transition-all duration-200 ${
                    ImageActive === img ? 'bg-[#1784b4]' : 'bg-[#202332]'
                     }`}
                    onClick={() => setImageActive(img)}
                    >
                    <div className="w-full h-full relative">
                       <Image fill src={img} alt={`rank-${ind}`} className="object-contain rounded-md" />
                    </div>
                   </div>
                 ))}
              </div>
              <div className='bg-[#242836] w-full px-5 my-3 h-[50px] border rounded-2xl'>
                <select className='w-full h-full cursor-pointer outline-none' id="">
                  {boostingBoxes.select.map((option, i) => (
                    <option className='bg-[#1c1f2a] !hover:bg-red-500' key={i} value={option}>
                      {option}
                    </option>
                  ))}
                </select>      
              </div>
              <div className='mt-8'>
                {boostingBoxes.dueType.map((ele,ind)=>(
                  <div key={ind} className='px-5 py-4 rounded-xl bg-[#1c1f2a]  mb-3 flex items-center justify-between'>
                    <h3 className='flex items-center gap-3'>
                      <span className='text-[var(--main-color)]'>{ele.span} </span>
                      <p>{ele.title}</p>
                      <p>{ele.price}</p>
                    </h3>
                    <input type="radio" className='w-[30px] h-[30px]' name={ele.title} />
                  </div>
                ))}
              </div>
            </div>
        </div>
        <div className='flex flex-wrap gap-[10px] col-span-12'>
          {selectOptions.map((ele,ind)=>(
            <div key={ind} className='select bg-[#242836] w-full mb-3 sm:w-[calc(50%-10px)] md:w-[calc(25%-10px)] py-4 px-6 rounded-2xl'>
              <h4>{ele.title}</h4>
              <select name={ele.title} className='w-full mt-3 outline-none' id="">
                {ele.select.map((option, i) => (
                  <option className='bg-[#1c1f2a] !hover:bg-red-500' key={i} value={option}>
                    {option}
                  </option>
                ))}
              </select>      
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl mt-5 grid grid-cols-12 gap-5">
        <h4 className='col-span-12 text-4xl'>Addons</h4>
        {addons.map((ele,ind)=>(
          <div key={ind} className='col-span-12 sm:col-span-6 bg-[#232736] flex items-center justify-between rounded-xl p-5'>
            <div className='flex gap-3 '>
              <span>
                {ele.icon}
              </span>
              <span>
                {ele.title}
              </span>
              <span>
                {ele.dis}
              </span>
            </div>
            <input type='checkbox' className='w-[20px] h-[20px] cursor-pointer' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DuoGames