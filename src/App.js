import React from "react";
import Header from "./Components/Header";
import Meme from "./Components/Meme";
// import Practice from "./Components/Practice";
import './index.css'
export default function App(){
   return(
    <div className="main">
    <Header />
    <Meme />
    {/* <Practice /> */}
</div>
   )
}