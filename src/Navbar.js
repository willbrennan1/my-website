import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

  return (
    <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/posts">Posts</NavLink>
    <NavLink to="/projects">Projects</NavLink>
    <NavLink to="/videos">Videos</NavLink>
    <NavLink to="/bio">Bio</NavLink>
    </nav>
  )
}

export default Navbar;