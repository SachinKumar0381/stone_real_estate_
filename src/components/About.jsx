import React from 'react'

import "../assets/css/about.css";

import CustomButton from "./CustomButtom";

import about_bg from "../assets/images/about/about_bg.png";
import about_img from "../assets/images/about/about_01.jpg"

const About = () => {
  return (
    <div style={{backgroundImage:`url(${about_bg})`}} className='about-div'>
         <p>ABOUT US</p>
        <div className='about-grid'>
        <div>
            <h2>
            Perfect Solution For Your Dream House
            </h2>
            <p>
            <span className='deco-text'>T</span>ext... will... be... coming... soon... Text... will... be... coming... soon... Text... will... be... coming... soon... Text... will... be... coming... soon... Text... will... be... coming... soon... Text... will... be... coming... soon... 
            </p>
            <p>
            Text... will... be... coming... soon... Text... will... be... coming... soon... Text... will... be... coming... soon... Text... will... be... coming... soon... Text... will... be... coming... soon... Text... will... be... coming... soon... Text... will... be... coming... soon... 
            </p>
            <CustomButton inner_text="Explore more"/>
        </div>
        <div>
            <img src={about_img} alt="" style={{height:"100%",objectFit:"cover"}}/>
        </div>
        
        </div>
    </div>
  )
}

export default About