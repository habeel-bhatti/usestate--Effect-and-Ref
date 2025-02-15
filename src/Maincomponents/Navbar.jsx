import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <link to ="/"><li>Home</li></link>
        <link to="/About"> <li>About</li></link>
        <link to="/Services"><li>Services</li></link>
        <link to="/Skills"> <li>Skills</li></link>
        <link to="/Home"> <li>Home</li></link>
      </nav>
    </div>
  )
}

export default Navbar
