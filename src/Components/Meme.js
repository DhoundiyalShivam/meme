import React from 'react';
export default function Meme(){

    const [meme,setMeme]=React.useState({
            topText:"",
            bottomText:"",
            randomImage:"https://i.imgflip.com/1c1uej.jpg"
        
    })
    const[allMeme,setAllMeme]=React.useState([])
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes").then(res=>res.json()).then(data=> setAllMeme(data.data.memes))
    },[])
    // React.useEffect(() => {
    //     async function getMemes() {
    //         const res = await fetch("https://api.imgflip.com/get_memes")
    //         const data = await res.json()
    //         setAllMemes(data.data.memes)
            
    //     }
    //     getMeme()
    // }, [])
    function getImage(){
        const randonNumber = Math.floor((Math.random()* allMeme.length))
        const url = allMeme[randonNumber].url;
        setMeme(prev=>{
            return(
                {...prev,randomImage:url}
                // {topText:"",bottomText:"",randomImage:url}

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
/**
useEffect takes a function as its parameter. If that function
returns something, it needs to be a cleanup function. Otherwise,
it should return nothing. If we make it an async function, it
automatically retuns a promise instead of a function or nothing.
Therefore, if you want to use async operations inside of useEffect,
you need to define the function separately inside of the callback
function, as seen below:
 // React.useEffect(() => {
    //     async function getMemes() {
    //         const res = await fetch("https://api.imgflip.com/get_memes")
    //         const data = await res.json()
    //         setAllMemes(data.data.memes)
            
    //     }
    //     getMeme()
    // }, [])
*/