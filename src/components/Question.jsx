import ChoiceChip from "./ChoiceChip"
import { Markup } from "interweave"
import arrayShuffle from "array-shuffle"
import '../styles/question.css'

export default function Question(props) {
    const choices = []

    choices.push({label: props.correctAnswer, isAnswer: true})
    props.incorrectAnswers.forEach(choice => {
        choices.push({
            label: choice,
            isAnswer: false
        })
    });

    const choiceElements = choices.map(choice => {
        return <ChoiceChip
            choice={choice.label}
        />
    })

    return (
        <div className="question">
            <h2><Markup content={props.question} /></h2>
            <div className="choice-wrapper">{choiceElements}</div>
        </div>
    )
}