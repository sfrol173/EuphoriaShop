import React from "react";
import Close from "./icons/close.svg?react";
const ModalClose = ({ onClick }) => {
  return (
    <button type="button" className="modal-close" onClick={onClick}>
      <Close />
    </button>
  );
};

export default ModalClose;
