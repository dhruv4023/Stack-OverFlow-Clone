import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {askQuestion} from "../../actions/question";

import "./AskQuestion.css";

export default function AskQuestion() {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const User = useSelector((state) => state.currentUserReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!questionTitle) alert("Fill the question title");
    else if (!questionBody) alert("Fill the question Body");
    else if (!questionTags.length) alert("Fill the question Tags");
    else {
      dispatch(
        askQuestion({
          questionTitle,
          questionBody,
          questionTags,
          userPosted: User.result.name,
          userId: User?.result?._id
        },navigate)
      );
      // console.log(questionTitle, questionBody, questionTags);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") setQuestionBody(questionBody + "\n");
  };

  return (
    <div className="askQuestion">
      <div className="askQuesContainer">
        <h1>Ask a public Question</h1>
        {/* <form > */}
        <form onSubmit={handleSubmit}>
          <div className="askFormContainer">
            <label htmlFor="askQuesTitle">
              <h4>Title</h4>
              <p>
                Be specific and imagine you're asking a question to another
                person
              </p>
              <input
                type="text"
                id="askQuesTitle"
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              />
              {/* <input type="text" id='askQuesTitle'  placeholder='e.g. Is there an R function for finding the index of an element in a vector?'/> */}
            </label>
            <label htmlFor="askQuesBody">
              <h4>Body</h4>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <textarea
                name=""
                id="askQuesBody"
                onChange={(e) => {
                  setQuestionBody(e.target.value);
                }}
                cols="30"
                rows="10"
                onKeyPress={handleEnter}
              ></textarea>
              {/* <textarea
                name=""
                id="askQuesBody"
                onChange={(e) => {
                  setQuestionBody(e.target.value);
                }}
                cols="30"
                rows="10"
              ></textarea> */}
              {/* <textarea name="" id="askQuesBody"   cols="30" rows="10" ></textarea> */}
            </label>
            <label htmlFor="askQuesTags">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input
                type="text"
                id="askQuesTags"
                onChange={(e) => {
                  setQuestionTags(e.target.value.split(" "));
                }}
                placeholder="e.g. (xml typescript wordpress)"
              />
              {/* <input type="text" id='askQuesTags'  placeholder='e.g. (xml typescript wordpress)'/> */}
            </label>
          </div>
          <input
            type="submit"
            value="Reivew your question"
            className="reviewBtn"
          />
        </form>
      </div>
    </div>
  );
}
