import '../styles/initialView.css'

export default function InitialView(props) {
    return (
        <div id="initial-view">
            <h1>Quiz App</h1>
            <p>by <strong>crisxchan</strong></p>

            <form onSubmit={props.handleSubmit}>
                <div id="num-questions" className="input-not-radio">
                    <label htmlFor="num-of-questions">Number of Questions</label>
                    <input 
                        type="number" 
                        id="num-of-questions"  
                        name="numQfQuestions" 
                        min="1" max="50" 
                        value={props.formData.numQfQuestions}
                        onChange={props.handleChange}
                    />    
                </div>
                
                <div id="select-category" className="input-not-radio">
                    <label htmlFor="category">Category</label>
                    <select 
                        id="category" 
                        name="category"
                        value={props.formData.category}
                        onChange={props.handleChange}
                    >
                        <option value="any">Any Category</option> 
                        <option value="9">General Knowledge</option> 
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option> 
                        <option value="23">History</option> 
                        <option value="27">Animals</option> 
                        <option value="18">Computers</option> 
                    </select>
                </div>
                
                <div id="radio-difficulty">
                    <input 
                        type="radio"
                        id="easy"
                        name="difficulty"
                        value="easy"
                        checked={props.formData.difficulty === "easy"}
                        onChange={props.handleChange}
                    />
                    <label htmlFor="easy">Easy</label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="medium"
                        name="difficulty"
                        value="medium"
                        checked={props.formData.difficulty === "medium"}
                        onChange={props.handleChange}
                    />
                    <label htmlFor="medium">Medium</label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="hard"
                        name="difficulty"
                        value="hard"
                        checked={props.formData.difficulty === "hard"}
                        onChange={props.handleChange}
                    />
                    <label htmlFor="hard">Hard</label>
                </div>

                <button>Start Quiz</button>    
            </form>
        </div>
    )
}