import axios from 'axios'

const API = axios.create({ baseURL: 'https://stackoverflowclone0.herokuapp.com' })
// const API = axios.create({ baseURL: 'http://localhost:5500' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('Profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})
export const login = (authData) => API.post('/user/login', authData);
export const signup = (authData) => API.post('/user/signup', authData);

export const postQuestion = (questionData) => API.post('/questions/Ask', questionData);
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`)

export const getAllquestion = () => API.get('/questions/get');

export const voteQuestion = (id, vote, userId) => API.patch(`/vote/vote/${id}`, { vote, userId })

export const postAnswer = (id, noOfAnswer, answerBody, userAnswered, userId) => API.patch(`/answer/post/${id}`, { noOfAnswer, answerBody, userAnswered, userId })
export const deleteAnswer = (id, answerId, noOfAnswer) => API.patch(`/answer/delete/${id}`, { answerId, noOfAnswer })


export const fetchAllUsers = () => API.get('/user/getAllUsers');
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData);



export const postQAComment = (CommentData) => API.post(`/comments/post`, CommentData)
export const deleteQAComment = (id) => API.delete(`/comments/delete/${id}`)
export const editQAComment = (id, commentBody) => API.patch(`/comments/edit/${id}`, { commentBody })
export const getAllcomments = () => API.get('/comments/get');