import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

export const Home = () => {
  return (
    <div className='w-full h-screen bg-[#333333]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-purple-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Brian Lockerbie</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front End Developer.</h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a front-end developer specializing in building and designing exceptional digital experiences. 
          I excell in languages like HTML, CSS & JavaScript. I excell in my favorite framework React.</p>
          <div>
            <button>View Work <HiArrowNarrowRight /></button>
          </div>
        </div>

    </div>
  )
}

export default Home
