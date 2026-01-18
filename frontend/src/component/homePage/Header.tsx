import React from 'react'
const Header = () => {
  const style = "text-center numberBox"
  return (
    <header className='header min-h-[100vh] py-[100px] bg-cover flex items-center'>
        <div className="container flex gap-20 flex-col justify-center items-center z-40 relative">
            <div className="info w-full md:w-[60%] text-center text-white">
                <h1 className='mb-4 text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold'>
                  Instantly Level Up Your Game with the Most Powerful Boosting Tool
                </h1>
                <p className='text-[16px] md:text-lg lg:text-xl '>
                  Join millions of players worldwide. Compete in tournaments, climb the ranks, and become a legend.
                </p>
                <div className="rank flex gap-6">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
            </div>
            <div className="number w-full md:w-[60%]  flex justify-between">
              <div className={style}>
                <h6 className='text-4xl font-bold'>2.5M+</h6>
                <p className='text-sm'>Active Players</p>
              </div>
              <div className={style}>
                <h6 className='text-4xl font-bold'>10K+</h6>
                <p className='text-sm'>Daily Matches</p>
              </div>
              <div className={style}>
                <h6 className='text-4xl font-bold'>$500K</h6>
                <p className='text-sm'>Prize Pool</p>
              </div>
            </div>

        </div>
    </header>
  )
}

export default Header