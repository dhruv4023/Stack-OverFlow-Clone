import * as api from '../api'


export const postQAComment = (commentData) => async (dispatch) => {
    try {
        const { data } = await api.postQAComment(commentData);
        dispatch({ type: "POST_COMMENT", payload: data });
        dispatch(getAllcomments())
    } catch (error) {
        console.log(error);
    }
}

export const editQAComment = (commentData) => async (dispatch) => {
    try {
        const { id, commentBody } = commentData;
        // console.log(id, commentBody)
        const { data } = await api.editQAComment(id, commentBody);
        dispatch({ type: 'POST_COMMENT', payload: data })
        dispatch(getAllcomments())
    } catch (error) {
        console.log(error)
    }
}
export const getAllcomments = () => async (dispatch) => {
    try {
        const { data } = await api.getAllcomments()
        // console.log(data)
        dispatch({ type: 'FETCH_ALL_COMMENTS', payload: data })
    } catch (error) {
        console.log(error)
        console.log("error")
    }
}

export const deleteQAComment = (id) => async (dispatch) => {
    try {
        console.log(id)
        await api.deleteQAComment(id)
        dispatch(getAllcomments())
    } catch (error) {
        console.log(error)
    }
}
