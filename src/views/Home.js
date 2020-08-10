import React from 'react'
import './Home.css'
import GamingPic from "../assets/gaming_picture.jpg"
import BlueJayPic from "../assets/blue_jay_picture.jpg"

export const Home = () => {
  return (
    <div className="HomePage">
      <h1 className="center">Hello! I am Kyler Oldroyd, and welcome to my Website!</h1>
      <p className="center">Gaming, Birds and bird watching, Nature, and dogs!</p>
      <div className="Pictures">
        <img alt="gaming" src={GamingPic} />
        <img alt="blue jay" src={BlueJayPic} />
      </div>
    </div>
  )
}
