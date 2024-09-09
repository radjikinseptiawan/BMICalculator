import './button.css'

export default function Button({onCalculate}) {
  return (
    <>
        <button onClick={onCalculate} className="buttons">Calculate</button>
    </>
  )
}
