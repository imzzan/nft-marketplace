import React from "react";
import {
  Hero,
  TopArtist,
  TrendingCollection,
  BrowserCategory,
  DiscoverNfts,
  HighLight,
  HowItWork,
  SuscribeWidget
} from "../components";

const Home = () => {
  return (
      <div className=" w-full">
        <Hero />
        <TrendingCollection />
        <TopArtist />
        <BrowserCategory />
        <DiscoverNfts />
        <HighLight />
        <HowItWork/>
        <SuscribeWidget/>
      </div>
  );
};

export default Home;
