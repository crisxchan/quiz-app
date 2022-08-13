
import { useState } from 'react';
import InitialView from './components/InitialView';
import QuestionsView from './components/QuestionsView';
import './styles/App.css';

function App() {
  const [isInitialView, setIsInitialView] = useState(true)
  const [formData, setFormData] = useState(
    {
        numQfQuestions: "10",
        category: "any",
        difficulty: "easy"
    }
  )

  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setIsInitialView(prevIsInitialView => !prevIsInitialView)
  }
  
  return (
    <div className="App">
      {isInitialView 
        ? <InitialView 
            formData={formData} 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          /> 
        : <QuestionsView />
      }
    </div>
  );
}

export default App;
