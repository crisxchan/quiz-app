import ChoiceChip from "./ChoiceChip"
import { useState } from "react"
import { Markup } from "interweave"
import { nanoid } from "nanoid"
import arrayShuffle from "array-shuffle"
import '../styles/question.css'

export default function Question(props) {
    let choices = []
    choices.push({
        label: props.correctAnswer,
        isAnswer: true,
        active: false
    })
    props.incorrectAnswers.forEach(choice => {
        choices.push({
            label: choice,
            isAnswer: false,
            active: false
        })
    })
    choices = arrayShuffle(choices);

    const [statefulChoices, setStatefulChoices] = useState(choices)

    function chooseAnswer(event) {
        console.log(event.target.innerText)
        setStatefulChoices(prevStatefulChoices => prevStatefulChoices.map(choice => {
            return choice.label === event.target.innerText ? {
                ...choice,
                active: true
            }
            : {
                ...choice,
                active: false
            }
        }))
    }

    const choiceElements = statefulChoices.map(choice => {
        return <ChoiceChip
            key={nanoid()}
            choice={choice.label}
            chooseAnswer={chooseAnswer}
            active={choice.active}
        />
    })

    return (
        <div className="question">
            <h2><Markup content={props.question} /></h2>
            <div className="choice-wrapper">{choiceElements}</div>
        </div>
    )
}