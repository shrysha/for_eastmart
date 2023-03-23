import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    };
    

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-2'>
            <h1 className='w-half text-3xl font-bold'>LOGO</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Start here</li>
                <li className='p-4'>Our Blog</li>
                <li className='p-4'>Podcast</li>
                <li className='p-4'>Newsletter</li>
                <li className='p-4'>Get in Touch</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full ease-in-out duration-500 bg-slate-100' : 'fixed left-[-100%]'}>
                <ul className="p-4">
                    <li className='p-4'>Start here</li> 
                    <li className='p-4'>Our Blog</li>
                    <li className='p-4'>Podcast</li>
                    <li className='p-4'>Newsletter</li>
                    <li className='active p-4'>Get in Touch</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;