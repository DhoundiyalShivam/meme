import React from "react";
// import SideEffect from "./Components/practice/useEffect";
// import Box from "./Components/practice/boxes";
// import Form from "./Components/practice/form";
import Header from "./Components/Header";
import Meme from "./Components/Meme";
// import Practice from "./Components/Practice";
import './index.css'
export default function App(){
   return(
    <div className="main">
       {/* <SideEffect />  */}
        <Header />
    <Meme />
    {/* <Practice /> */}
    {/* <Box/> */}
    {/* <Form /> */}
</div>
   )
}