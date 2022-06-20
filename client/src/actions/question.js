import * as api from '../api'


export const askQuestion = (questionData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postQuestion(questionData);
        dispatch({ type: "POST_QUESTION", payload: data });
        dispatch(fetchAllQuestions())
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

export const fetchAllQuestions = () => async (dispatch) => {
    try {
        const { data } = await api.getAllquestion()
        // console.log(data)
        dispatch({ type: 'FETCH_ALL_QUESTIONS', payload: data })
    } catch (error) {
        console.log(error)
        console.log("error")
    }
}

export const postAnswer = (answerData) => async (dispatch) => {
    try {
        const { id, noOfAnswer, answerBody, userAnswered, userId } = answerData;
        const { data } = await api.postAnswer(id, noOfAnswer, answerBody, userAnswered, userId);
        dispatch({ type: 'POST_ANSWER', payload: data })
        dispatch(fetchAllQuestions())
    } catch (error) {
        console.log(error)
    }
}

// export const postAComment = (commentData) => async (dispatch) => {
//     try {
//         const { id, ansId, commentBody, userCommented, userId } = commentData;
//         console.log(commentData)
//         const { data } = await api.postAComment(id, ansId, commentBody, userCommented, userId);
//         console.log(1)
//         dispatch({ type: 'POST_COMMENT', payload: data })
//         console.log(2)
//         dispatch(fetchAllQuestions())
//         console.log(3)
//     } catch (error) {
//         console.log(error)
//         console.log("cnt error")
//     }
// }

// export const postQuestionComment = (commentData) => async (dispatch) => {
//     try {
//         const { id,  commentBody, userCommented, userId,edit,cmtId } = commentData;
//         console.log(commentData)
//         const { data } = await api.postQComment(id,  commentBody, userCommented, userId,edit,cmtId);
//         // console.log(1)
//         dispatch({ type: 'POST_COMMENT', payload: data })
//         // console.log(2)
//         dispatch(fetchAllQuestions())
//         // console.log(3)
//     } catch (error) {
//         console.log(error)
//         // console.log("cnt error")
//     }
// }

export const deleteQuestion = (id, navigate) => async (dispatch) => {
    try {
        await api.deleteQuestion(id)
        dispatch(fetchAllQuestions())
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const deleteAnswer = (id, answerId, noOfAnswer) => async (dispatch) => {
    try {
        await api.deleteAnswer(id, answerId, noOfAnswer)
        dispatch(fetchAllQuestions())
    } catch (error) {
        console.log(error)
    }
}
// export const deleteQComment = (id,cntId) => async (dispatch) => {
//     try {
//         console.log(id,cntId)
//         await api.deleteQComment(id,cntId)
//         dispatch(fetchAllQuestions())
//     } catch (error) {
//         console.log(error)
//     }
// }


export const voteQuestion = (id, vote, userId) => async (dispatch) => {
    try {
        await api.voteQuestion(id, vote, userId)
        dispatch(fetchAllQuestions())
    } catch (error) {
        console.log(error)
    }
}