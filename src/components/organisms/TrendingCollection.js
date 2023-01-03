import React, { useRef } from "react";
import { CollectionSlider } from "../moleculs";
import {
  avatar1,
  avatar2,
  avatar3,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
} from "../../assests";

const TrendingCollection = () => {
  const image1Ref = useRef();
  const image2Ref = useRef();
  const image3Ref = useRef();
  const image4Ref = useRef();
  const image5Ref = useRef();
  const image6Ref = useRef();
  const image7Ref = useRef();
  const image8Ref = useRef();

  const items = [
    {
      image: image1,
      ref: image1Ref,
    },
    {
      image: image2,
      ref: image2Ref,
    },
    {
      image: image3,
      ref: image3Ref,
    },
    {
      image: image4,
      ref: image4Ref,
    },
    {
      image: image4,
      ref: image4Ref,
    },
    {
      image: image5,
      ref: image5Ref,
    },
    {
      image: image6,
      ref: image6Ref,
    },
    {
      image: image7,
      ref: image7Ref,
    },
    {
      image: image8,
      ref: image8Ref,
    },
  ];

  const items2 = [
    {
      image: image8,
      ref: image1Ref,
    },
    {
      image: image7,
      ref: image2Ref,
    },
    {
      image: image6,
      ref: image3Ref,
    },
    {
      image: image5,
      ref: image4Ref,
    },
    {
      image: image4,
      ref: image4Ref,
    },
    {
      image: image3,
      ref: image5Ref,
    },
    {
      image: image2,
      ref: image6Ref,
    },
    {
      image: image1,
      ref: image7Ref,
    },
    {
      image: image8,
      ref: image8Ref,
    },
  ];

  return (
    <div className="mt-16 lg:mt-24 w-[315px] md:w-[750px] lg:w-full container mx-auto">
      <h1 className="text-[28px] md:text-[38px] leading-[39.2px] md:leading-[46px] font-[600]">
        Trending Collection
      </h1>
      <p className="font-normal text-[16px] md:text-[22px] leading-[22.5px] md:leading-[33px] mt-3 mb-6">
        Checkout our weekly updated trending collection.
      </p>
      <div className="flex flex-col gap-10 md:flex-row justify-center md:justify-between">
        <CollectionSlider mainImage={image1} avatar={avatar1} title="DSNG Animals" user="BeKind2Robots"/>
        <CollectionSlider mainImage={image2} avatar={avatar2} title="Magic Mushrooms" user="Shroomie" invisibility='hidden md:block'/>
        <CollectionSlider mainImage={image3} avatar={avatar3} title="Disco Machines" user="MrFox" invisibility='hidden lg:block'/>
      </div>
    </div>
  );
};

export default TrendingCollection;
