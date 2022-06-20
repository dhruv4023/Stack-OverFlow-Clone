import React from "react";
import { NavLink } from "react-router-dom";
import Globe from '../../assets/Glob.svg'
import './leftSidebar.css'
export default function LeftSidebar() {
  return (
    <div className="leftSidebar">
      <nav className="sideNav">
        <NavLink to="/" className="sideNavLinks" activeclassname="active">
          <p>Home</p>
        </NavLink>
        <div className="sideNavDiv">
          <div>
            <p>PUBLIC</p>
          </div>
          <NavLink
            to="/Questions"
            className="sideNavLinks"
            activeclassname="active"
          >
            <img src={Globe} alt="Globe" />
            <p style={{ paddingLeft: "10px" }}> Questions </p>
          </NavLink>
          <NavLink
            to="/Tags"
            className="sideNavLinks"
            activeclassname="active"
            style={{ paddingLeft: "40px" }}
          >
            <p>Tags</p>
          </NavLink>
          <NavLink
            to="/Users"
            className="sideNavLinks"
            activeclassname="active"
            style={{ paddingLeft: "40px" }}
          >
            <p>Users</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
