import React from 'react';

const Footer = () => {
  return (
    <div className='w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 bg-white'>
      <div className='lg:col-span-1 flex justify-between mt-6'>
        <h1 className='text-lg font-bold'>CREATE HONESTLY.</h1>
        
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <h6 className='font-bold texl-medium'>WE BELIEVE</h6>
        
        </div>
      <div></div>
      <div className='lg:col-span-2 flex justify-between mt-[-30px]'>
        <p className='text-base italic'>"The key to building an authentic business is building an authentic life" -Brian Gardner</p>
        
        </div>
    <div></div>
    <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
        <h6 className='font-medium'>ABOUT</h6>
        <ul>
            <li className='py-2 text-sm text-gray-500'>Start Here</li>
            <li className='py-2 text-sm text-gray-500'>Our Blog</li>
            <li className='py-2 text-sm text-gray-500'>Podcast</li>
            <li className='py-2 text-sm text-gray-500'>Newsletter</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium'>SERVICES</h6>
        <ul>
            <li className='py-2 text-sm text-gray-500'>Consulting</li>
            <li className='py-2 text-sm text-gray-500'>Social Media</li>
            <li className='py-2 text-sm text-gray-500'>Web Design</li>
            <li className='py-2 text-sm text-gray-500'>Get in Touch</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium'>RESOURCES</h6>
        <ul>
            <li className='py-2 text-sm text-gray-500'>Themes</li>
            <li className='py-2 text-sm text-gray-500'>Web Fonts</li>
            <li className='py-2 text-sm text-gray-500'>Tutorials</li>
            <li className='py-2 text-sm text-gray-500'>Daily Reads</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium'>CONNECT</h6>
        <ul>
            <li className='py-2 text-sm text-gray-500'>Facebook</li>
            <li className='py-2 text-sm text-gray-500'>Instagram</li>
            <li className='py-2 text-sm text-gray-500'>Twitter</li>
            <li className='py-2 text-sm text-gray-500'>GitHub</li>
        </ul>
    </div>
    </div>
    </div>
  );
};

export default Footer;