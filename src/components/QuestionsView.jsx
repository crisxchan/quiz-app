import Question from "./Question"
import LoadingIndicator from "./LoadingIndicator"
import { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import { decode } from "html-entities"
import arrayShuffle from "array-shuffle"
import '../styles/App.css'

export default function QuestionsView(props) {
    const [questions, setQuestions] = useState([])
    const [questionElements, setQuestionElements] = useState([])
    const [choicesArr, setChoicesArr] = useState([])   
    const [score, setScore] = useState([])
    const [showAnswers, setShowAnswers] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(props.questionsUrl)
        .then(res => res.json())
        .then(data => {
            setQuestions(data.results)
            setChoicesArr(data.results.map((q, id) => {
                return [...q.incorrect_answers, q.correct_answer]
                .map((label, index, itemArr) => {
                    return {
                        id,
                        label,
                        isAnswer: index + 1 === itemArr.length 
                            ? true 
                            : false,
                        isActive: false
                    }
                })
            }))
            setChoicesArr(prevChoicesArr => prevChoicesArr.map(choices => {
                return arrayShuffle(choices)
            }))
            setIsLoading(false)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setQuestionElements(questions.map((question, i) => {
            return <Question 
                showAnswers={false}
                key={nanoid()}
                question={question.question}
                choices={choicesArr[i]}
                chooseAnswer={chooseAnswer}
            />
        }))
        setScore(choicesArr.map(choices => {
            let answer = choices.find(choice => choice.isActive === true) ?? {isAnswer: false}
            return answer.isAnswer ? 1 : 0
        }))
    }, [choicesArr])

    function chooseAnswer(event) {
        let indexOfTarget = parseInt(event.currentTarget.dataset.id)
        let choiceGivenIndex = choicesArr[indexOfTarget].map(choices => {
            return decode(choices.label) === event.target.innerText ? {
                ...choices,
                isActive: true
            }
            : {
                ...choices,
                isActive: false
            } 
        })

        setChoicesArr(prevChoicesArr => prevChoicesArr.map((choices, index) => {
            return index === indexOfTarget 
            ? choiceGivenIndex
            : choices
        }))
    }

    function checkAnswers() {
        setQuestionElements(questions.map((question, i) => {
            return <Question 
                showAnswers={true}
                key={nanoid()}
                question={question.question}
                choices={choicesArr[i]}
                chooseAnswer={() => {}}
                correctAnswer={choicesArr[i].findIndex(choice => choice.isAnswer)}
            />
        }))
        setScore(score.reduce((total, currentValue) => total + currentValue, 0))
        setShowAnswers(true)
    }

    function resetGame() {
        window.location.reload()
    }

    return (
        <div id="questions-view">
            <div id="questions-wrapper">
                {questionElements}
            </div>
            {showAnswers && 
                <div id="score">
                    <p>
                        You got {score}/{choicesArr.length} correct answers
                    </p>
                </div>
            }
            {   
                isLoading ? <LoadingIndicator />
                : <div>
                    {
                        showAnswers ? 
                        <button onClick={resetGame} className="btn-submit">Play Again</button>
                        : <button onClick={checkAnswers} className="btn-submit">Check Answers</button>    
                    }
                </div>
            }
        </div>
    )
}

