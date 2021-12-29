import React from 'react'
function Practice() {
    function handleClick(){
        console.log('I was Clicked')
    }
    const mouseEnter=(data)=>{
            console.log("okay");
    }
    return (
        <>
            <button onClick={handleClick}>Click Me</button>
            <img src ="https://www.a-c-d.net/wp-content/uploads/2019/03/tumblr_pmzcxfhFxs1w3y4ilo1_r4_500.gif" alt="imageAlt" onMouseEnter={mouseEnter} />
        </>
    )
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
*/