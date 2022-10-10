import React from 'react';
import { useState } from 'react';

function App() {
  // DECLARE A NEW STATE VARIABLE  
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  // OPERATORS VARIABLE IS AN ARRAY OF OPERATORS THAT WILL BE USED TO CHECK IF THE USER IS TRYING TO ENTER AN OPERATOR OR NOT 
  const ops = ["+", "-", "*", "/", "."];

  // UPDATE CALC STATE VARIABLE WITH THE VALUE OF THE BUTTON THAT WAS CLICKED 
  const updateCalc = value => {
    if (
      (ops.includes(value) && calc === "") || // IF THE VALUE IS AN OPERATOR AND THE CALC STATE VARIABLE IS EMPTY
      (ops.includes(value) && ops.includes(calc.slice(-1))) // IF THE VALUE IS AN OPERATOR AND THE LAST CHARACTER OF THE CALC STATE VARIABLE IS ALSO AN OPERATOR
    ) {
      return;
    }

    setCalc(calc + value);  // UPDATE THE CALC STATE VARIABLE WITH THE VALUE OF THE BUTTON THAT WAS CLICKED

    if (!ops.includes(value)) {  // IF THE VALUE IS NOT AN OPERATOR
      setResult(eval(calc + value).toString());   // EVALUATE THE CALC STATE VARIABLE AND UPDATE THE RESULT STATE VARIABLE
    }
  };

  // CREATE CLEAR FUNCTION
  const clear = () => {
    setCalc("");    // SET CALC STATE VARIABLE TO EMPTY
    setResult("");  // SET RESULT STATE VARIABLE TO EMPTY
  };

  // CREATE DELETE FUNCTION
  const del = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);  // REMOVE THE LAST CHARACTER OF THE CALC STATE VARIABLE
    setCalc(value);  // UPDATE THE CALC STATE VARIABLE
  };

  // CREATE EVALUATE FUNCTION
  const calculate = () => {
    setCalc(eval(calc).toString());  // EVALUATE THE CALC STATE VARIABLE AND UPDATE THE CALC STATE VARIABLE
  };

  // CREATE PERCENTAGE FUNCTION
  const percentage = () => {
    if (calc === "") {
      return;
    }
    const value = parseFloat(calc);   // CONVERT THE CALC STATE VARIABLE TO A FLOAT
    if (value === 0) {
      return;
    }
    setCalc((value / 100).toString());  // DIVIDE THE CALC STATE VARIABLE BY 100 AND UPDATE THE CALC STATE VARIABLE
  };

  // CREATE POSITIVE/NEGATIVE FUNCTION
  const posNeg = () => {
    if (calc === "") {
      return;
    }
    const value = parseFloat(calc);
    if (value === 0) {
      return;
    }
    setCalc((value * -1).toString());  // MULTIPLY THE CALC STATE VARIABLE BY -1 AND UPDATE THE CALC STATE VARIABLE
  };

  // CREATE BRACKET FUNCTION
  const bracket = value => {
    if (calc === "" && value === "(") { // IF THE CALC STATE VARIABLE IS EMPTY AND THE VALUE IS "("
      setCalc(calc + value);
      return;
    }
    if (ops.includes(calc.slice(-1))) { // IF THE LAST CHARACTER OF THE CALC STATE VARIABLE IS AN OPERATOR 
      const newCalc = calc.slice(0, -1) + value; // REMOVE THE LAST CHARACTER OF THE CALC STATE VARIABLE AND ADD THE VALUE
      setCalc(newCalc);  // UPDATE THE CALC STATE VARIABLE
      return;
    }
    setCalc(calc + value);  // UPDATE THE CALC STATE VARIABLE WITH THE VALUE OF THE BUTTON THAT WAS CLICKED
  };

  // CREATE SQUARE FUNCTION
  const square = () => {
    if (calc === "") {
      return;
    }
    const value = parseFloat(calc);
    if (value === 0) {
      return;
    }
    setCalc((value * value).toString());  // MULTIPLY THE CALC STATE VARIABLE BY ITSELF AND UPDATE THE CALC STATE VARIABLE
  };

  // CREATE A CUBE FUNCTION
  const cube = () => {
    if (calc === "") {
      return;
    }
    const value = parseFloat(calc);
    if (value === 0) {
      return;
    }
    setCalc((value * value * value).toString());  // MULTIPLY THE CALC STATE VARIABLE BY ITSELF THREE TIMES AND UPDATE THE CALC STATE VARIABLE
  };

  // CREATE SQUARE ROOT FUNCTION
  const squareRoot = () => {
    if (calc === "") {
      return;
    }
    const value = parseFloat(calc);
    if (value === 0) {
      return;
    }
    setCalc(Math.sqrt(value).toString());  // CALCULATE THE SQUARE ROOT OF THE CALC STATE VARIABLE AND UPDATE THE CALC STATE VARIABLE
  };

  // CREATE PI FUNCTION
  const pi = () => {
    if (calc === "") {
      return;
    }
    const value = parseFloat(calc);
    if (value === 0) {
      return;
    }
    setCalc((value * 3.141592653589793).toString());  // MULTIPLY THE CALC STATE VARIABLE BY PI AND UPDATE THE CALC STATE VARIABLE
  };

  // CREATE E FUNCTION
  const e = () => {
    if (calc === "") {
      return;
    }
    const value = parseFloat(calc);
    if (value === 0) {
      return;
    }
    setCalc((value * 2.718281828459045).toString());  // MULTIPLY THE CALC STATE VARIABLE BY E AND UPDATE THE CALC STATE VARIABLE
  };

  // CREATE LOG FUNCTION
  const log = () => {
    if (calc === "") {
      return;
    }
    const value = parseFloat(calc);
    if (value === 0) {
      return;
    }
    setCalc(Math.log(value).toString());  // CALCULATE THE LOGARITHM OF THE CALC STATE VARIABLE AND UPDATE THE CALC STATE VARIABLE
  };

  // CREATE BASE 10 LOG FUNCTION
  const ln = () => {
    if (calc === "") {
      return;
    }
    const value = parseFloat(calc);
    if (value === 0) {
      return;
    }
    setCalc(Math.log10(value).toString());  // CALCULATE THE BASE 10 LOGARITHM OF THE CALC STATE VARIABLE AND UPDATE THE CALC STATE VARIABLE
  };

  // CREATE SIN FUNCTION
  const sin = () => {
    if (calc === "") {
      return;
    }
    const value = parseFloat(calc);
    if (value === 0) {
      return;
    }
    setCalc(Math.sin(value).toString());  // CALCULATE THE SINE OF THE CALC STATE VARIABLE AND UPDATE THE CALC STATE VARIABLE
  };

  // CREATE COS FUNCTION
  const cos = () => {
    if (calc === "") {
      return;
    }
    const value = parseFloat(calc);
    if (value === 0) {
      return;
    }
    setCalc(Math.cos(value).toString());  // CALCULATE THE COSINE OF THE CALC STATE VARIABLE AND UPDATE THE CALC STATE VARIABLE
  };

  // CREATE TAN FUNCTION
  const tan = () => {
    if (calc === "") {
      return;
    }
    const value = parseFloat(calc);
    if (value === 0) {
      return;
    }
    setCalc(Math.tan(value).toString());  // CALCULATE THE TANGENT OF THE CALC STATE VARIABLE AND UPDATE THE CALC STATE VARIABLE
  };

  // CREATE RECIPROCAL FUNCTION
  const reciprocal = () => {
    if (calc === "") {
      return;
    }
    const value = parseFloat(calc);
    if (value === 0) {
      return;
    }
    setCalc((1 / value).toString());  // RECIPROCAL OF THE CALC STATE VARIABLE AND UPDATE THE CALC STATE VARIABLE
  };

  // CREATE RANDOM FUNCTION
  const random = () => {
    if (calc === "") {
      return;
    }
    const value = parseFloat(calc);
    if (value === 0) {
      return;
    }
    setCalc(Math.random(value).toString());  // RANDOMLY GENERATE A NUMBER AND UPDATE THE CALC STATE VARIABLE
  };

  // CREATE ROUND FUNCTION
  const round = () => {
    if (calc === "") {
      return;
    }
    const value = parseFloat(calc);
    if (value === 0) {
      return;
    }
    setCalc(Math.round(value).toString());  // ROUND THE CALC STATE VARIABLE AND UPDATE THE CALC STATE VARIABLE
  };

  // CREATE CEILING FUNCTION
  const ceil = () => {
    if (calc === "") {
      return;
    }
    const value = parseFloat(calc);
    if (value === 0) {
      return;
    }
    setCalc(Math.ceil(value).toString());  // CEILING OF THE CALC STATE VARIABLE AND UPDATE THE CALC STATE VARIABLE
  };

  // CREATE FLOOR FUNCTION
  const floor = () => {
    if (calc === "") {
      return;
    }
    const value = parseFloat(calc);
    if (value === 0) {
      return;
    }
    setCalc(Math.floor(value).toString());  // FLOOR OF THE CALC STATE VARIABLE AND UPDATE THE CALC STATE VARIABLE
  };

  // CREATE ABSOLUTE VALUE FUNCTION
  const abs = () => {
    if (calc === "") {
      return;
    }
    const value = parseFloat(calc);
    if (value === 0) {
      return;
    }
    setCalc(Math.abs(value).toString());  // ABSOLUTE VALUE OF THE CALC STATE VARIABLE AND UPDATE THE CALC STATE VARIABLE
  };

  // CREATE EXPONENTIAL FUNCTION
  const exp = () => {
    if (calc === "") {
      return;
    }
    const value = parseFloat(calc);
    if (value === 0) {
      return;
    }
    setCalc(Math.exp(value).toString());  // EXPONENTIAL OF THE CALC STATE VARIABLE AND UPDATE THE CALC STATE VARIABLE
  };

  // CREATE CUBE ROOT FUNCTION
  const cbrt = () => {
    if (calc === "") {
      return;
    }
    const value = parseFloat(calc);
    if (value === 0) {
      return;
    }
    setCalc(Math.cbrt(value).toString());  // CUBE ROOT OF THE CALC STATE VARIABLE AND UPDATE THE CALC STATE VARIABLE
  };

  // CREATE FACTORIAL FUNCTION
  const factorial = () => {
    if (calc === "") {
      return;
    }
    const value = parseFloat(calc);
    if (value === 0) {
      return;
    }
    setCalc(factorialize(value).toString());  // FACTORIAL OF THE CALC STATE VARIABLE AND UPDATE THE CALC STATE VARIABLE
  };

  // CREATE FACTORIAL FUNCTION
  const factorialize = (num) => {
    if (num < 0) {
      return -1;
    } else if (num === 0) {
      return 1;
    } else {
      return num * factorialize(num - 1);
    }
  };

  // CREATE DIGITS FUNCTION
  const createDigits = () => {
    const digits = []; // CREATE DIGITS ARRAY
    for (let i = 1; i < 10; i++) { // LOOP THROUGH DIGITS 1-9
      digits.push(i); // PUSH NUMBERS 1-9 TO DIGITS ARRAY
    }
    return digits;
  };

  //RETURN THE CALCULATOR SCREEN AND BUTTONS 
  return (
    <div className='app'>
      <div className='app-container'>
        <div className='display'>
          <div className='display-calc'>
            {calc || "0"}  {/* DISPLAY CALC STATE VARIABLE OR 0 */}
          </div>
          <div className='display-result'>
            = {result}  {/* DISPLAY RESULT STATE VARIABLE */}
          </div>
        </div>
        <div className='operators'>
          <button onClick={clear} className='operator clear'>AC</button>
          <button onClick={posNeg} className='operator'>+/-</button>
          <button onClick={() => bracket('(')} className='operator'>(</button>
          <button onClick={() => bracket(')')} className='operator'>)</button>
          <button onClick={square} className='operator'>^</button>
          <button onClick={del} className='operator delete'>DEL</button>
          <button onClick={() => updateCalc('+')} className='operator'>+</button>
          <button onClick={() => updateCalc('-')} className='operator'>-</button>
          <button onClick={percentage} className='operator'>%</button>
          <button onClick={() => updateCalc('*')} className='operator'>*</button>
          <button onClick={() => updateCalc('/')} className='operator'>/</button>
          <button onClick={() => updateCalc('.')} className='operator'>.</button>
          {createDigits().map((digit) => (
            <button onClick={() => updateCalc(digit.toString())} className='digit' key={digit}>{digit}</button> // CREATE DIGITS BUTTONS AND MAP THROUGH DIGITS ARRAY TO DISPLAY DIGITS 1-9 ON BUTTONS 
          ))}
          <button onClick={() => updateCalc('0')} className='zero digit'>0</button>
          <button onClick={calculate} className='operator equalTo'>=</button>
          <button onClick={cube} className='operator cube'>^<sup>3</sup></button>
          <button onClick={squareRoot} className='operator sqrt'>√</button>
          <button onClick={pi} className='operator pie'>π</button>
          <button onClick={e} className='operator exponent'>e</button>
          <button onClick={log} className='operator log'>log</button>
          <button onClick={ln} className='operator logTen'>ln<sub>10</sub></button>
          <button onClick={sin} className='operator sin'>sin</button>
          <button onClick={cos} className='operator cos'>cos</button>
          <button onClick={tan} className='operator tan'>tan</button>
          <button onClick={random} className='operator'>rand</button>
          <button onClick={round} className='operator'>round</button>
          <button onClick={reciprocal} className='operator'>1/x</button>
          <button onClick={ceil} className='operator'>ceil</button>
          <button onClick={floor} className='operator'>floor</button>
          <button onClick={abs} className='operator'>abs</button>
          <button onClick={exp} className='operator'>exp</button>
          <button onClick={cbrt} className='operator'>cbrt</button>
          <button onClick={factorial} className='operator'>n!</button>
        </div>
      </div>
    </div>
  );
}

// EXPORT APP
export default App;