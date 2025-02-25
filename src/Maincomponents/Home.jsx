import React from 'react'
import './styles/home.css'

const Home = () => {
  return (
    <div>
      <h1>Nature Website Looks Beautiful</h1>
      <br />
     <p> Here is a Picture of a beautiful landscape</p>
     <br />
     <video src="https://media.istockphoto.com/id/2178431560/video/2025-message-and-fireworks-over-red-background-in-4k-video-format.mp4?s=mp4-640x640-is&k=20&c=9KfiEf9pie3kQq5cHtMYEnZE2WDIWt4y-KJqgAkd_rg=" controls="autoplay"></video>
     <img id='two'src="./images/miimage.jpg" alt="image" />
      <img  id='three'src="./images/yoimage.jpg" alt="image"  />
      <br />
      < img  id='four'src="https://plus.unsplash.com/premium_photo-1673515243072-7507c751a05c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRlc2t0b3AlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="image" />
    </div>
  )
}

export default Home
