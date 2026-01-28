import { LuUsers } from "react-icons/lu";

const Community = () => {
    const style = "w-[calc(25%-16px)] rounded-lg card bg-[#101828] py-5 flex flex-col items-center"
    const style2 = "w-[calc(33.33%-16px)] rounded-lg card bg-[#101828] py-5 flex flex-col items-center"
  return (
    <div className="py-16 bg-[#000000] Community relative ">
        <div className="container z-10 relative">
            <div className="info text-center">
                <h2 className=" text-2xl md:text-3xl lg:text-4xl font-bold">Join Our Community</h2>
                <p className="text-gray-500">Connect with millions of gamers worldwide and be part of something epic</p>
            </div>
            <div className="flex mt-20 gap-4">
                <div className={style}>
                    <div className="icon w-[60px] h-[60px] mb-4 bg-[#15719f] rounded-full flex items-center justify-center text-3xl">
                        <LuUsers/>
                    </div>
                    <h2 className="text-3xl">2.5M</h2>
                    <p className="text-gray-500">Active Players</p>
                </div>
                <div className={style}>
                    <div className="icon w-[60px] h-[60px] mb-4 bg-[#15719f] rounded-full flex items-center justify-center text-3xl">
                        <LuUsers/>
                    </div>
                    <h2 className="text-3xl">2.5M</h2>
                    <p className="text-gray-500">Active Players</p>
                </div>
                <div className={style}>
                    <div className="icon w-[60px] h-[60px] mb-4 bg-[#15719f] rounded-full flex items-center justify-center text-3xl">
                        <LuUsers/>
                    </div>
                    <h2 className="text-3xl">2.5M</h2>
                    <p className="text-gray-500">Active Players</p>
                </div>
                <div className={style}>
                    <div className="icon w-[60px] h-[60px] mb-4 bg-[#15719f] rounded-full flex items-center justify-center text-3xl">
                        <LuUsers/>
                    </div>
                    <h2 className="text-3xl">2.5M</h2>
                    <p className="text-gray-500">Active Players</p>
                </div>
            </div>
            <div className="flex mt-10 gap-4">

                <div className={style2}>
                    <div className="icon w-[60px] h-[60px] mb-4 bg-[#15719f] rounded-full flex items-center justify-center text-3xl">
                        <LuUsers/>
                    </div>
                    <h2 className="text-3xl">2.5M</h2>
                    <p className="text-gray-500">Active Players</p>
                </div>
                <div className={style2}>
                    <div className="icon w-[60px] h-[60px] mb-4 bg-[#15719f] rounded-full flex items-center justify-center text-3xl">
                        <LuUsers/>
                    </div>
                    <h2 className="text-3xl">2.5M</h2>
                    <p className="text-gray-500">Active Players</p>
                </div>
                <div className={style2}>
                    <div className="icon w-[60px] h-[60px] mb-4 bg-[#15719f] rounded-full flex items-center justify-center text-3xl">
                        <LuUsers/>
                    </div>
                    <h2 className="text-3xl">2.5M</h2>
                    <p className="text-gray-500">Active Players</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Community