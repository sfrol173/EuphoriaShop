import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button.jsx";

const ModalFooter = (props) => {
  const { firstText, firstClick, secondaryText, secondaryClick } = props;

  return (
    <footer className={"modal-footer"}>
      {firstText && firstClick && (
        <Button
          classNames={"modal-button first"}
          type={"button"}
          onClick={firstClick}
          children={firstText}
        />
      )}
      {secondaryText && secondaryClick && (
        <Button
          classNames={"modal-button second"}
          type={"button"}
          onClick={secondaryClick}
          children={secondaryText}
        />
      )}
    </footer>
  );
};

ModalFooter.propTypes = {
  firstText: PropTypes.string,
  firstClick: PropTypes.func,
  secondaryText: PropTypes.string,
  secondaryClick: PropTypes.func,
};

export default ModalFooter;
