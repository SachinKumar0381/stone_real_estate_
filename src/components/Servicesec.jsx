import React from 'react'

import "../assets/css/service.css";

import CustomButton from "./CustomButtom";

import service_01 from "../assets/images/service/service-1.svg"
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
                    <img src={service_01} alt="" style={{width:"100%"}}/></div>
                    <h3>Commercial Real Estate</h3>
                    <p>Our experienced brokerage team are experts in their field. One of our Signature Services is helping Corporate and Franchised Restaurant Brands grow successfully.</p>
            </div>
            <div className='service-box'>
                <div style={{width:"100px"}} className='service-box-div'>
                    <img src={service_01} alt="" style={{width:"100%"}}/></div>
                    <h3>Commercial Real Estate</h3>
                    <p>Our experienced brokerage team are experts in their field. One of our Signature Services is helping Corporate and Franchised Restaurant Brands grow successfully.</p>
            </div>
            <div className='service-box'>
                <div style={{width:"100px"}} className='service-box-div'>
                    <img src={service_01} alt="" style={{width:"100%"}}/></div>
                    <h3>Commercial Real Estate</h3>
                    <p>Our experienced brokerage team are experts in their field. One of our Signature Services is helping Corporate and Franchised Restaurant Brands grow successfully.</p>
            </div>
            <div className='service-box'>
                <div style={{width:"100px"}} className='service-box-div'>
                    <img src={service_01} alt="" style={{width:"100%"}}/></div>
                    <h3>Commercial Real Estate</h3>
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