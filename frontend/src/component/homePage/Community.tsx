"use client"
import Head from "@/shard/HeaderTitle/Head";
import { CommunityData, CommunityData2 } from "@/utils/utils";
import { useState } from "react";

const Community = () => {

    const style = "w-[calc(25%-16px)] rounded-xl card bg-[#101828] py-8 border border-gray-800 flex flex-col items-center";
    const style2 = `w-[calc(100%/3-16px)] rounded-lg card py-8 flex flex-col px-8`;

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
                <div className="flex mt-20 gap-4">
                    {CommunityData.map((ele, ind) => {
                        const Icon  = ele.icon;
                        return (
                            <div key={ind} className={style}>
                                <div className={`${ele.iconStyle} icon w-[60px] h-[60px] mb-4 rounded-full flex items-center justify-center text-3xl`}>
                                  <Icon/>
                                </div>
                               <h2 className="text-3xl">{ele.num}</h2>
                               <p className="text-gray-500">{ele.title}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="flex mt-10 gap-4">
                    {CommunityData2.map((ele, ind) => {
                        const Icon  = ele.icon;
                        return (
                            <div key={ind} className={`${style2} ${ele.style}`}>
                                <div
                                    onMouseEnter={() => handleMouseEnter(ind)}
                                    onMouseLeave={() => handleMouseLeave(ind)}
                                    className={`
                                        ${ele.iconStyle} icon CommunityIcon 
                                        w-[50px] h-[50px] mb-4 rounded-xl flex items-center justify-center text-2xl
                                        transition-transform duration-1000
                                        ${hovered[ind] ? "rotate-[360deg]" : "rotate-[0deg]"}
                                    `}
                                >
                                    <Icon/>
                                </div>
                               <h2 className="text-xl font-bold mb-2">{ele.title}</h2>
                               <p className="text-gray-500">{ele.title2}</p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}

export default Community;
