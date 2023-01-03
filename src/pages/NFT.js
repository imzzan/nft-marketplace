import React from 'react';
import { BackgroundImage3 } from '../assests';
import { NftInfo, MoreNft } from '../components';

const NFT = () => {
  return (
    <div>
        <img src={BackgroundImage3} alt="background" className=" -z-10 w-full h-[250px] md:h-[420px] lg:h-[560px] object-cover" />
        <NftInfo/>
        <MoreNft/>
    </div>
  )
}

export default NFT