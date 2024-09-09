import { expressionResult } from "../Data/resultData";

export const checkTheResult = (firstString,secondString,setResultDescription,setResultOfAbout,setResult,setFirstString,setSecondString)=>{

  if(firstString !== '' && secondString !== '' && parseFloat(firstString) > 0 && parseFloat(secondString) > 0){
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
    }else{
      setResultDescription("Angka Di Bawah 0 tidak bisa di proses")
    }
    setFirstString('')
     setSecondString('')
    }
  }
