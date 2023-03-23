import React from 'react';
import { GiPineTree, GiDirectionSigns, GiSchoolBag } from 'react-icons/gi';

function Journey() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='md:text-5xl sm:text-4xl text-2xl font-bold md:py-6 md:pl-4 pl-2 md:ml-12'>Start your journey.</h3>
        <p className='md:text-lg sm:text-sm text-xs md:pl-4 pl-2 md:ml-12'>Come as your are. Bring your talents, brillance, your frustrations,</p>
        <p className='md:text-lg sm:text-sm text-xs md:pl-4 pl-2 md:ml-12'>your struggles--and let's turn them into something awesome.</p>

        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 mt-6'>
            <div className='w-full flex flex-col p-4 my-4'>
                <div className='items-center'><GiPineTree size={40}/></div>
                <h6 className='text-base font-bold text-start py-2'>Be Inpsired.</h6>
                <p className='text-sm mt-2'>We want to give you the help and support you need to make huge strides towards the vision you're after in your business.</p>
            </div>
            <div className='w-full flex flex-col p-4 my-4'>
                <div className='items-center'><GiDirectionSigns size={40}/></div>
                <h6 className='text-base font-bold text-start py-2'>Get connected.</h6>
                <p className='text-sm mt-2'>Jam with fellow tribe members, share experiences, stay accountable and encourage one another on your journey.</p>
            </div>
            <div className='w-full flex flex-col p-4 my-4'>
                <div className='items-center'><GiSchoolBag size={40}/></div>
                <h6 className='text-base font-bold text-start py-2'>Equip yourself.</h6>
                <p className='text-sm mt-2'>Discover the tools and resources you need to build a beatufil website and create an amazing brand and digital platform</p>
            </div>
        </div>
    </div>
  )
}

export default Journey;