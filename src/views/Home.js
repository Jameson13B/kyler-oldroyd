import React from 'react'
import './Home.css'
import GamingPic from "../assets/gaming_picture.jpg"
import BlueJayPic from "../assets/blue_jay_picture.jpg"
import PugPic from "../assets/pug_image.jpg"
import ForestPic from "../assets/forest_picture.jpeg"

export const Home = () => {
  return (
    <div className="HomePage">
      <h1 className="center">Hello! I am Kyler Oldroyd, and welcome to my Website!</h1>
      <p className="center">Gaming, Birds and bird watching, Nature, and dogs!</p>
      <div className="Pictures">
        <img className="HomePicture" alt="gaming" src={GamingPic} />
        <img className="HomePicture" alt="blue jay" src={BlueJayPic} />
        <img className="HomePicture" alt="pug" src={PugPic} />
        <img className="HomePicture" alt="forest" src={ForestPic} />
      </div>
    </div>
  )
}
