 import React, { useState } from "react";
 import './App.css';
 import Secondtest from './components/Secondtest';
 
 function Memo(){
    const [count,setCount] = useState(0);
    const [data,setData] = useState(1);
    function increment(){
        setData(2);
        setCount(count+1);
    }

    return (
        <div className="App">
        React memo 
        <Secondtest data={data}/>
        <button onClick={increment}>+ {count} count </button>
        </div>
    )
 }

 export default Memo;