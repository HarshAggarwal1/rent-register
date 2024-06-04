import React from "react";
import { styled } from 'styled-components';
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actionCreators } from "../app/state";

// MUI Components
import Logout from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Tooltip } from "@mui/material";

// MUI Styles
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function NavBar() {
  const dispatch = useDispatch();
  const { toggleMenu, toggleProfilePage } = bindActionCreators(actionCreators, dispatch);
  return (
    <Navbar className=' flex bg-gray-900 text-white py-4 px-6 xs:text-xl md:text-2xl font-bold top-0 left-0 right-0 z-10 items-center justify-between fixed'>
      <ul className="flex gap-5">
          <li>
          <Tooltip title="Menu" arrow>
            <IconButton 
              aria-label="Menu" 
              style={{ color: "#ffffff" }}
              onClick={() => toggleMenu()} >
              <MenuOutlinedIcon />
            </IconButton>
          </Tooltip>
          </li>
          <li>
          <IconButton style={{ color: "#00000000" }} className=" invisible" disabled>
            <Logout />
          </IconButton>
          </li>
      </ul>
      <h1 className="">Rent Register</h1>
      <ul className="flex gap-5">
          <li>
          <Tooltip title="Profile Settings" arrow>
            <IconButton 
              aria-label="Profile Settings" 
              style={{ color: "#ffffff" }} 
              onClick={() => toggleProfilePage("profilePage")} >
              <Person2OutlinedIcon />
            </IconButton>
          </Tooltip>
          </li>
          <li>
          <Tooltip title="Logout" arrow>
            <IconButton aria-label="Logout" style={{ color: "#ff0000" }} className=" ">
              <Logout />
            </IconButton>
          </Tooltip>
          </li>
      </ul>
    </Navbar>
  );
}

export default NavBar;

const Navbar = styled.nav`
  display: flex;
  shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 20;
`