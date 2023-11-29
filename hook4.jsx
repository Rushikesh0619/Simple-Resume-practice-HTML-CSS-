import React, { useState, useMemo } from 'react';

const Calculator = () => {
  // State for input values
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  // Memoized result of the calculation
  const result = useMemo(() => {
    console.log('Performing expensive calculation...');
    return complexCalculation(num1, num2);
  }, [num1, num2]);

  // Function for complex calculation (replace with your actual calculation logic)
  const complexCalculation = (a, b) => {
    // Simulating an expensive calculation (replace this with your actual logic)
    console.log('Performing actual calculation...');
    return a * b + a - b;
  };

  return (
    <div>
      <h1>Calculator</h1>

      <div>
        <label>Number 1:</label>
        <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
      </div>

      <div>
        <label>Number 2:</label>
        <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
      </div>

      <div>
        <h2>Result:</h2>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default Calculator;
