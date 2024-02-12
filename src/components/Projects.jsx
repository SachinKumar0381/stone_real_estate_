import React from 'react';

import "../assets/css/projects.css";

import CustomButton from "./CustomButtom";

import ImageSlider from './ImageSlider';
import img_01 from "../assets/images/project/news-8.jpg";
import img_02 from "../assets/images/project/news-9.jpg";
import img_03 from "../assets/images/project/news-10.jpg";

const Projects = () => {

    const images = [img_01,img_02,img_03];
    const txt = ["Project 1","Project 2","Project 3"]

  return (
    <div className='project-div'>
        <p>OUR PROJECTS</p>
        <div>
            <ImageSlider images={images} fade={false} lazyLoad={true} slidesToShow={3} txt={txt}/>
        </div>
        <div className='btn-div'>
        <CustomButton inner_text="Explore More"/>
        </div>
    </div>
  )
}

export default Projects