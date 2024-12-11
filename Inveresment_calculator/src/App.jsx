
import './App.css'
import { useState } from 'react';
import Header from './components/Header'
import UserInput from './components/UserInput'
import Result from './components/Result';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualIvestment: 1200,
    expectedReturn: 6, // rate % or  intrest %
    duration: 10,
  });
const initialInput = userInput.duration >0;
  function handleChange(inputIdentifier, newvalue) {
    setUserInput((prev) => {
      return { ...prev, [inputIdentifier]: +newvalue };
    });
  }
  return (
    <>
  <Header/>
  <UserInput onChange={handleChange} userInput={userInput}/>
  {!initialInput && <p>Enter the duration greater than zero</p>}
 {initialInput && <Result input={userInput}/>} 
    </>
  )
}

export default App
