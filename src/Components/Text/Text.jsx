import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./Text.scss";

const Text = ({ classNames, children }) => {
  return <p className={cn(classNames)}>{children}</p>;
};

Text.propTypes = {
  classNames: PropTypes.string,
  children: PropTypes.any,
};

export default Text;
