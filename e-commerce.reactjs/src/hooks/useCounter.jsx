import { useState } from "react"

export const useCounter = (initial = 0, min, max) => {
  
    const [counter, setCounter] = useState(initial)
  
    let handleAdd = () => {
      if(counter < max){
      setCounter(counter + 1)
      }
    }
  
    let handleSubtract = () => {
      if(counter > min){
      setCounter(counter - 1)
      }
    }
  
    return {counter, handleAdd, handleSubtract}
    
}