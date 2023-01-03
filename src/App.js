import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, SignUp, Artist, NFT, Marketplace, Rank, Wallet, LoginPage } from "./pages";
import { Navbar, Footer, Owned, Collection, ArtistCard, Top1d, Top7d, Top30d, TopAllTime } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/artistpage" element={<Artist/>}>
          <Route path="/artistpage" element={<ArtistCard/>}/>
          <Route path="/artistpage/owned" element={<Owned/>}/>
          <Route path="/artistpage/collection" element={<Collection/>}/>
        </Route>
        <Route path="/nftpage" element={<NFT/>}/>
        <Route path="/marketplace" element={<Marketplace/>}/>
        <Route path="/rank" element={<Rank/>}>
          <Route path="/rank" element={<Top1d/>}/>
          <Route path="/rank/top7d" element={<Top7d/>}/>
          <Route path="/rank/top30d" element={<Top30d/>}/>
          <Route path="/rank/topalltime" element={<TopAllTime/>}/>
        </Route>
        <Route path="/wallet" element={<Wallet/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
