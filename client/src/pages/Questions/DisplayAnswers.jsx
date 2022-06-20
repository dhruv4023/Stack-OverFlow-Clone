import React from "react";
import { Link, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import Avtar from "../../components/Avtar/Avtar";
import { useDispatch, useSelector } from "react-redux";
import { deleteAnswer } from "../../actions/question";
import QAComment from "../Comments/QAComment";

export default function DisplayAnswers({ question, handleShare }) {
  const User = useSelector((state) => state.currentUserReducer);
  const users = useSelector((state) => state.currentUserProfileReducer);

  const { id } = useParams();
  const dispatch = useDispatch();
  const handleDeleteAns = (answerId, noOfAnswer) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswer - 1));
  };

  // console.log(id);
  return (
    <div>
      {question.answer.map((ans) => (
        <div className="displayAns" key={ans._id}>
          <h1>{ans.answerBody}</h1>
          <div className="questionActionsUser">
            <div>
              <button type="button" onClick={handleShare}>
                Share
              </button>
              {User?.result?._id === ans?.userId && (
                // <button type='button' >Delete</button>
                <button
                  type="button"
                  onClick={() => handleDeleteAns(ans._id, question.noOfAnswer)}
                >
                  Delete
                </button>
              )}
            </div>
            <div>
              {/* <p>answered {ans.answeredOn}</p> */}
              <p>answered {moment(ans.answeredOn).fromNow()}</p>
              <Link
                to={`/Users/${ans.userId}`}
                className="userLink"
                style={{ color: "#0086d8" }}
              >
                <Avtar
                  backgroundColor="lightgreen"
                  px="8px"
                  py="5px"
                  borderRadius="4px"
                >
                  {ans?.userAnswered?.charAt(0).toUpperCase()}
                </Avtar>
                <div>
                  <div>{ans.userAnswered}</div>
                  <div>
                    {users
                      .filter((m) => m._id === ans.userId)
                      .map((us) => {
                        return (
                          <>
                            <FontAwesomeIcon icon={faBirthdayCake} /> Age is{" "}
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
          <div className="commentBox">
            <QAComment QAid={ans._id} question={ans} />
            {/* <AnswerComments ans={ans} ansId={ans._id} /> */}
          </div>
        </div>
      ))}
    </div>
  );
}
