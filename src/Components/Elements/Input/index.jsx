import React from 'react'
import './input.css'
export default function Input({onChangeInput,labelOn,value}) {
  return (
    <>
    <label><h2>{labelOn}</h2></label>
      <input type='number'
      placeholder='Your Height' 
      value={value}
      className='inputBar'
      onChange={onChangeInput}/>
    </>
  )
}
