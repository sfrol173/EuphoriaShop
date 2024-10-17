import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./ListItem.scss";

const ListItem = ({ children, classNames }) => {
  return <li className={cn("list-item", classNames)}>{children}</li>;
};

ListItem.propTypes = {
  children: PropTypes.any,
  classNames: PropTypes.string,
};

export default ListItem;
