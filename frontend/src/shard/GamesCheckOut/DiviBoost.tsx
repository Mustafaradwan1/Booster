import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface DivisionBoostingBox {
  title: string;
  p: string;
  rank: string[];
  imgs: string[];
}

interface SelectOption {
  title: string;
  select: string[];
}

interface Addon {
  icon: string;
  title: string;
  dis: string;
}

interface DiviBoostProps {
  divi?: {
    DivisionBoostingBox?: DivisionBoostingBox[];
    selectOptions?: SelectOption[];
    Addons?: Addon[];
  }[];
}

const DiviBoost = ({ divi }: DiviBoostProps) => {
  const boostingBoxes = divi?.[0]?.DivisionBoostingBox || [];
  const selectOptions = divi?.[1]?.selectOptions || [];
  const addons = divi?.[2]?.Addons || [];

  const [ImageActive, setImageActive] = useState<string | null>(null);

  // 🟢 Hook دايمًا يتنادى (حتى لو البيانات فاضية)
  useEffect(() => {
    if (boostingBoxes.length > 0 && boostingBoxes[0].imgs.length > 0) {
      setImageActive(boostingBoxes[0].imgs[0]);
    }
  }, [boostingBoxes]);

  // 🔴 لو مفيش بيانات خالص نرجع هنا
  if (!divi || boostingBoxes.length === 0) return null;

  return (
    <div className="grid grid-cols-12 gap-[40px] mt-12">
      {boostingBoxes.map((ele, ind) => (
        <div key={ind} className="col-span-6 bg-[#242836] rounded-2xl py-12 px-8">
          <h3>{ele.title}</h3>
          <p>{ele.p}</p>

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

          <div className="item mt-5 grid grid-cols-12 gap-[10px]">
            {ele.rank.map((item, ind) => (
              <div
                key={ind}
                className="flex items-center justify-center text-xl col-span-3 h-[70px] bg-[#202332] rounded-2xl"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="image mt-4 flex flex-wrap justify-between overflow-x-auto no-scrollbar gap-1">
            {ele.imgs.map((img, ind) => (
              <div
                key={ind}
                className={`w-[40px] h-[40px] p-1 rounded-lg cursor-pointer transition-all duration-200 ${
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
        </div>
      ))}
    </div>
  );
};

export default DiviBoost;
