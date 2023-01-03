import React from 'react';

const InfoCard = ({icon, title, desc}) => {
  return (
    <div className=' flex items-center w-full md:w-[210px] lg:w-[330px] md:flex-col bg-gray p-5 gap-3 rounded-[20px]'>
        <img src={icon} alt="iconCard" className='w-[84px] h-[84px] md:w-[140px] md:h-[140px] lg:w-[250px] lg:h-[250px]'/>
        <div>
            <h1 className='font-[600] text-[16px] lg:text-[22px] leading-[22.3px] lg:leading-[30px]'>{title}</h1>
            <p className=' font-normal text-[12px] lg:text-[16px] leading-[16.8px] md:leading-[23px] mt-3'>{desc}</p>
        </div>
    </div>
  )
}

export default InfoCard