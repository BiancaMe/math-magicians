import React from 'react';
import PropTypes from 'prop-types';

export const Button = (props) => (
  <input className="button" type="button" value={props.label} />
);

export const Operation = (props) => (
  <input className="button operation" type="button" value={props.label} />
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
};
