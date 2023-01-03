import React from "react";
import { CategoryCard } from "../moleculs";
import { image1, image2, image3, image4, image5, image6, image7, image8, iconKuas, iconCamera, iconSwetches, iconMusic, iconRecord, iconMagicWand, iconBasket, iconPlanet } from "../../assests";

const BrowserCategory = () => {

  const items = [
    {
      image : image1,
      icon : iconCamera,
      alt1 : "Camera",
      alt2 : "icon Camera",
      text : "Photography"
    },
    {
      image : image2,
      icon : iconMusic,
      alt1 : "Musik",
      alt2 : "icon Musik",
      text : "Music"
    },
    {
      image : image3,
      icon : iconMagicWand,
      alt1 : "Magic Wand",
      alt2 : "icon Magic Wand",
      text : "Utility"
    },
    {
      image : image4,
      icon : iconPlanet,
      alt1 : "Planet",
      alt2 : "icon Planet",
      text : "Virtual World"
    },
    {
      image : image5,
      icon : iconSwetches,
      alt1 : "Swetches",
      alt2 : "icon Swetches",
      text : "Collectibles"
    },
    {
      image : image6,
      icon : iconBasket,
      alt1 : "Basket",
      alt2 : "icon Basket",
      text : "Sport"
    },
    {
      image : image7,
      icon : iconRecord,
      alt1 : "Record",
      alt2 : "icon Record",
      text : "Video"
    },
    {
      image : image8,
      icon : iconKuas,
      alt1 : "Kuas",
      alt2 : "icon Kuas",
      text : "Art"
    }
  ]

  return (
    <div className="mt-16 lg:mt-24 w-[315px] md:w-[750px] lg:w-full container mx-auto">
      <h1 className="text-[28px] md:text-[38px] leading-[39.2px] md:leading-[46px] font-[600]">Browser Category</h1>
      <div className="mt-10 flex flex-wrap justify-center container mx-auto gap-4 md:gap-16">
        {
          items.map((item, i) => {
            return <CategoryCard key={i} image={item.image} icon={item.icon} alt1={item.alt1} alt2={item.alt2} text={item.text}/>
          })
        }
      </div>
    </div>
  );
};

export default BrowserCategory;
