import React from 'react';
import DisplayOutPut from './Display';
import Buttons from './Buttons';
import '../style/calculator.css';

const Calculator = () => (
  <div className="app">
    <div className="calculator">
      <DisplayOutPut />
      <div className="buttons">
        <Buttons />
      </div>
    </div>
  </div>
);

export default Calculator;
