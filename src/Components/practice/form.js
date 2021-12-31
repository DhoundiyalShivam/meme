import React from 'react'
 export default function Form(){
function handleChange(data){
        console.log(data.target.value)
    }
    return(
         <div>
             <form>
                 <input type="text" placeholder='Enter Name' onChange={handleChange} />
             </form>
         </div>
     )
 }