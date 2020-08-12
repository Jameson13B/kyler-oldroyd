import React from 'react'
import './Gaming.css'
import BlueCrepperPic from '../assets/blue-creeper-hoodie-head.png'

export const Gaming = () => {
  return (
    <div className="Gaming">
      <div className="GamingBadge">
        <img alt="blue crepper" src={BlueCrepperPic} />
        <h1 className="GamingLogo">Comander Crepper</h1>
      </div>
    </div>
  )
}
