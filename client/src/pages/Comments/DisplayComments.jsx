import React, { useState } from "react";
import moment from "moment";

import { useDispatch, useSelector } from "react-redux";
import "./comment.css";

import { editQAComment,deleteQAComment } from "../../actions/comments";

export default function DisplayComments({ QAid, comment }) {
  
  const User = useSelector((state) => state.currentUserReducer);

  const [edit, setEdit] = useState(false);
  const [commentEdit, setCommentEdit] = useState("");
  const [commentId, setCommentId] = useState("");

  const dispatch = useDispatch();
  const handleEdit = (ctId, ctbdy) => {
    setEdit(true);
    setCommentId(ctId);
    setCommentEdit(ctbdy);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!commentEdit) {
      alert("type your comment");
    } else {
      dispatch(
        editQAComment({
          id: commentId,
          commentBody: commentEdit,
        })
      );
      setCommentEdit("");
    }
    setEdit(false);
  };

  const handleDel = (id) => {
    dispatch(deleteQAComment(id));
  };

  return (
    <>
      {QAid === comment.QAid && (
        <>
          {edit === false ? (
            <p className="commentBdy">{comment.commentBody}</p>
          ) : (
            <form className="commentSubForm" onSubmit={handleSubmitComment}>
              <input
                type="text"
                placeholder="add Comment... "
                value={commentEdit}
                onChange={(e) => setCommentEdit(e.target.value)}
                className="commentIBox"
              />
              <input type="submit" className="commentAddBtn" value="save" />
            </form>
          )}
          <p className="userCommented">
            - {comment.userCommented} commented{" "}
            {moment(comment.commentOn).fromNow()}
          </p>
          {User?.result?._id === comment?.userId && (
            <p className="EditDel">
              <i onClick={() => handleEdit(comment?._id, comment.commentBody)}>
                Edit
              </i>{" "}
              <i onClick={() => handleDel(comment?._id)}>delete</i>
            </p>
          )}
        </>
      )}
    </>
  );
}

// export default function DisplayComments({ comment }) {

//   const User = useSelector((state) => state.currentUserReducer);

//   const handleEdit = (ctId, ctbdy) => {
//     setEdit(true);
//     setCmt(ctbdy);
//     setCtId(ctId);
//   };

//   const handleDel = (cntId) => {
//     dispatch(deleteQAComment(id,cntId))
//   };

//   const handleSubmitComment = (e) => {
//     e.preventDefault();
//     dispatch(
//       postQuestionComment({
//         id,
//         commentBody: cmt,
//         userCommented: User?.result.name,
//         userId: User?.result?._id,
//         edit: true,
//         cmtId: ctId,
//       })
//     );
//     setEdit(false);
//   };
//
// }

// {
//   /* {QAid === comment.QAid && (
//         <>
//           <p className="commentBdy">{comment.commentBody}</p>
//           <p className="userCommented">
//             - {comment.userCommented} commented{" "}
//             {moment(comment.commentOn).fromNow()}
//           </p>
//         </>
//       )} */
// }
// {
//   /* {edit === false ? (
//         <p className="commentBdy">{comment.commentBody}</p>
//       ) : (
//         <form className="commentSubForm" onSubmit={()=>{}}>
//           <input
//             type="text"
//             placeholder="add Comment... "
//             // value={cmt}
//             // onChange={(e) => setCmt(e.target.value)}
//             className="commentIBox"
//           />
//           <input type="submit" className="commentAddBtn" value="save" />
//         </form>
//       )} */
// }
// {
//   /* <p className="userCommented">
//         - {comment.userCommented} commented{" "}
//             {moment(comment.commentOn).fromNow()}
//       </p> */
// }
// {
//   /* {User?.result?._id === comment?.userId && (
//             <p className="EditDel">
//               <i onClick={() => handleEdit(comment?._id, comment.commentBody)}>
//                 Edit
//               </i>{" "}
//               <i onClick={()=>handleDel(comment?._id)}>delete</i>
//             </p>
//           )} */
// }
