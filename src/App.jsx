
import './App.css'
import { createBrowserrouter } from 'react-router-dom'
import Navbar from './Maincomponents/Navbar'
import Home from './Maincomponents/Home'
import About from './Maincomponents/About'
import Services from './Maincomponents/Skills'
import Skills from './Maincomponents/Skills'

function App() {
const router = createBrowserrouter([
  {
    path : '/',
    element : <Home/>
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
