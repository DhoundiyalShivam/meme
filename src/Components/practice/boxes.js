import React from 'react';
import boxesData from '../../boxesData';
import Box from './box';
import './index.css' 
export default function Boxes(){
    const[boxdata,setBoxData]=React.useState(boxesData)

    function toggle(){
        console.log("clicked")
    }
    const boxesRender = boxesData.map(data=>(
        <Box on={data.on} key={data.id} handleClick={toggle}/>
        ))
    return(
        <div className="boxSection">
            {boxesRender}
        </div>
    )
};