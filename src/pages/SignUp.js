import React from 'react';
import { BackgroundImage2 } from '../assests';
import { SignForm } from '../components';

const SignUp = () => {
  return (
    <div className='w-full mb-0'>
        <div className='flex flex-col md:flex-row lg:items-center'>
            <div className='md:w-[50%]'>
               <img src={BackgroundImage2} alt="background2" className='w-full h-[232px] md:h-full object-cover'/>
            </div>
            <SignForm/>
        </div>
    </div>
  )
}

export default SignUp