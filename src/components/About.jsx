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
            <span className='deco-text'>L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laborum aliquam impedit repellat eos perspiciatis sunt blanditiis mollitia quae dolore voluptate, odit vitae officia. Expedita vel dignissimos accusantium tempore repellendus?
            </p>
            <p>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores molestiae beatae veniam dolores. At quos dolor voluptates. At delectus dolore dicta odit cumque, autem provident est enim qui illum.
            </p>
            <CustomButton inner_text="Explore more"/>
        </div>
        <div style={{border:"1px solid red"}}>
            <img src={about_img} alt="" style={{height:"100%",objectFit:"cover"}}/>
        </div>
        
        </div>
    </div>
  )
}

export default About