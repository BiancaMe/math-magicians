import React from 'react';
import PropTypes from 'prop-types';

export const Button = (props) => {
  const { label } = props;
  return (
    <input className="button" type="button" value={label} />
  );
};

export const Operation = (props) => {
  const { label } = props;
  return (
    <input className="button operation" type="button" value={label} />
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

Operation.propTypes = {
  label: PropTypes.string.isRequired,
};
