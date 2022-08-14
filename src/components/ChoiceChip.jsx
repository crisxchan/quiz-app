import { Markup } from "interweave"
import '../styles/choiceChip.css'

export default function ChoiceChip(props) {
    let classes = 'choice-chip with-hover '
    
    if (props.showAnswers) {
        classes = 'choice-chip without-hover '
        if (props.correct) classes += 'correct '

        if (props.isActive && props.correct) classes += 'check '
        else if (props.isActive && !props.correct) classes += 'incorrect '
    } else {
        if (props.isActive) classes += 'active '
    }

    return (
        <div 
            data-id={props.id} 
            className={classes} 
            onClick={props.chooseAnswer}
            style={{cursor: props.showAnswers ? "default" : "pointer"}}
        >
            <Markup content={props.label} />
        </div>
    )
}