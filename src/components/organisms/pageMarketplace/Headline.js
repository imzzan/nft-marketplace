import React from 'react'
import { InputSearch } from '../../atoms'

const Headline = () => {
  return (
    <div className="mt-16 lg:mt-24 w-[315px] md:w-[750px] lg:w-full container mx-auto">
        <h1 className='font-[600] text-[28px] leading-[40px] md:text-[38px] md:leading-[45.6px] lg:text-[51px] lg:leading-[56px]'>Browse Marketplace</h1>
        <p className='font-normal text-[16px] leading-[25px] mb-4 lg:mb-10 mt-1 lg:mt-6 lg:text-[22px] leading-[35px]'>Browse through more than 50k NFTs on the NFT Marketplace.</p>
        <InputSearch/>
    </div>
  )
}

export default Headline