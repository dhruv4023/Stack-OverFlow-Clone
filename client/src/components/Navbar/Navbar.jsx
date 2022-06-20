import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";

import logo from "../../assets/logo.png";
import search from "../../assets/search-solid.svg";
import Avtar from "../Avtar/Avtar";
import "./Navbar.css";
import { setCurrentUser } from "../../actions/currentUser";
export default function Navbar() {
  // const User = null;
  // const User = JSON.parse(localStorage.getItem('Profile'));
  const User = useSelector((state) => state.currentUserReducer);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const Token = User?.token;
    if (Token) {
      const decodedToken = decode(Token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);
  return (
    <nav className="mainNavBar">
      <div className="navBar">
        <Link to="/" className="navItem navLogo">
          <img src={logo} alt="" />
        </Link>
        <Link to="/" className="navItem navBtn">
          About
        </Link>
        <Link to="/" className="navItem navBtn">
          Products
        </Link>
        <Link to="/" className="navItem navBtn">
          For Teams
        </Link>
        <form>
          <input type="text" placeholder="Search..." />
          <img src={search} className="searchIcon" width={18} />
        </form>
        {User === null ? (
          <>
            <Link to="/Auth" className="navItem navLink">
              Log in
            </Link>
            {/* <Link to="/Auth" className="navItem navLink" issign={true}>
              Sign in
            </Link> */}
          </>
        ) : (
          <>
            <Avtar
              backgroundColor="#009dff"
              px="7px"
              py="10px"
              borderRadius="50%"
              color="white"
            >
              {" "}
              <Link
                to={`/Users/${User?.result?._id}`}
                style={{ color: "white", textDecoration: "none" }}
              >
                {User?.result?.name.charAt(0).toUpperCase()}
              </Link>{" "}
            </Avtar>
            <button className="navItem navLink" onClick={handleLogout}>
              Log out
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
