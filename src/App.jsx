import { useState } from 'react'
import './App.css'
import { expressionResult } from './resultData'

function App() {
  const [result,setResult] = useState(0)
  const [firstString,setFirstString] = useState('')
  const [secondString,setSecondString] = useState('')
  const [resultDescription, setResultDescription] = useState('') 
  const [resultOfAbout, setResultOfAbout] = useState('')
  
  const checkTheResult = ()=>{

    if(firstString !== '' && secondString !== ''){
      const weightValue = parseFloat(firstString);
      const heightValue = parseFloat(secondString);
      const BMIResult = weightValue / (heightValue / 100) ** 2
      setResult(BMIResult)
  
    if(parseFloat(BMIResult) <= 18.5){
        setResultDescription(expressionResult[0].title)
        setResultOfAbout(expressionResult[0].description)
     }else if(parseFloat(BMIResult) > 18.5 && parseFloat(BMIResult) < 24.99){
      setResultDescription(expressionResult[1].title) 
      setResultOfAbout(expressionResult[1].description)
     }else if(parseFloat(BMIResult) > 24.99 && parseFloat(BMIResult) < 29.99){
      setResultDescription(expressionResult[2].title) 
      setResultOfAbout(expressionResult[2].description)
     }else if(parseFloat(BMIResult) > 30.0){
      setResultDescription(expressionResult[3].title) 
      setResultOfAbout(expressionResult[3].description)
    }
     setFirstString('')
     setSecondString('')
    }
  }


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
      onClick={checkTheResult}
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
