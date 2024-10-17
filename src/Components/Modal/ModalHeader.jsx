import React from "react";
import PropTypes from "prop-types";

const ModalHeader = ({ children }) => {
  return (
    <header className={"modal-header"}>
      <h2>{children}</h2>
    </header>
  );
};

ModalHeader.propTypes = {
  children: PropTypes.any,
};

export default ModalHeader;
