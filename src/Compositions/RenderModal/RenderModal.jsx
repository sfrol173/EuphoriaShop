import React, { useState } from "react";
import PropTypes from "prop-types";

import Modal from "../../components/Modal/Modal.jsx";
import ModalWrapper from "../../components/Modal/ModalWrapper.jsx";
import ModalHeader from "../../components/Modal/ModalHeader.jsx";
import ModalFooter from "../../components/Modal/ModalFooter.jsx";
import ModalClose from "../../components/Modal/ModalClose.jsx";
import ModalImage from "../../components/Modal/ModalImage.jsx";
import ModalText from "../../components/Modal/ModalText.jsx";

import "../../components/Modal/Modal.scss";

const RenderModal = ({
  onClose,
  isModal,
  isFavorite,
  isCart,
  isAddFavorite,
  isAddCart,
  imageURL,
  name,
  category,
  onAddFavorite,
  onRemoveFavorite,
  onAddCart,
  onRemoveCart,
}) => {
  return (
    <ModalWrapper isOpen={isModal} onClick={onClose}>
      <Modal>
        <ModalClose onClick={onClose} />
        <ModalHeader children={name} />
        <ModalImage imageURL={imageURL} alt={"image"} />
        <ModalText children={category} />

        {isFavorite && !isAddFavorite && (
          <ModalFooter
            firstText={"ADD FAVORITE"}
            firstClick={onAddFavorite}
            secondaryText={"REMOVE ITEM"}
            secondaryClick={onClose}
          />
        )}

        {isFavorite && isAddFavorite && (
          <ModalFooter
            firstText={"REMOVE ITEM"}
            firstClick={onRemoveFavorite}
          />
        )}

        {isCart && !isAddCart && (
          <ModalFooter firstText={"ADD TO CART"} firstClick={onAddCart} />
        )}

        {isCart && isAddCart && (
          <ModalFooter firstText={"REMOVE ITEM"} firstClick={onRemoveCart} />
        )}
      </Modal>
    </ModalWrapper>
  );
};

RenderModal.propTypes = {
  onClose: PropTypes.func,
  isModal: PropTypes.bool,
  isFavorite: PropTypes.bool,
  isCart: PropTypes.bool,
  inFavorite: PropTypes.bool,
  imageURL: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
  onAddFavorite: PropTypes.func,
  onRemoveFavorite: PropTypes.func,
  onAddCart: PropTypes.func,
  isAddCart: PropTypes.bool,
};

export default RenderModal;
