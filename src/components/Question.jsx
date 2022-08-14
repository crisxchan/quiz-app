import ChoiceChip from "./ChoiceChip"
import { decode } from "html-entities"
import { nanoid } from "nanoid"
import '../styles/question.css'

export default function Question(props) {
    const choiceElements = props.choices.map((choice, index) => {
        return <ChoiceChip
            showAnswers={props.showAnswers}
            key={nanoid()}
            id={choice.id}
            label={choice.label}
            isActive={choice.isActive}
            chooseAnswer={props.chooseAnswer}
            correct={props.correctAnswer === index}
        /> 
    })

    return (
        <div className="question">
            <h2>{decode(props.question)}</h2>
            <div className="choice-wrapper">{choiceElements}</div>
        </div>
    )
}