import React from "react";
import { Routes, Route } from "react-router-dom";
import AskQuestion from "../pages/AskQuestion/AskQuestion";
import Auth from "../pages/Auth/Auth";
import Home from "../pages/Home/Home";
import DisplayQuestions from "../pages/Questions/DisplayQuestions";
import Questions from "../pages/Questions/Questions";
import Tags from "../pages/Tags/Tags";
import Users from "../pages/User/Users";
import UserProfile from "../pages/UserProfile/UserProfile";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/Questions" element={<Questions />} />
      <Route path="/AskQuestion" element={<AskQuestion />} />
      <Route path="/Questions/:id" element={<DisplayQuestions />} />
      <Route path="/Tags" element={<Tags />} />
      <Route path="/Users" element={<Users />} />
      <Route path="/Users/:id" element={<UserProfile />} />
    </Routes>
  );
}
