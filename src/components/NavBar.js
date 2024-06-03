import React from "react";
import { styled } from 'styled-components';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

function NavBar() {
  return (
    <Navbar className=''>
        <h1>My Website</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
    </Navbar>
  );
}

export default NavBar;

const Navbar = styled.nav`
    
`;