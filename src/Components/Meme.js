import React from 'react';
import memeData from '../memeData'
export default function Meme(){

    const [meme,setMeme]=React.useState({
            toptext:"",
            bottomtext:"",
            randomImage:"https://i.imgflip.com/1c1uej.jpg"
        
    })
    const[allMemeData,setAllMemeData]=React.useState(memeData)
    
    function getImage(){
        const memeArray = memeData.data.memes
        const randonNumber = Math.floor((Math.random()* memeArray.length))
        const url = memeArray[randonNumber].url;
        setMeme(prev=>{
            return(
                {...prev,randomImage:url}
            )
        })
    }
    return(
        <div className='meme'>
            <form>
                <input type="text" placeholder='input the top text' className='formInput' />
                <input type="text" placeholder='input the bottom text' className='formInput'/>
                <input type="button" value='Get a new meme image 🐕'className='formbutton' onClick={getImage} />
            </form>
            <img src={meme} alt={meme}className='memeImg' />

        </div>
    )
}