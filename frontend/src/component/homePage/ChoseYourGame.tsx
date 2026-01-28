import SliderGame from './SliderGame'
import {ChoseGame} from "../../utils/utils"

const ChoseYourGame = () => {
  return (
    <div className='py-16 bg-[#101828] ChoseYourGame relative'>
        <div className="container relative ">
            <div className="search w-full sm:w-[80%] md:w-[70%] mx-auto mb-24">
                <input type="search" placeholder='Search For Your Game' className='w-full rounded-lg h-[40px] border border-gray-500 py-1 px-3' />
            </div>
            <div className="slider">
                <SliderGame slidesToShow={6} images={ChoseGame}/>
            </div>
        </div>
    </div>
  )
}

export default ChoseYourGame