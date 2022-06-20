import "./Auth.css";
import "../../App.css";
import React, { useState } from "react";
import AboutAuth from "./AboutAuth.jsx";
import icon from "../../assets/icon.png";
import { signup, login } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export default function Auth() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  //   if(issign==true){
  //       setIsSignedUp(true);
  //   }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // console.log(age);
    // console.log(moment().format("YYYY-MM-DD"));
    // if (moment(age)) {
    //   console.log(age);
    // } else {
    //   console.log("age not valid");
    // }
    e.preventDefault();
    if (isSignedUp && !name) {
      alert("Enter Name !");
    } else if (isSignedUp && !age) {
      alert("Enter Your Birthdate !");
    } else if (!email) {
      alert("Enter Email !");
    } else if (!password) {
      alert("Enter Password !");
    }
    if (isSignedUp && name && email && password && age) {
      // console.log("signup")
      dispatch(signup({ name, email, password, age }, navigate));
    } else if (email && password && !isSignedUp) {
      // console.log("login")
      dispatch(login({ email, password }, navigate));
    }
  };

  const handleSwitchBtn = () => {
    if (isSignedUp === false) {
      setIsSignedUp(true);
    } else {
      setIsSignedUp(false);
    }
  };
  return (
    <section className="authSection">
      {isSignedUp && <AboutAuth />}
      <div className="authContainer">
        {!isSignedUp && (
          <img src={icon} alt="stack overflow" className="loginLogo" />
        )}
        <form onSubmit={handleSubmit}>
          {isSignedUp && (
            <>
              <label htmlFor="name">
                <h4>Display Name</h4>
                <input
                  type="name"
                  name="name"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label htmlFor="name">
                <h4>Enter The Date of Birthday</h4>
                <input
                  type="date"
                  name="date"
                  id="date"
                  min="1990-01-01"
                  max={moment().format("YYYY-MM-DD")}
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>
            </>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            {/* <div style={{display:"flex", justifyContent:"space-between"}}> */}
            <div className="password">
              <h4>Enter Password</h4>
              {!isSignedUp && (
                <div className="fpassword">Forgot Password ?</div>
              )}
            </div>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {isSignedUp && (
            <>
              {/* <label htmlFor="Re-password">
                <h4>Enter The Date of Birthday</h4>
                <input type="Date" name="date" id="Date" />
              </label> */}
              <p style={{ color: "#666767", fontSize: "13px" }}>
                Passwords must contain at least eight
                <br />
                characters, including at least 1 letter
                <br />
                and 1 number.
                <br />
                <label htmlFor="check">
                  <span style={{ fontSize: "13px", textAlign: "justify" }}>
                    <input type="checkbox" id="check" />
                    Opt-in to receive occasional,
                    <br />
                    product updates, user research invitations,
                    <br />
                    company announcements, and digests.
                  </span>
                </label>
              </p>
            </>
          )}
          <button type="submit" className="authBtn">
            {!isSignedUp ? "Log In" : "Sign In"}
          </button>
          {isSignedUp && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              By clicking “Sign up”, you agree to our
              <span style={{ color: "#007ac6" }}>
                {" "}
                <br />
                terms of service
              </span>
              ,<span style={{ color: "#007ac6" }}> privacy policy</span>
              <br />
              and
              <span style={{ color: "#007ac6" }}> cookie policy</span>
            </p>
          )}
        </form>
        <p>
          {isSignedUp ? "Already Have an Account ?" : "Don't have An Account"}
          <button
            type="button"
            className="handleSwitchBtn"
            onClick={handleSwitchBtn}
          >
            {isSignedUp ? "Log In" : "Sign In"}
          </button>
        </p>
      </div>
    </section>
  );
}
