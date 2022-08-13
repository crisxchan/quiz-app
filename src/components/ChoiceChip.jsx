import { Markup } from "interweave"
import '../styles/choiceChip.css'

export default function ChoiceChip(props) {
    let classes = 'choice-chip '
    
    if (props.showAnswers) {
        if (props.correct) classes += 'correct '

        if (props.isActive && props.correct) classes += 'check '
        else if (props.isActive && !props.correct) classes += 'incorrect '
        else if (props.isActive) classes += 'active '

    } else {
        if (props.isActive) classes += 'active '
    }

    return (
        <div data-id={props.id} className={classes} onClick={props.chooseAnswer}>
            <Markup content={props.label} />
        </div>
    )
}