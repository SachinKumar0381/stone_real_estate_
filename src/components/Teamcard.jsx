import React from 'react'

import "../assets/css/team.css";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import profile_01 from "../assets/images/teams/profile.jpg";

const Teamcard = () => {
  return (
    <div>
    <div style={{backgroundImage:`url(${profile_01})`}} className='teamcard'>
                    <div className='teamcard-btn'><span>CONTACT</span> <ArrowForwardIcon/></div>
                </div>
                <div className='team-text'>
                    <h3>Member Name</h3>
                    <p>Member Role</p>
                </div>
                </div>
                
  )
}

export default Teamcard