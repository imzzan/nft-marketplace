import React from "react";
import { Routes, Route } from "react-router-dom";
import { Tabbar } from "../../moleculs";
import ArtistCard from "./ArtistCard";
import Owned from "./Owned";
import Collection from "./Collection";

const ContentArtist = () => {
  return (
    <>
      <Tabbar />
      <Routes>
        <Route path="/" element={<ArtistCard />} />
        <Route path="/owned" element={<Owned />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </>
  );
};

export default ContentArtist;
