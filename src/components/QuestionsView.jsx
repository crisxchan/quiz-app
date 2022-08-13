import { nanoid } from "nanoid"
import { useState, useEffect } from "react"
import Question from "./Question"

export default function QuestionsView(props) {
    const [questions, setQuestions] = useState([])
    const questionElements = questions.map(question => {
        return <Question 
            key={nanoid()}
            question={question.question}
            correctAnswer={question.correct_answer}
            incorrectAnswers={question.incorrect_answers}
            type={question.type}
        />
    })

    useEffect(() => {
        fetch(props.questionsUrl)
        .then(res => res.json())
        .then(data => setQuestions(data.results));
    }, [])

    return (
        <div id="questions-view">
            {questionElements}
        </div>
    )
}

