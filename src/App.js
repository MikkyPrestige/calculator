import React from 'react';
import { useState } from 'react';

function App() {
  // Declare a new state variable, which we'll call "count"  
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  // OPERATORS VARIABLE IS AN ARRAY OF OPERATORS THAT WILL BE USED TO CHECK IF THE USER IS TRYING TO ENTER AN OPERATOR OR NOT 
  const ops = ["+", "-", "*", "/", ".", "%"];

  // Update the calc state with the value of the button clicked on the calculator screen 
  const updateCalc = value => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  // CREATE CLEAR FUNCTION
  const clear = () => {
    setCalc("");
    setResult("");
  };

  // CREATE DELETE FUNCTION
  const del = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  // CREATE EVALUATE FUNCTION
  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  // CALCULATE FUNCTION - EVALUATES CALCULATOR SCREEN INPUT AND RETURNS RESULT 
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(i);
    }
    return digits;
  };

  //RETURN THE CALCULATOR SCREEN AND BUTTONS 
  return (
    <div className='App'>
      <div className='calculator'>
        <div className='display'>
          <div className='display-calc'>{calc || "0"}</div>
          <div className='display-result'>
            <p> Ans = {result}</p></div>
        </div>
        <div className='operators'>
          <button onClick={clear} className='operator'>AC</button>
          <button onClick={() => updateCalc('+')} className='operator'>+</button>
          <button onClick={() => updateCalc('-')} className='operator'>-</button>
          <button onClick={del} className='operator'>DEL</button>
          <button onClick={() => updateCalc('%')} className='operator'>%</button>
          <button onClick={() => updateCalc('*')} className='operator'>*</button>
          <button onClick={() => updateCalc('/')} className='operator'>/</button>
          <button onClick={() => updateCalc('.')} className='operator'>.</button>
          {createDigits().map((digit) => (
            <button onClick={() => updateCalc(digit.toString())} className='operator' key={digit}>{digit}</button>
          ))}
          <button onClick={() => updateCalc('0')} className='operator'>0</button>
          <button onClick={calculate} className='operator equalTo'>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;