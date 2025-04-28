import { useState } from "react";

// const Display = ({counter}) => <div>{counter}</div> 
const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const History = (props)=>{
  if (props.allClick.length === 0){
    return (
      <div>
        no clicks yet
      </div>
    )
  }
  return (
    <div>
      {props.allClick.join('')}
    </div>
  )
}
 /*const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClick, setAll] = useState([])
  const [total, setTotal] = useState(0)
  const handleLeftClick = ()=> {
    setAll(allClick.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }
  const handleRightClick = ()=> {
    setAll(allClick.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }



  return (
    <div>
      <Button handleClick={handleLeftClick} text='left'/>{left}
      <Button handleClick={handleRightClick} text='right'/>{right}
      <History allClick={allClick}/> 
      {total}	
    </div>
  )
}*/

const App = () => {
  const [value, setValue] = useState(10)


  const setToValue = (newValue) => () => {
    console.log('newValue', newValue)
    setValue(newValue)
  }
      

  return (
    <div>
      {value}

      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
    </div>
  )
}
export default App