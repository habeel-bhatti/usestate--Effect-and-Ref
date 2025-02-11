import { useState , useEffect, useRef} from 'react'
import './App.css'
import { useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
 const ref = useRef()
   useEffect(() => {
   alert('hello welcome to my page')
   console.log('rendering the value of a is a')
   ref.current.style.backgroundcolor="red"
  }, [])
  useEffect(() => {
    alert('count is updated')
   }, [count])
   
  
  return (
    <>
    <h1>React app works fine</h1>
    <p>the count is {count}</p>
    <button ref={ref} onClick={()=>{setCount(count+1)}}>Increment</button>
    </>
  )
}

export default App
