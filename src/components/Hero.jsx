import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div>
      <div className='max-w-[800px] mt-[-96px] md:ml-[96px] sm:mt-[48px]w-full h-screen mx-auto text-left flex flex-col justify-center'>
      <h3 className='md:text-5xl sm:text-4xl text-2xl p-2 md:pl-4 pl-2'>Welcome to</h3>
      <div className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 md:pl-4 pl-2'>
        <Typed strings={['Authentik.']} typeSpeed={100} backSpeed={140} loop/> 
      </div>
      <p className='md:text-2xl sm:text-xl text-sm md:pl-4 pl-2'>We help creative entrepreneurs build an honest brand & digital platform.</p>
      <div className='md:pl-4 pl-2 content-start mt-4'>
        <button className='bg-black w-[150px] my-6 mx-auto py-3 text-white'>Start your journey</button> 
        <a className='underline md:text-lg sm:text-sm text-xs ml-4'>Learn more.</a>


      </div>
      </div>
    </div>

  )
}

export default Hero

