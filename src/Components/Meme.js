import React from 'react';
import memeData from '../memeData'
export default function Meme(){

    const [meme,setMeme]=React.useState({
            topText:"",
            bottomText:"",
            randomImage:"https://i.imgflip.com/1c1uej.jpg"
        
    })
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
    function handleOnChange(event){
        const {name,value} = event.target;
        setMeme((prevValue)=>({
            ...prevValue,
            [name]:value
        }))

    }
    return(
        <div className='meme'>
            <form>
                <input type="text" placeholder='input the top text' className='formInput'name="topText" value={meme.topText} onChange={handleOnChange} />
                <input type="text" placeholder='input the bottom text' className='formInput' name="bottomText" value={meme.bottomText} onChange={handleOnChange} />
                <input type="button" value='Get a new meme image 🐕'className='formbutton' onClick={getImage} />
            </form>
            <div className='memeImgSection'>
            <img src={meme.randomImage} alt={meme.randomImage}className='memeImg' />
            <h1 className='topText'>{meme.topText}</h1>
            <h1 className='bottomText'>{meme.bottomText}</h1>

            </div>

        </div>
    )
}