import {React,useState} from 'react'

export default function StateHandling() {
    const [count,setCount]=useState(10);
    function incr(){
        setCount(count+20);
        
    }
    function dec(){
        setCount(count-20);
    }
      return (
    <div>stateHandling
        <h2>Count={count}</h2>
        <button onClick={incr}>Inc</button> <span></span>
        <button onClick={style="color:red"}>Dec</button>
    </div>
    
    
    
  )
}
