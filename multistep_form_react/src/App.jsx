// Components
import {GrFormNext, GrFormPrevious} from 'react-icons/gr';
import { FiSend } from'react-icons/fi';
import ReviewForm from './components/ReviewForm';
import Thanks from './components/Thanks';
import UserForm from './components/UserForm';

// Hooks
import { userForm } from './hooks/userForm';



import './App.css';

function App() {
  
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />];
  
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = userForm(formComponents)

  return (
    <div className="app">
      <div className='header'>
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos muito felizes com sua preferência, utilize o formulário abaixo para avaliar nosso serviço 
        </p>
      </div>
      <div className='form-container'>
        <p>etapas</p>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>  
          <div className='input-container'>{currentComponent}</div>
          <div className='actions'>
            {!isFirstStep && (
              <button type='button' onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
           
            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : ( 
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
