import React from 'react';
import PropTypes from 'prop-types';

const DisplayOutPut = (props) => {
  const { total, operation, next } = props;
  return (
    <div className="screen">
      <input className="output" type="text" readOnly placeholder="0" value={total + operation + next} />
    </div>
  );
};

DisplayOutPut.propTypes = {
  total: PropTypes.string,
  operation: PropTypes.string,
  next: PropTypes.string,
};

DisplayOutPut.defaultProps = {
  total: '',
  operation: '',
  next: '',
};

export default DisplayOutPut;
