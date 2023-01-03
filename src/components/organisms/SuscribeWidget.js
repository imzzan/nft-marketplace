import React from 'react';
import { image6 } from '../../assests';
import { DescripsiSuscribe } from '../moleculs';

const SuscribeWidget = () => {
  return (
    <div className='my-16 lg:mt-24 w-[315px] md:w-[750px] lg:w-full container mx-auto'>
        <div className='flex flex-col justify-center md:justify-around md:flex-row items-center mx-auto  md:bg-gray py-6 rounded-[20px]'>
            <img src={image6} alt="Image" className='w-full h-[225px] md:w-[330px] lg:w-[450px] md:h-[280px] lg:h-[310px] object-cover rounded-[20px]'/>
            <DescripsiSuscribe/>
        </div>
    </div>
  )
}

export default SuscribeWidget