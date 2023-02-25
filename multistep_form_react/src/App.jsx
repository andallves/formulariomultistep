// Components
import {GrFormNext, GrFormPrevious} from 'react-icons/gr';
import { FiSend } from'react-icons/fi';
import ReviewForm from './components/ReviewForm';
import Thanks from './components/Thanks';
import UserForm from './components/UserForm';
import Steps from './components/Steps';

// Hooks
import { userForm } from './hooks/userForm';
import { useState } from 'react';

import './App.css';
import { Header } from './layout/Header';

const formTamplete = {
  nome: "",
  email: "",
  review: "",
  comment: ""
}

function App() {

  const [data, setData] = useState(formTamplete);

  const updateFieldHandler = ( key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value};
    });
  };
  
  const formComponents = [<UserForm data={data} updateFieldHandler={updateFieldHandler} />, <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>, <Thanks data={data} />];
  
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = userForm(formComponents)

  return (
    <div className="app">
      <Header />
      
      <div className='form-container'>
        <Steps currentStep={currentStep} />
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
