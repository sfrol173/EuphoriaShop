import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./Button.scss";

const Button = (props) => {
  const { classNames, onClick, type, children, to, ...restProps } = props;

  return (
    <button
      className={cn("button", classNames)}
      type={type}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  );
};

Button.propType = {
  classNames: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
  to: PropTypes.string,
  restProps: PropTypes.object,
};

export default Button;
