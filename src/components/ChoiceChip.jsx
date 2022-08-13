import '../styles/choiceChip.css'

export default function ChoiceChip(props) {
    return (
        <div className="choice-chip">
            <p>{props.choice}</p>
        </div>
    )
}