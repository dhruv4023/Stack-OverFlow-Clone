import Question from "../models/Question.js"
import mongoose from "mongoose"

export const voteQuestion = async (req, res) => {
    const { id: _id } = req.params;
    const { vote, userId } = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('Question unavailable...')
    }

    try {
        const question = await Question.findById(_id);
        const upIndex = question.upVote.findIndex(id => id === String(userId))
        const downIndex = question.downVote.findIndex(id => id === String(userId))

        // console.log(question, downIndex, upIndex)
        // if (downIndex === -1 && upIndex === -1) {
        //     if (vote === 'upVote') {
        //         question.upVote.push(userId)
        //     } else {
        //         question.downVote.push(userId)
        //     }
        // } else if (vote === 'downVote' && downIndex === -1) {
        //     question.downVote.push(userId)
        //     question.upVote.splice(downIndex,userId)
        // }else{
        //     question.upVote.push(userId)
        //     question.downVote.splice(upIndex,userId)
        // }
        if (vote === 'upVote') {
            if (downIndex !== -1) {
                question.downVote = question.downVote.filter((id) => id !== String(userId))
            }
            if (upIndex === -1) {
                question.upVote.push(userId)
            } else {
                question.upVote = question.upVote.filter((id) => id !== String(userId))
            }
        }
        else if (vote === 'downVote') {
            if (upIndex !== -1) {
                question.upVote = question.upVote.filter((id) => id !== String(userId))
            }
            if (downIndex === -1) {
                question.downVote.push(userId)
            } else {
                question.downVote = question.downVote.filter((id) => id !== String(userId))
            }
        }
        await Question.findByIdAndUpdate(_id, question)
        res.status(200).json({ message: "voted successfully..." })
    } catch (error) {
        res.status(404).json({ message: "id not found" })
    }
}