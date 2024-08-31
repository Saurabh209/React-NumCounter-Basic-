import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  function Add(){
    if(counter>=0){
      counter+=1
      setCounter(counter)
      console.log(counter)
    }
  }
  function Subtract(){
    if(counter>0){
      counter-=1
      setCounter(counter)
      console.log(counter)
    }
  }
  function Clear(){
    counter=counter*0
    setCounter(counter)
    console.log(counter);
  }


  return (
    <>
    <h2>Count:{counter}</h2>
   <div class='box'>
    <button onClick={Add}>Increase</button> 
    <button onClick={Subtract}>Decrease</button>
    <button onClick={Clear}>Clear</button> 
    </div> 
    </>
  )
}

export default App
