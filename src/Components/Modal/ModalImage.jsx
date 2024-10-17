import React from "react";
import PropTypes from "prop-types";

const ModalImage = ({ imageURL, alt }) => {
  return (
    <>
      <img src={imageURL} alt={alt} className={"modal-image"}></img>
    </>
  );
};

ModalImage.propTypes = {
  isFirstModal: PropTypes.bool,
};

export default ModalImage;
