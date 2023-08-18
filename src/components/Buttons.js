import React from 'react';
import PropTypes from 'prop-types';
import { Button, Operation } from './button';

const Buttons = (props) => {
  const { click, key } = props;
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="buttons" onClick={click} onKeyDown={key}>
      <div className="row">
        <Button label="AC" />
        <Button label="+/-" />
        <Button label="%" />
        <Operation label="÷" />
      </div>
      <div className="row">
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Operation label="x" />
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
    </div>
  );
};

Buttons.propTypes = {
  click: PropTypes.func.isRequired,
  key: PropTypes.func,
};

Buttons.defaultProps = {
  key: () => -1,
};

export default Buttons;
