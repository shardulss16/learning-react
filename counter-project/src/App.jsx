import { useState } from 'react'

import './App.css'

function App() {

let [counter, setCounter] = useState(0)


  // let counter = 15
  
  const addValue = () =>{
    // counter = counter + 1;
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  
  }

  const decreaseValue = () =>{
    counter = counter - 1;
    setCounter(counter)
  }


  return (
    <>
     <h1>Counter Project</h1>
     <h2>Counter Value: {counter}</h2>

     <button onClick={addValue}>Add value {counter}</button>
     <br />
     <button onClick={decreaseValue}>Decrease value {counter}</button>
    </>
  )
}

export default App
