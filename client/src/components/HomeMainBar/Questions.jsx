import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
export default function Questions({ question }) {
  return (
    <div className="displayQuestionContainer">
      <div className="displayVotesAns">
        <p>{question.upVote.length - question.downVote.length}</p>
        {/* <p>{question.upVotes-question.downVotes}</p> */}
        <p>votes</p>
      </div>
      <div className="displayVotesAns">
        <p>{question.noOfAnswer}</p>
        <p>answers</p>
      </div>
      <div className="displayQuestionDetails">
        {/* <Link to={`/Questions/${question._id}`} className='questionTitleLink'>{question.questionTitle}</Link> */}
        <Link to={`/Questions/${question._id}`} className="questionTitleLink">
          {question.questionTitle}
        </Link>
        <div className="displayTagsTime">
          <div className="displayTags">
            {question.questionTags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
          <p className="displayTime">
            asked {moment(question.postedOn).fromNow()} By {question.userPosted}
          </p>
        </div>
      </div>
    </div>
  );
}
