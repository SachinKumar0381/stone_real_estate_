import React from 'react'

import "../assets/css/service.css";

import CustomButton from "./CustomButtom";

import service_01 from "../assets/images/service/service-1.svg";
import service_02 from "../assets/images/service/service-2.svg";
import service_04 from "../assets/images/service/service-3.svg";
import service_08 from "../assets/images/service/service-8.svg";
import about_bg from "../assets/images/about/about_bg.png";

const Servicesec = () => {
  return (
    <div className='service-div' style={{backgroundImage:`url(${about_bg})`}}>
        <p>OUR SERVICES</p>
        <div className='service-out-box'>
            <div className='service-box'>
                <div style={{width:"100px"}} className='service-box-div'>
                    <img src={service_01} alt="" style={{width:"100%"}}/></div>
                    <h3>Commercial Real Estate</h3>
                    <p>Our experienced brokerage team are experts in their field. One of our Signature Services is helping Corporate and Franchised Restaurant Brands grow successfully.</p>
            </div>
            <div className='service-box'>
                <div style={{width:"100px"}} className='service-box-div'>
                    <img src={service_02} alt="" style={{width:"100%"}}/></div>
                    <h3>Residential Real Estate</h3>
                    <p>Our Realtors take the time to understand what your goals are because locating and securing the ideal property for you is paramount.</p>
            </div>
            <div className='service-box'>
                <div style={{width:"100px"}} className='service-box-div'>
                    <img src={service_01} alt="" style={{width:"100%"}}/></div>
                    <h3>Commercial Development</h3>
                    <p>We offer end-to-end services specializing in acquiring land, designing, financing, building, and managing diverse business-focused properties to drive economic growth.</p>
            </div>
            <div className='service-box'>
                <div style={{width:"100px"}} className='service-box-div'>
                    <img src={service_04} alt="" style={{width:"100%"}}/></div>
                    <h3>Business Sales</h3>
                    <p>Stone Business Sales Team facilitates the buying and selling of businesses, offering valuation, marketing, negotiation, and transaction guidance to ensure a smooth and profitable deal for all parties involved.</p>
            </div>
            <div className='service-box'>
                <div style={{width:"100px"}} className='service-box-div'>
                    <img src={service_08} alt="" style={{width:"100%"}}/></div>
                    <h3>Lending Partners</h3>
                    <p>Our experienced brokerage team are experts in their field. One of our Signature Services is helping Corporate and Franchised Restaurant Brands grow successfully.</p>
            </div>
        </div>
        <div className='btn-div'>
        <CustomButton inner_text="Explore More"/>
        </div>
    </div>
  )
}

export default Servicesec