import { gamesImg } from '@/utils/utils'
import Image from 'next/image'

const PopularGames = () => {
  return (
    <div className='py-16 PopularGames relative'>
      <div className="container relative z-10">
        <h2 className='chooseHead w-fit relative font-bold mb-2 text-2xl   sm:text-3xl'>Popular Games</h2>
        <p className='flex items-center justify-between mb-12'>
          <span>Most popular games right now</span>
          <span className='text-[var(--text-main-color)]'>Veiw All</span>
        </p>
      <div className='flex gap-4 flex-wrap justify-between'>
                {gamesImg.map((ele,ind)=>(
                <div key={ind} className="PopularGamesBox w-[calc(100%/6-16px)]">
                  <div className="PopularGamesBoxSec h-[150px] cursor-pointer relative border border-gray-600 hover:border-[var(--text-main-color)] rounded-lg overflow-hidden">
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