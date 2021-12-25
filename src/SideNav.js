import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import myLogo from './myLogo.png';
import { SocialIcon } from 'react-social-icons';

function SideNav() {

  const [toggleHover, setToggleHover] = useState(false);

  function onHover() {
    setToggleHover(!toggleHover)
  }



  return (
    <div className="sidenav">
        <NavLink to="/" className="sidenavheader">Will Brennan</NavLink>
          <img src={myLogo} alt="Will Brennan's Logo" className="logo" style={{width: 100, height: 100}}/>
        <NavLink to="/posts" className="sidenavbody">Posts</NavLink>
        <NavLink to="/projects" className="sidenavbody">Projects</NavLink>
        <NavLink to="/videos" className="sidenavbody">Videos</NavLink>
        <NavLink to="/bio" className="sidenavbody">Bio</NavLink>

        <section className="social" >
         <SocialIcon className="my-social-icon" url="https://twitter.com/WWalkerCrypto" bgColor="currentColor" fgColor="white" />
         <SocialIcon className="my-social-icon" url="https://github.com/willbrennan1" bgColor="currentColor" fgColor="white" />
         <SocialIcon className="my-social-icon" url="https://www.linkedin.com/in/willjbrennan" bgColor="currentColor" fgColor="white" />
         <SocialIcon className="my-social-icon" url="https://www.youtube.com/channel/UCJzEm07osBj8JxSPRE0veVA" bgColor="currentColor" fgColor="white"/>
        </section>

    </div >
  )
}

export default SideNav;