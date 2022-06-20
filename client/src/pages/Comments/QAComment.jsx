import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayComments from "./DisplayComments.jsx";

// import { useParams } from "react-router-dom";
import { postQAComment } from "../../actions/comments";

import "./comment.css";
import { useNavigate } from "react-router-dom";

export default function QAComment({ QAid, question }) {
  // const { id } = useParams();
  const [comment, setComment] = useState("");
  const User = useSelector((state) => state.currentUserReducer);
  const commentsList = useSelector((state) => state.commentReducer);
  const navigate = useNavigate();
  const checkAuth = () => {
    if (User === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    }
  };
  // console.log(commentsList);
  const dispatch = useDispatch();

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!comment) {
      alert("type your comment");
    } else {
      dispatch(
        postQAComment({
          QAid: question._id,
          userId: User?.result?._id,
          commentBody: comment,
          userCommented: User?.result.name,
        })
      );
      setComment("");
    }
  };
  return (
    <>
      {commentsList?.data?.map((m) => (
        // console.log(QAid, m.QAid);
        // QAid === m.QAid && (
        // <p>comments</p>
        <DisplayComments
          key={m._id}
          comment={m}
          QAid={QAid}
          // handleSubmitComment={handleSubmitComment}
        />
      ))}

      <form onSubmit={handleSubmitComment} className="commentSubForm">
        <input
          type="text"
          placeholder="add Comment... "
          onChange={(e) => setComment(e.target.value)}
          className="commentIBox"
          value={comment}
          onClick={checkAuth}
        />
        <input type="submit" className="commentAddBtn" value="add" />
      </form>
    </>
  );
}

// export default function QuestionComment({question}) {

//   // console.log(id);
//   // console.log(ansId);

// }
