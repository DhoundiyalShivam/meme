import React, { useState } from 'react'

export default function Box(props,handleClick){

    const[on,setOn] = useState(props.on)
    const styles={
        backgroundColor: on? '#000':'transparent'
    }
    return(
        <div style={styles} className='box' key={props.id} onClick={props.handleClick}></div>
    )
}