import Question from "../models/Question.js"
import mongoose from "mongoose"

export const AskQuestion = async (req, res) => {
    const postQuestionsData = req.body;
    // const userId = req.userId;
    console.log(postQuestionsData)
    const postQuestion = new Question(postQuestionsData);
    try {
        await postQuestion.save();
        res.status(200).json("Posted a Question successfully")
    } catch (error) {
        console.log(error);
        res.status(400).json("could't post a Question")
    }
}

export const deleteQuestion = async (req, res) => {
    const { id: _id } = req.params;
    // const userId = req.userId;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('Question unavailable...')
    }
    try {
        await Question.findByIdAndRemove(_id);
        res.status(200).json({ message: "Successfully deleted ..." })
    } catch (error) {
        res.status(400).json({ message: error.message })

    }
}
export const getAllquestion = async (req, res) => {
    try {
        const questionList = await Question.find();
        res.status(200).json(questionList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
