import React, { useState } from 'react';
import DisplayOutPut from './Display';
import Buttons from './Buttons';
import calculate from '../logic/calculate';

import '../style/calculator.css';

const Calculator = () => {
  const [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    e.preventDefault();
    setObj(calculate(obj, e.target.value));
  };

  return (
    <div className="app">
      <h2>Let&apos;s make some calculations ...</h2>
      <div className="calculator">
        <DisplayOutPut total={obj.total || ''} operation={obj.operation || ''} next={obj.next || ''} />
        <Buttons click={(e) => handleClick(e)} />
      </div>
    </div>
  );
};

export default Calculator;
