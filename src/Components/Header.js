import React from 'react'
import './index.css'
export default function Header(){
    return(
        <div className='header'>
            <div className='headerSection'>
                <div className='logo'>
                    <img src="https://png.pngitem.com/pimgs/s/279-2795397_dogecoin-logo-doge-gamer-hd-png-download.png" alt="memeLogo" className='logoImg'/>
                    <p className='heading'>Meme Generator</p>
                </div>
                <div className='reactProject'>
                    <p>React Project</p>

                </div>
            </div>
        </div>
    )
}