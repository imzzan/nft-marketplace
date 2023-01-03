import React from 'react';
import { ArtistCard } from '../atoms';
import { Link } from 'react-router-dom';

const CardDiscover = ({image, title, profile, price, highestBid, user, bgColor}) => {
  return (
    <div className="w-[315px] md:w-[330px] lg:w-[400px] mx-auto cursor-pointer hover:scale-110 transition">
      <img src={image} alt="nft" className="w-full object-cover h-[238px] md:h-[295px] rounded-t-[20px]" />
      <div className={`${bgColor} p-5 rounded-b-[20px]`}>
          <Link to='/nftpage'><ArtistCard image={profile} mono='font-mono' text={user} title={title}/></Link>
          <div className='flex justify-between'>
            <div>
              <p className=' text-[12px] leading-[13.2px] font-normal text-[#858584] mb-1 lg:text-[16px] lg:leading-[18px]'>Price</p>
              <p className=' font-normal text-[12px] leading-[13.2px] font-mono lg:text-[16px] lg:leading-[18px]'>{price} ETH</p>
            </div>
            <div>
              <p className=' text-[12px] leading-[13.2px] font-normal text-[#858584] mb-1 lg:text-[16px] lg:leading-[18px]'>Highest Bid</p>
              <p className=' font-normal text-[12px] leading-[13.2px] font-mono lg:text-[16px] lg:leading-[18px]'>{highestBid} wETH</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default CardDiscover