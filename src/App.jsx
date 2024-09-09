import { useState } from 'react'
import './App.css'
import { checkTheResult } from './Components/Logical/LogicalFunction'

function App() {
  const [result,setResult] = useState(0)
  const [firstString,setFirstString] = useState('')
  const [secondString,setSecondString] = useState('')
  const [resultDescription, setResultDescription] = useState('') 
  const [resultOfAbout, setResultOfAbout] = useState('')
  


  return (
    <>
    <div className='calculateBox'>
      <label><h2>Init Weight</h2></label>
      <input type='number' 
      placeholder='Your Weight' 
      value={firstString}
      className='inputBar'
      onChange={(e)=>setFirstString(e.target.value)}/>
    <br/>
    <label><h2>Init Height</h2></label>
      <input type='number'
      placeholder='Your Height' 
      value={secondString}
      className='inputBar'
      onChange={(e)=>setSecondString(e.target.value)}/>
    <br/>  
      <button 
      onClick={()=>checkTheResult(firstString,secondString,setResultDescription,setResultOfAbout,setResult,setFirstString,setSecondString)}
      className='buttonBar' 
      >result</button>
      <div className='boxText'>
        <h1>{result.toFixed(2)}</h1>
        <h3>{resultDescription}</h3>
        <p>{resultOfAbout}</p>
      </div>
    </div>
    </>
  )
}

export default App
