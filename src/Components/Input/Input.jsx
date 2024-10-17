import React from "react";
import PropTypes from "prop-types";

import "./Input.scss";

const Input = (props) => {
  const { type = "text", name, id, ...restProps } = props;

  return (
    <label className="input-wrapper">
      <input type={type} name={name} id={id} {...restProps} />
    </label>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  restProps: PropTypes.any,
};

export default Input;
