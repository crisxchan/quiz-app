
import { useState, useEffect } from 'react';
import InitialView from './components/InitialView';
import QuestionsView from './components/QuestionsView';
import './styles/App.css';

function App() {
  const [isInitialView, setIsInitialView] = useState(true)
  const [formData, setFormData] = useState(
    {
        numQfQuestions: "4",
        category: "any",
        difficulty: "easy"
    }
  )
  const [questionsUrl, setQuestionsUrl] = useState('');

  useEffect(() => {
    let url = `https://opentdb.com/api.php?amount=${formData.numQfQuestions}`
    url += formData.category !== 'any' ? `&category=${formData.category}` : ''

    switch(formData.difficulty){
      case 'easy':
        url += '&difficulty=easy'
        break;
      case 'medium':
        url += '&difficulty=medium'
        break
      case 'hard':
        url += '&difficulty=hard'
        break
      default:
        break;
    }
    setQuestionsUrl(url)
  }, [formData])

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
        : <QuestionsView questionsUrl={questionsUrl}/>
      }
    </div>
  );
}

export default App;
