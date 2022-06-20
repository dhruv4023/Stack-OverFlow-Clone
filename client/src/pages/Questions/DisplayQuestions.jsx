import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import QuestionsDetails from "./QuestionsDetails";
import "../../App.css";

export default function DisplayQuestions() {
  return (
    <div className="homeContainer1">
      <LeftSidebar />
      <div className="homeContainer2">
        <QuestionsDetails />
        <RightSidebar />
      </div>
    </div>
  );
}
