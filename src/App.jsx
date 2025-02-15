
import './App.css'
import { createBrowserrouter } from 'react-router-dom'
import Navbar from './Components/Navbar'


function App() {
const router = createBrowserrouter([
  {
    path : '/',
    element : <HOME/>
  },
  {
    path : '/About',
    element : <About/>
  },
  {
    path : '/Services',
    element : <Services/>
  },
  {
    path : '/Skills',
    element : <Skills/>
  },
  
])

 
  return (
    <>
     <Navbar/>
    </>
  )
}

export default App
