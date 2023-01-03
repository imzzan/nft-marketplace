import React from 'react';
import { avatar1, image8, avatar2, image7, avatar3, image6 } from '../../../assests';
import { CardDiscover } from '../../moleculs';

const ArtistCard = () => {

    const items = [
        {
          title: "Distant Galaxy",
          profile: avatar1,
          image: image8,
          price: "1.68",
          highestBid: "0.33",
          user: "MoonDancer",
        },
        {
          title: "Life on Endana",
          profile: avatar2,
          image: image7,
          price: "1.34",
          highestBid: "0.28",
          user: "NebulaKid",
        },
        {
          title: "AstroFiction",
          profile: avatar3,
          image: image6,
          price: "1.98",
          highestBid: "0.40",
          user: "SpaceOne",
        },
      ];

  return (
    <div className="flex flex-col gap-y-10 gap-x-5 md:flex-row flex-wrap py-10">
    {items.map((item, i) => {
      return (
        <CardDiscover
          key={i}
          user={item.user}
          title={item.title}
          profile={item.profile}
          price={item.price}
          highestBid={item.highestBid}
          image={item.image}
          bgColor='bg-gray'
        />
      );
    })}
  </div>
  )
}

export default ArtistCard