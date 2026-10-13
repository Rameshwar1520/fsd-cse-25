import React from 'react'
import { useState } from 'react';
const MyState = () => {
    const [counter, setCounter] = useState(10); 
    function increment(){
        setCounter(counter + 1);
    }
    function decrement(){
        setCounter(counter - 1);
    }
  return (
    <div>
    <h2> Counter = {counter}</h2>
    <button onClick={increment} style = {{margin: '5px'}}> Increment </button>
    <button onClick={decrement} style = {{margin: '5px'}}> Decrement</button>
    </div>
  )
}

export default MyState;
