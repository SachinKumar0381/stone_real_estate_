import React, { useEffect, useState } from 'react'
import "../assets/css/navbar.css";

import logo from "../assets/images/logo.png";
import CustomButtom from './CustomButtom';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import TemporaryDrawer from './TemporaryDrawer';

const Navbar = () => {
//Code for toggle navbar menu
    const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

    // Code for changing backgroundColor of Navbar on scrolling

    const [backgroundColor, setBackgroundColor] = useState('none');
      
        useEffect(() => {
          const handleScroll = () => {
            // Calculate the scroll percentage
            const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      
            // Change the background color based on the scroll percentage
            // You can adjust the conditions and colors according to your preference
            if (scrollPercentage < 2) {
              setBackgroundColor('none');
            } else {
              setBackgroundColor('white');
            }
          };
      
          // Add a scroll event listener to the window
          window.addEventListener('scroll', handleScroll);
      
          // Remove the event listener when the component unmounts
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, [])
  return (
    <div className='navbar-div' style={{backgroundColor:`${backgroundColor==="none"?"transparent":"transparent"}`}}>
        <div className='navbar-img-sec nav-right-margin'>
            <img src={logo} alt="" />
        </div>
        <TemporaryDrawer open={drawerOpen} toggleDrawer={toggleDrawer}/>
        {/* <div className='navbar-menu-sec'>
            <p>Home</p>
            <p>About</p>
            <p>Teams</p>
            <p>Services</p>
            <p>Projects</p>
        </div> */}
        <div className='navbar-right-sec'>
        {/* <div className='navbar-search-sec'>
            <SearchIcon sx={{color:'#f0f8ff',fontSize:"40px"}} className='hover-search'/>
        </div> */}
        <div className='navbar-mob-menu'>
            <MenuIcon sx={{color:"#3e6f7e",fontSize:"40px"}} className='hover-search'  onClick={toggleDrawer("left", true)}/>
        </div>
        {/* <div className='navbar-contact-sec'>
            <CustomButtom inner_text="Contact us"/>
        </div> */}
        </div>
    </div>
  )
}

export default Navbar