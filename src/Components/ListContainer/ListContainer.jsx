import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./ListContainer.scss";

const ListContainer = ({ children, classNames }) => {
  return <ul className={cn("list-container", classNames)}>{children}</ul>;
};

ListContainer.propTypes = {
  children: PropTypes.any,
  classNames: PropTypes.string,
};

export default ListContainer;
