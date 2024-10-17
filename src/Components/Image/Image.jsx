import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./Image.scss";

const Image = ({ src, classNames, alt }) => {
  return (
    <>
      <img src={src} className={cn(classNames)} alt={alt} />
    </>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  classNames: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
