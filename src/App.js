
import './App.css';
import React, { useState } from 'react';
import Test from './components/Test';
function App() {

  //commit change
  const [count, setCount] = useState(0);
  const [data, setData] = useState(1);

  function increment(){

    setData(2);
    setCount(count+1)
  }

  return (

       <div className='App'>
        App Componet
        <Test data={data}/>
        <button onClick={()=>increment()}>+ {count} Count</button>
       </div>

  )
}

export default App;
