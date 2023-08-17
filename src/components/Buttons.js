import React from 'react';
import { Button, Operation } from './button';

const Buttons = () => (
  <>
    <div className="row">
      <Button label="AC" />
      <Button label="+/-" />
      <Button label="%" />
      <Operation label="+" />
    </div>
    <div className="row">
      <Button label="7" />
      <Button label="8" />
      <Button label="9" />
      <Operation label="*" />
    </div>
    <div className="row">
      <Button label="4" />
      <Button label="5" />
      <Button label="6" />
      <Operation label="-" />
    </div>
    <div className="row">
      <Button label="1" />
      <Button label="2" />
      <Button label="3" />
      <Operation label="+" />
    </div>
    <div className="row last-row">
      <Button label="0" />
      <Button label="." />
      <Operation label="=" />
    </div>
  </>
);

export default Buttons;
