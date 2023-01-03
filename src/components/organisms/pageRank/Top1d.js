import React from 'react';
import { RankCard } from '../../moleculs';
import { avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avatar10 } from '../../../assests';

const Top1d = () => {

  const items = [
    {
      id : 1,
      name : "Zain Dokidis",
      avatar : avatar1,
      nft : '12.4',
    },
    {
      id : 2,
      name : "Ruben Vetrovs",
      avatar : avatar2,
      nft : '12.4',
    },
    {
      id : 3,
      name : "Maren Franci",
      avatar : avatar3,
      nft : '12.4',
    },
    {
      id : 4,
      name : "Emerson Carder",
      avatar : avatar4,
      nft : '12.4',
    },
    {
      id : 5,
      name : "Zain Botosh",
      avatar : avatar5,
      nft : '12.4',
    },
    {
      id : 6,
      name : "Talan Korsgaard",
      avatar : avatar6,
      nft : '12.4',
    },
    {
      id : 7,
      name : "Haylie Dias",
      avatar : avatar7,
      nft : '12.4',
    },
    {
      id : 8,
      name : "James Donin",
      avatar : avatar8,
      nft : '12.4',
    },
    {
      id : 9,
      name : "Erin Siphron",
      avatar : avatar9,
      nft : '12.4',
    },
    {
      id : 10,
      name : "Cristofer Levin",
      avatar : avatar10,
      nft : '12.4',
    }
  ]

  return (
    <div className='my-7 lg:mt-8 lg:mb-16 w-[315px] md:w-[750px] lg:w-full container mx-auto'>
      <div className='flex flex-col gap-5 lg:gap-10 '>
        {
          items.map((item, i) => {
            return (
              <RankCard key={i} number={item.id} name={item.name} avatar={item.avatar} nft={item.nft}/>
            )
          })
        }
      </div>
      
    </div>
  )
}

export default Top1d