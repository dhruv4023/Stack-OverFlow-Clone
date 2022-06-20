import React from "react";
import HomeMainBar from "../../components/HomeMainBar/HomeMainBar";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import "../../App.css";

export default function Home() {
  return (
    <div className="homeContainer1">
      <LeftSidebar />
      <div className="homeContainer2">
        <HomeMainBar />
        <RightSidebar />
      </div>
    </div>
  );
}
