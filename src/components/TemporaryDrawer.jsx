// TemporaryDrawer.js
import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CustomButtom from "./CustomButtom";

import logo from "../assets/images/logo.png";

export default function TemporaryDrawer({ open, toggleDrawer }) {
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="menu-list"
    >
        <div className='navbar-img-sec'>
            <img src={logo} alt="" />
        </div>
      <p>Home</p>
      <Divider/>
            <p>About</p>
      <Divider/>

            <p>Teams</p>
      <Divider/>

            <p>Services</p>
      <Divider/>

            <p>Projects</p>
      <Divider/>
      <br /><br />
      <div className='navbar-contact-sec'>
            <CustomButtom inner_text="Contact us"/>
        </div>
    </Box>
  );

  return (
    <div>
      <Drawer anchor="left" open={open} onClose={toggleDrawer("left", false)}>
        {list("left")}
      </Drawer>
    </div>
  );
}
