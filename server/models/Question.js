import mongoose from 'mongoose'

const QuestionSchema = mongoose.Schema({
    questionTitle: { type: String, require: "Question must have title" },
    questionBody: { type: String, require: "Question must have body" },
    questionTags: { type: [String], require: "Question must have Tags" },
    noOfAnswer: { type: Number, default: 0 },
    upVote: { type: [String], default: [] },
    downVote: { type: [String], default: [] },
    userPosted: { type: String, require: "Question must have author" },
    userId: { type: String },
    postedOn: { type: Date, default: Date.now },
    answer: [{
        answerBody: String,
        userAnswered: String,
        userId: String,
        answeredOn: { type: Date, default: Date.now },
    }],
})
export default mongoose.model("Question", QuestionSchema);