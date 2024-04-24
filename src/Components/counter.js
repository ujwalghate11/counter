import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [error, setError] = useState('')
     //let count = 0;
    const incr =()=>{
        setError('')
        setCount(count+1)
        
    }
    const decr =()=>{
       if(count<= 0){
        setError("Count Cant be less than zero")
       }
       else{
        setCount(count-1)
       }
       
        
    }
    const reset =()=>{
        
        setError('')
        setCount(0)
        
    }
    return (
        <div className='counter'>
            <h2>Functional Component</h2>
            <p>Count:{count} </p>
            <p className="err">{error}</p>
            <div className="button1">
            <button onClick = {incr}>+</button>
            <button onClick = {decr}>-</button>
            <button onClick = {reset}>Reset</button>
            </div>
            
        </div>
    )
}
export default Counter;