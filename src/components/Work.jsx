import React from 'react'
import workImg from '../assets/workImg.png'
import workImg4 from '../assets/workImg4.png'
import workImg5 from '../assets/workImg5.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-[#f2f2f2] bg-[#333333]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#f2f2f2] border-purple-600'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>


            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Grid Item */}           
                <div 
                  style={{backgroundImage: `url(${workImg})`}}
                  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                  >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white -tracking-wider'>
                          Accessibility Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://brianlockerbie.github.io/accessibility-app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Demo
                                </button>
                            </a>
                            <a href='https://github.com/brianlockerbie/accessibility-app'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                  style={{backgroundImage: `url(${workImg4})`}}
                  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                  >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white -tracking-wider'>
                          Coding Quiz Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://brianlockerbie.github.io/code-quiz-app'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Demo
                                </button>
                            </a>
                            <a href="https://github.com/brianlockerbie/code-quiz-app">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                  style={{backgroundImage: `url(${workImg5})`}}
                  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                  >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white -tracking-wider'>
                          Note Taker Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://radiant-chamber-54860.herokuapp.com/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Demo
                                </button>
                            </a>
                            <a href='https://github.com/brianlockerbie/note-taker-app'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                  style={{backgroundImage: `url(${workImg4})`}}
                  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                  >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white -tracking-wider'>
                          Accessibility Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Demo
                                </button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Code
                                </button>
                            </a>
                        </div>
                      </div>
                    </div>
                    <div 
                  style={{backgroundImage: `url(${workImg})`}}
                  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                  >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white -tracking-wider'>
                          Accessibility Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Demo
                                </button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                  style={{backgroundImage: `url(${workImg4})`}}
                  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                  >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white -tracking-wider'>
                          Accessibility Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Demo
                                </button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Work;