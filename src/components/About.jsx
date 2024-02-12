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
            Eget lorem purus egestas proin. Penatibus quis lacinia nulla at proin. Dignissim a placerat massa quam hendrerit in laoreet urna. Sed in volutpat sit porttitor vestibulum quis semper tristique ac. Ut sed eget a odio varius nisl sed nec. At elementum nascetur turpis elementum egestas non turpis.
            </p>
            <CustomButton inner_text="Explore more"/>
        </div>
        <div>
            <img src={about_img} alt="" />
        </div>
        <div>
            <p>
            <span className='deco-text'>M</span>ignissim adipiscing pretium libero at tristique. Diam sit mauris a interdum. In tristique eu vestibulum id amet malesuada. Quis morbi morbi sed volutpat tristique. Lacinia praesent dictum morbi et fermentum. Sit a sit ac blandit. Cursus donec mollis elit arcu donec aliquam.
            </p>
        </div>
        </div>
    </div>
  )
}

export default About