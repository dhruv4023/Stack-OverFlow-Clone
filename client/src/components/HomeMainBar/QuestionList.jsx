
import React from 'react'
import Questions from './Questions'
export default function QuestionList({questionsList}) {
// export default function QuestionList() {
    return (
        <>
            {
                questionsList.map((question) => (
                    <Questions question={question} key={question._id}/>
                ))
            }
        </>
    )
}
