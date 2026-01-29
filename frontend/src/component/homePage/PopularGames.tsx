import Head from '@/shard/HeaderTitle/Head'
import { gamesImg } from '@/utils/utils'
import Image from 'next/image'

const PopularGames = () => {
  return (
    <div className='py-16 PopularGames relative'>
      <div className="container relative z-10">
        <Head h={"Popular Games"} p={"Most popular games right now"} btn={"Veiw All"} style={""} styleInfo={"flex items-center justify-between"} />
        <div className='flex gap-4 flex-wrap justify-between'>
          {gamesImg.map((ele,ind)=>(
            <div key={ind} className="PopularGamesBox w-full sm:w-[calc(100%/2-16px)] md:w-[calc(100%/3-16px)] lg:w-[calc(100%/4-16px)]">
              <div className="PopularGamesBoxSec h-[220px] cursor-pointer relative border border-gray-600 hover:border-[var(--text-main-color)] rounded-lg overflow-hidden">
                <Image  src={ele.img} alt={"game title"} className='w-full h-full object-fill'/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PopularGames