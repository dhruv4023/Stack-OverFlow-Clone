import React from "react";
import "./Users.css";
import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import UsersList from "./UsersList.jsx";

export default function Users() {
  return (
    <div className="homeContainer1">
      <LeftSidebar />
      <div className="homeContainer2" style={{ marginTop: "30px" }}>
        <h1 style={{ fontWeight: "400" }}>Users</h1>
        <UsersList />
      </div>
    </div>
  );
}
