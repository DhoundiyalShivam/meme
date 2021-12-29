import React from 'react';
import memeData from '../memeData'
export default function Meme(){
    let randomImage
        function getImage(){
            let memeArray = memeData.data.memes;
     randomImage = Math.floor(Math.random() * memeArray.length)
    console.log(randomImage)
    
        }
    return(
        <div className='meme'>
            <form>
                <input type="text" placeholder='input the top text' className='formInput' />
                <input type="text" placeholder='input the bottom text' className='formInput'/>
                <input type="button" value='Get a new meme image 🐕'className='formbutton' onClick={getImage} />
            </form>
        </div>
    )
}