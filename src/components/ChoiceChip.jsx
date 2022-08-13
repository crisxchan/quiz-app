import '../styles/choiceChip.css'

export default function ChoiceChip(props) {
    const activeClass = props.active ? 'active' : ''
    const classes = `choice-chip ${activeClass}`

    return (
        <div className={classes} onClick={props.chooseAnswer}>
            {props.choice}
        </div>
    )
}