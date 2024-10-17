import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./Link.scss";

const Link = ({ children, classNames }) => {
  return (
    <a className={cn("link", classNames)} href={"#"}>
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.any,
  classNames: PropTypes.string,
};

export default Link;
