import React from 'react';
import { BackgroundImage, avatar15 } from '../../../assests';

const CoverArtist = () => {
  return (
    <div className='relative'>
      <img src={BackgroundImage} alt="background" className=" -z-10 w-full h-[250px] md:h-[280px] lg:h-[330px] object-cover" />
      <div className='bg-gradient-to-b flex justify-center lg:justify-start opacity-1 flex items-center from-transparent to-[#A259FF] absolute top-0 w-full h-full'>
        <img src={avatar15} alt="avatar" className='absolute w-[120px] bottom-[-50px] lg:ml-40'/>
      </div>
    </div>
  )
}

export default CoverArtist