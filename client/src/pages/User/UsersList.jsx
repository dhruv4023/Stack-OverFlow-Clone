import React from "react";
import { useSelector } from "react-redux";

import User from "./User";
import "./Users.css";
export default function UsersList() {
  
  const users = useSelector((state) => state.currentUserProfileReducer);
  // console.log(users)
  return (
    <div className="userListContainer">
      {users.map((user) => (
          <>
          <User user={user} key={user?._id} />
        </>
      ))}
    </div>
  );
}
