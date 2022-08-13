import { nanoid } from "nanoid"
import { useState, useEffect } from "react"
import Question from "./Question"
import '../styles/App.css'

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div id="questions-view">
            <div id="questions-wrapper">
                {questionElements}
            </div>
            <button className="btn-submit">Check Answers</button>
        </div>
        
    )
}

