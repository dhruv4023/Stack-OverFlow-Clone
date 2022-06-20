import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

import "./Users.css";

const User = ({ user }) => {
  return (
    <Link to={`/Users/${user._id}`} className="userProfileLink">
      <h3>{user.name.charAt(0).toUpperCase()}</h3>
      <div>
        <h5>{user.name}</h5>
        <h6>
          Age: {moment(Date.now()).year() - moment(user.age).year()} Years
        </h6>
      </div>
    </Link>
  );
};

export default User;
