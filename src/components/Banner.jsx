import React from 'react'
import ImageSlider from './ImageSlider'

import "../assets/css/banner.css";

import img_01 from "../assets/images/main-slider/img_01.jpg";
import img_02 from "../assets/images/main-slider/img_02.jpg";
import img_04 from "../assets/images/main-slider/img_04.jpg";

const Banner = () => {
    const images = [img_01,img_02,img_04];
  return (
    <div className='banner-div'>
        <ImageSlider images={images} fade={true}/>
    </div>
  )
}

export default Banner