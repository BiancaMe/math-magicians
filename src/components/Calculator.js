import React from 'react';
import DisplayOutPut from './Display';
import Buttons from './Buttons';
import '../style/calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <div className="calculator">
          <DisplayOutPut />
          <div className="buttons">
            <Buttons />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
