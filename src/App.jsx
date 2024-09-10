import { useState } from 'react'
import './App.css'
import { checkTheResult } from './Components/Logical/LogicalFunction'
import Button from './Components/Elements/Button'
import Input from './Components/Elements/Input'

function App() {
  const [result,setResult] = useState(0)
  const [firstString,setFirstString] = useState('')
  const [secondString,setSecondString] = useState('')
  const [resultDescription, setResultDescription] = useState('') 
  const [resultOfAbout, setResultOfAbout] = useState('')
  


  return (
    <>
    <div className='calculateBox'>
      <div className='input-group'>
    <Input
    placeHolder={'Kg'}
    labelOn={'Masukkan Berat Badan'}
    value={firstString}
    onChangeInput={(e)=>setFirstString(e.target.value)}
    ></Input>
    <br/>
    <Input 
    placeHolder={'cm'}
    labelOn={'Masukkan Tinggi Badan'}
    value={secondString}
    onChangeInput={(e)=>setSecondString(e.target.value)}></Input>
    <br/>  
    </div>
      <Button onCalculate={()=>checkTheResult(firstString,secondString,setResultDescription,setResultOfAbout,setResult,setFirstString,setSecondString)}></Button>
      <div className='boxText'>
        <img src="" alt="png" />
        <h1>{result.toFixed(2)}</h1>
        <h3>{resultDescription}</h3>
        <p>{resultOfAbout}</p>
      </div>
    </div>
    </>
  )
}

export default App
