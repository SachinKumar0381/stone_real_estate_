import React from 'react';

import "../assets/css/team.css";
import Teamcard from './Teamcard';
import CustomButton from "./CustomButtom";

const Team = () => {
  return (
    <div className='team-div'>
        <p>OUR PROFESSIONALS</p>
        <div className='team-out-box'>
                <Teamcard/>
                <Teamcard/>
                <Teamcard/>
                <Teamcard/>
        </div>
        <div className='btn-div'>
        <CustomButton inner_text="Explore More"/>
        </div>
    </div>
  )
}

export default Team