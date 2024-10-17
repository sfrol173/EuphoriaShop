import React from "react";
import PropTypes from "prop-types";

import "./Modal.scss";

const ModalWrapper = ({ children, onClick, isOpen }) => {
  const handleClickOutSide = (event) => {
    if (event.target.classList.contains("modal-wrapper")) {
      onClick();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="modal-wrapper" onClick={handleClickOutSide}>
          {children}
        </div>
      )}
    </>
  );
};
ModalWrapper.propTypes = {
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.any,
};
export default ModalWrapper;
