import React from "react";
import { NavLink } from "react-router-dom";
import myLogo from './myLogo.png';
import { SocialIcon } from 'react-social-icons';

function SideNav() {
  return (
    <div className="sidenav">
        <NavLink to="/" className="sidenavheader">Will Brennan</NavLink>
          <img src={myLogo} alt="Will Brennan's Logo" className="logo" style={{width: 100, height: 100}}/>
        <NavLink to="/posts" className="sidenavbody">Posts</NavLink>
        <NavLink to="/projects" className="sidenavbody">Projects</NavLink>
        <NavLink to="/videos" className="sidenavbody">Videos</NavLink>
        <NavLink to="/bio" className="sidenavbody">Bio</NavLink>

        <section className="social" >
         <SocialIcon url="https://twitter.com/WWalkerCrypto" bgColor="#300030" fgColor="white"/>
         <SocialIcon url="https://github.com/willbrennan1" bgColor="#300030" fgColor="white" />
         <SocialIcon url="https://www.linkedin.com/in/willjbrennan" bgColor="#300030" fgColor="white" />
         <SocialIcon url="https://www.youtube.com/channel/UCJzEm07osBj8JxSPRE0veVA" bgColor="#300030" fgColor="white"/>
        </section>

    </div >
  )
}

export default SideNav;