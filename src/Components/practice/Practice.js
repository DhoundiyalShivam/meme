import React from 'react'
function Practice() {
    /*Challenge 2*/

//   const result=  React.useState("hello")//useState retunr 2 array element 1 is value and other function
// const [value,func] =React.useState("hello")
const [value,setValue] =React.useState("Yes")
const [add,setAdd] =React.useState(0)
function handleClick(){
    setValue("No")
}
function increment(){
    setAdd(add+1)
}
function decrement(){
    setAdd(add-1);
    }
    // /*
    //  /**
    //  * Note: if you ever need the old value of state
    //  * to help you determine the new value of state,
    //  * you should pass a callback function to your
    //  * state setter function instead of using
    //  * state directly. This callback function will
    //  * receive the old value of state as its parameter,
    //  * which you can then use to determine your new
    //  * value of state.
    //  */
    // //   function add() {
    // //     setCount(prevCount => prevCount + 1)
    // // }
    // // // Challenge: update `substract` to use a callback function
    
    // // function subtract() {
    // //     setCount(function(prevCount){
    // //         return prevCount-1
    // //     })
    // // }

return(
        <>
          {/* <h1>{result[0]}</h1> without array destructuring */}
          {/*<h1>{value}</h1> with array destructuring*/}
            <div onClick={handleClick}>
                <h1>Ans :{value}</h1>
            </div>
            <div onClick={increment}>+</div>
            <div>{add}</div>
            <div onClick={decrement}>-</div>
        </>
    )
    /*Challenge 1 */
    // function handleClick(){
    //     console.log('I was Clicked')
    // }
    // const mouseEnter=(data)=>{
    //         console.log("okay");
    // }
    // return (
    //     <>
    //         <button onClick={handleClick}>Click Me</button>
    //         <img src ="https://www.a-c-d.net/wp-content/uploads/2019/03/tumblr_pmzcxfhFxs1w3y4ilo1_r4_500.gif" alt="imageAlt" onMouseEnter={mouseEnter} />
    //     </>
    // )
}
export default Practice;
/*
    1. How would you describe the concept of "state"?
A way for React to remember saved values from within a component.
This is similar to declaring variables from within a component,
with a few added bonuses (which we'll get to later)


2. When would you want to use props instead of state?
Anytime you want to pass data into a component so that
component can determine what will get displayed on the
screen.


3. When would you want to use state instead of props?
Anytime you want a component to maintain some values from
within the component. (And "remember" those values even
when React re-renders the component).


4. What does "immutable" mean? Are props immutable? Is state immutable?
Unchanging. Props are immutable. State is mutable



1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?
   
a. New value of state (setCount(42))
b. Callback function - whatever the callback function 
   returns === new value of state


2. When would you want to pass the first option (from answer
   above) to the state setter function?
Whenever you don't need the previous value of state to determine
what the new value of state should be.


3. When would you want to pass the second option (from answer
   above) to the state setter function?
Whenever you DO need the previous value to determine the new value

*/
