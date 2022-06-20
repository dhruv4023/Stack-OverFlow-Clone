import React, { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import copy from "copy-to-clipboard";
import { useDispatch, useSelector } from "react-redux";
import upvote from "../../assets/sort-up.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import downvote from "../../assets/sort-down.svg";
import "./Questions.css";
import Avtar from "../../components/Avtar/Avtar";
import DisplayAnswers from "./DisplayAnswers";
import {
  deleteQuestion,
  postAnswer,
  voteQuestion,
} from "../../actions/question";
import QAComment from "../Comments/QAComment";

export default function QuestionsDetails() {
  const { id } = useParams();
  const questionsList = useSelector((state) => state.questionsReducer);
  // var questionsList = [
  //   {
  //     _id: "1",
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswer: 2,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["java", "node js", "react js", "mongo db", "express js"],
  //     userPosted: "mano",
  //     userId: 1,
  //     askedOn: "jan 1",
  //     answer: [
  //       {
  //         answerBody: "Answer hello",
  //         userAnswered: "kumar",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //       {
  //         answerBody: "Answer hello",
  //         userAnswered: "kumar",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //       {
  //         answerBody: "Answer hello",
  //         userAnswered: "kumar",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //   },
  //   {
  //     _id: "2",
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswer: 0,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["javascript", "R", "python"],
  //     userPosted: "mano",
  //     askedOn: "jan 1",
  //     userId: 1,
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "kumar",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //   },
  //   {
  //     _id: "3",
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswer: 0,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["javascript", "R", "python"],
  //     userPosted: "mano",
  //     askedOn: "jan 1",
  //     userId: 1,
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "kumar",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //   },
  // ];
  const User = useSelector((state) => state.currentUserReducer);
  const users = useSelector((state) => state.currentUserProfileReducer);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const url = "localhost:3000";
  // const url = "https://stackoverflow4023.netlify.app";
  const [answer, setAnswer] = useState("");

  const handlePostAnswer = (e, answerLength) => {
    e.preventDefault();
    if (User === null) {
      alert("Login or Signup to Answer the Question !");
      navigate("/Auth");
    } else {
      if (answer === "") {
        alert("Enter an Answer before submiting");
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswer: answerLength + 1,
            answerBody: answer,
            userAnswered: User.result.name,
            userId: User?.result?._id,
          })
        );
      }
      setAnswer("");
    }
  };

  const handleDelete = () => {
    dispatch(deleteQuestion(id, navigate));
  };

  const handleShare = () => {
    copy(url + location.pathname);
    alert("Copied url : " + url + location.pathname);
  };

  const handleUpVote = () => {
    dispatch(voteQuestion(id, "upVote", User.result._id));
  };
  const handleDownVote = () => {
    dispatch(voteQuestion(id, "downVote", User.result._id));
  };
  return (
    <div className="questionDetailsPage">
      {questionsList.data === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionsList.data
            .filter((q) => q._id === id)
            .map((q) => (
              <div key={q._id}>
                <section className="questionDetailsContainer">
                  <h1>{q.questionTitle}</h1>
                  <div className="questionDetailsContainer2">
                    <div className="questionVotes">
                      <img
                        src={upvote}
                        alt=""
                        width={18}
                        className="votesIcon"
                        onClick={handleUpVote}
                      />
                      {/* <p>{q.upVotes - q.downVotes}</p> */}
                      <p>{q.upVote.length - q.downVote.length}</p>
                      <img
                        src={downvote}
                        alt=""
                        width={18}
                        className="votesIcon"
                        onClick={handleDownVote}
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="questionBody">{q.questionBody}</p>
                      <div className="questionDetailsTags">
                        {q.questionTags.map((tag) => {
                          return <p key={tag}>{tag}</p>;
                        // eslint-disable-next-line
                        })}
                      </div>

                      <div className="questionActionsUser">
                        <div>
                          <button type="button" onClick={handleShare}>
                            {" "}
                            Share
                          </button>
                          {User?.result?._id === q?.userId && (
                            <button type="button" onClick={handleDelete}>
                              delete
                            </button>
                          )}
                        </div>
                        <div>
                          <p>asked {q.askedOn}</p>
                          <Link to={`/Users/${q.userId}`} className="userLink">
                            <Avtar backgroundColor="orange" px="8px" py="5px">
                              {q.userPosted.charAt(0).toUpperCase()}
                            </Avtar>
                            <div>
                              <div>{q.userPosted}</div>
                              <div>
                                {users
                                  .filter((m) => m._id === q.userId)
                                  .map((us) => {
                                    return (
                                      <>
                                        <FontAwesomeIcon
                                          icon={faBirthdayCake}
                                        />{" "}
                                        Age is{" "}
                                        <>
                                          {moment(Date.now()).year() -
                                            moment(us?.age).year()}
                                        </>{" "}
                                        years
                                      </>
                                    );
                                    // )
                                  })}
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="commentBox">
                      <QAComment QAid={q._id} question={q} />
                    </div>
                  </div>
                </section>
                {q.noOfAnswer !== 0 && (
                  <section>
                    {/* <h3>{q.noOfAnswer} Answers</h3> */}
                    <h3>{q.noOfAnswer} Answers</h3>
                    <DisplayAnswers
                      key={q._id}
                      question={q}
                      handleShare={handleShare}
                    ></DisplayAnswers>
                  </section>
                )}
                <section className="postAnsContainer">
                  <h3>Your Answers</h3>
                  <form onSubmit={(e) => handlePostAnswer(e, q.answer.length)}>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      onChange={(e) => setAnswer(e.target.value)}
                      value={answer}
                    ></textarea>
                    <input
                      type="submit"
                      className="postAnsBtn"
                      value="Post Your Answer"
                    />
                  </form>
                  <p>
                    Browse other Question tagged
                    {q.questionTags.map((tag) => (
                      <Link to="/Tags" key={tag} className="ansTags">
                        {" "}
                        {tag}{" "}
                      </Link>
                    ))}{" "}
                    or
                    <Link
                      to="/AskQuestion"
                      style={{ textDecoration: "none", color: "#009dff" }}
                    >
                      {" "}
                      ask your own question.
                    </Link>
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
}
