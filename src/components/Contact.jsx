import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#333333] flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-purple-600 text-[#f2f2f2]'>Contact</p>
                <p className='text-[#f2f2f2] py-4'>// Submit the form below or shoot me an email - brian.lockerbie@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea name="message" cols="30" rows="10"></textarea>
        </form>
    </div>
  )
}

export default Contact