import React from 'react'
import ImageSlider from './ImageSlider'

import "../assets/css/banner.css";

import img_01 from "../assets/images/main-slider/img_01.webp";
import img_02 from "../assets/images/main-slider/img_02.webp";
import img_03 from "../assets/images/main-slider/img_03.webp";
import img_04 from "../assets/images/main-slider/img_04.webp";

const Banner = () => {
    const images = [img_01,img_02,img_03,img_04];
  return (
    <div className='banner-div'>
        <h1>Text will be <br/>coming soon...</h1>
        <ImageSlider images={images} fade={true}/>
    </div>
  )
}

export default Banner