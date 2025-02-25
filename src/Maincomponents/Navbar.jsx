import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <h1>Now you can see a beautiful images</h1>
      <nav>
        <ul>
      <link to="/"> <li>Home</li></link> 
      <link to="/about"> <li>About</li></link> 
      <link to="/contact"> <li>Services</li></link>         
       </ul>
      </nav>
    </div>
  )
}

export default Navbar
