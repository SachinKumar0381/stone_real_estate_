import React from 'react';

import "../assets/css/footer.css";

import logo from "../assets/images/logo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

import about_bg from "../assets/images/about/about_bg.png";

const Footer = () => {
  return (
    <div className='footer-div' style={{backgroundImage:`url(${about_bg})`}}>
        <div className='footer-grid'>
		<div className='footer-logo-social'>
		<div className='footer-logo'>
            <img src={logo} alt=""/>
        </div>
		<div className='footer-social'>
            <FacebookIcon/>
            <XIcon/>
            <YouTubeIcon/>
            <InstagramIcon/>
        </div>
		</div>
            <div>
                <h3>QUICK LINKS</h3>
                <ul>
                    <li><p>Residential Real Estate</p></li>
                    <li><p>Commercial Development</p></li>
                    <li><p>Commercial Real Estate</p></li>
                    <li><p>Business Sales</p></li>
                    <li><p>Lending Partners</p></li>
                </ul>
            </div>
            {/* <div>
						<div className="footer-widget links-widget">
							<h3>HOURS</h3>
							<table className='footer-timing-line'>
								<tr>
									<td>Monday</td>
									<td>09:00 AM</td>
									<td>-</td>
									<td>05:00 PM</td>
								</tr>
								<tr>
									<td>Tuesday</td>
									<td>09:00 AM</td>
									<td>-</td>
									<td>05:00 PM</td>
								</tr>
								<tr>
									<td>Wednesday</td>
									<td>09:00 AM</td>
									<td>-</td>
									<td>05:00 PM</td>
								</tr>
								<tr>
									<td>Thursday</td>
									<td>09:00 AM</td>
									<td>-</td>
									<td>05:00 PM</td>
								</tr>
								<tr>
									<td>Friday</td>
									<td>09:00 AM</td>
									<td>-</td>
									<td>05:00 PM</td>
								</tr>
								<tr>
									<td>Saturday</td>
									<td>Closed</td>
								</tr>
								<tr>
									<td>Sunday</td>
									<td>Closed</td>
								</tr>
							</table>
						</div>
            </div> */}
            <div>
							<h3>CONTACT US</h3>
							<ul className="footer-contact_list">
								<li><p><span>PH:</span>+9999999999</p></li>
								<li><p><span>EM:</span>username@domain.com</p></li>
								<li><p><span>LO:</span>Text will be coming soon... Text will be coming soon...</p></li>
							</ul>
            </div>
        </div>
        <div className='footer-lower'>
        <div className="copyright">Copyright &copy; 2024. All Rights Reserved.</div>
        <div>Developed & Desing by Barodaweb | The E-Catalogue Designe</div>
        </div>
    </div>
  )
}

export default Footer