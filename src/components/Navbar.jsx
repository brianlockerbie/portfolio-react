import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#333333] text-[#f2f2f2]'>
        <div>
          <img src={Logo} alt="Logo Image" style={{width : '50px'}} />
        </div>
        
        {/* Nav Menu */}
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Hamburger Menu */}
          <div></div>
          {/* Mobile Menu */}
          <div></div>


          {/* Social Media Icons */}
          <div></div>
    </div>
  );
};

export default Navbar