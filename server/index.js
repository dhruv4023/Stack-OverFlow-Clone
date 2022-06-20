import Express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from 'dotenv'

import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answer.js'
import voteRoutes from './routes/vote.js'
import commentRoutes from './routes/comment.js'

const app = Express();
dotenv.config();
app.use(Express.json({ limit: "30mb", extended: true }))
app.use(Express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

app.get('/', (req, res) => {
    res.send("hello");
})

app.use('/user',userRoutes)
app.use('/questions',questionRoutes)
app.use('/answer',answerRoutes)
app.use('/comments',commentRoutes)
app.use('/vote',voteRoutes)

const PORT = process.env.PORT || 5000

// const DB_URL= process.env.CONNECTION_URL
const DB_URL= "mongodb://localhost:27017/stackoverflowclone"

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen((PORT), () => { console.log(`server Running on the http://localhost:${PORT}`) }))
    .catch((err) => { console.log(err.message) })