import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./HomeMainBar.css";
import QuestionList from "./QuestionList.jsx";
// import questionsReducer from '../../reducers/question.js'

export default function HomeMainBar() {
  const location = useLocation();
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();
  const questionsList = useSelector((state) => state.questionsReducer);

  const checkAuth = () => {
    if (User === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };
  // var questionsList = []
  // var questionsList = [
  //   {
  //     _id: 1,
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 2,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["java", "node js", "react js", "mongo db", "express js"],
  //     userPosted: "mano",
  //     userId: 1,
  //     askedOn: "jan 1",
  //       answer: [
  //         {
  //           answerBody: "Answer",
  //           userAnswered: "kumar",
  //           answeredOn: "jan 2",
  //           userId: 2,
  //         },
  //       ],
  //   },
  //   {
  //     _id: 2,
  //     upVotes: 3,
  //     downVotes: 5,
  //     noOfAnswers: 0,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["javascript", "R", "python"],
  //     userPosted: "mano",
  //     askedOn: "jan 1",
  //     userId: 1,
  //       answer: [
  //         {
  //           answerBody: "Answer",
  //           userAnswered: "kumar",
  //           answeredOn: "jan 2",
  //           userId: 2,
  //         },
  //       ],
  //   },
  //   {
  //     _id: 3,
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 0,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["javascript", "R", "python"],
  //     userPosted: "mano",
  //     askedOn: "jan 1",
  //     userId: 1,
  //       answer: [
  //         {
  //           answerBody: "Answer",
  //           userAnswered: "kumar",
  //           answeredOn: "jan 2",
  //           userId: 2,
  //         },
  //       ],
  //   },
  // ];
  // console.log(questionsList);
  return (
    <div className="mainBar">
      <div className="mainBarHeader">
        {location.pathname === "/" ? (
          <h1>Top Questions </h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="askBtn">
          Ask Question
        </button>
      </div>
      <div>
        {questionsList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.data.length} questions</p>
            <QuestionList questionsList={questionsList.data} />
            {/* <QuestionList questionsList={questionsList.data} /> */}
          </>
        )}
      </div>
    </div>
  );
}
