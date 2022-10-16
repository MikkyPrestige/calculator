// import React from "react";
// import { useState } from "react";

// const Operators = () => {

//  // OPERATORS ARRAY
//  const ops = ["+", "-", "*", "/"];

//  // STATE
//  const [operator, setOperator] = useState("");
//  const [result, setResult] = useState("");

// // UPDATE OPERATOR STATE WITH THE VALUE OF THE BUTTON CLICKED
//  const updateOperator = value => {
//   if (
//    (ops.includes(value) && operator === "") || // IF THE VALUE IS AN OPERATOR
//    (ops.includes(value) && ops.includes(operator.slice(-1))) // IF THE VALUE IS AN OPERATOR AND THE LAST CHARACTER OF THE OPERATOR STATE IS AN OPERATOR TOO
//   ) {
//    return;
//   } else {
//    setOperator(operator + value);
//   }
//   if (!ops.includes(value)) {
//    setResult(eval(operator + value).toString());
//   }
//  };



//  return (
//   <div className="operators">
//    <div className="operators">
//     <button onClick={() => updateOperator("+")}>+</button>
//     <button onClick={() => updateOperator("-")}>-</button>
//     <button onClick={() => updateOperator("*")}>*</button>
//     <button onClick={() => updateOperator("/")}>/</button>
//     <button onClick={() => updateOperator("=")}>=</button>


//    </div>
//   </div>
//  );
// };


// export default Operators;


