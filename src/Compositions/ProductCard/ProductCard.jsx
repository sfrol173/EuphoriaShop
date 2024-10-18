import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { updateFavoriteItemCount } from "../../Helpers/itemsCounter.js";
import { updateCartItemCountDisplay } from "../../Helpers/itemsCounter.js";

import Image from "../../Components/Image/Image.jsx";
import Button from "../../Components/Button/Button.jsx";
import RenderModal from "../RenderModal/RenderModal.jsx";
import Text from "../../Components/Text/Text.jsx";
import ListItem from "../../Components/ListItem/ListItem.jsx";
import { updateTotalPrice } from "../../Helpers/calculateTotalPrice.js";

import { useDispatch } from "react-redux";
import { openModal } from "../../store/slices/modal.slice.js";

const ProductCard = ({
  key,
  imageURL,
  name,
  category,
  price,
  article,
  isFavoritePage = false,
  isCartPage = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewingCart, setIsViewingCart] = useState(false);
  const [isFavoriteAdded, setIsFavoriteAdded] = useState(false);
  const [isCartAdded, setIsCartAdded] = useState(false);
  const [isViewingFavorites, setIsViewingFavorites] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const [productDetails, setProductDetails] = useState({
    name: name,
    category: category,
    imageUrl: imageURL,
    price: price,
    article: article,
  });

  useEffect(() => {
    let cart = sessionStorage.getItem("cart");
    let favorites = sessionStorage.getItem("favorite");

    if (!cart && !favorites) return;

    if (cart) {
      const cartItems = Object.keys(JSON.parse(cart));
      if (cartItems.includes(article)) setIsCartAdded(true);
    }

    if (favorites) {
      const favoriteItems = Object.keys(JSON.parse(favorites));
      if (favoriteItems.includes(article)) setIsFavoriteAdded(true);
    }
  }, [article]);

  const closeModal = () => {
    setIsModalOpen(false);
    setIsViewingCart(false);
    setIsViewingFavorites(false);
  };

  const handleCartClick = () => {
    setIsModalOpen(true);
    setIsViewingCart(true);
  };

  const handleFavoriteClick = () => {
    setIsModalOpen(true);
    setIsViewingFavorites(true);
  };

  const addProductToFavorites = () => {
    setIsFavoriteAdded(true);
    setIsModalOpen(false);
    const favorites = sessionStorage.getItem("favorite");

    let favoriteItems = favorites ? JSON.parse(favorites) : {};
    favoriteItems[article] = productDetails;

    sessionStorage.setItem("favorite", JSON.stringify(favoriteItems));
    closeModal();
    updateFavoriteItemCount();
  };

  const removeProductFromFavorites = () => {
    setIsFavoriteAdded(false);
    setIsModalOpen(false);
    if (isFavoritePage) setIsDeleted(true);

    let favorites = JSON.parse(sessionStorage.getItem("favorite"));
    delete favorites[article];

    sessionStorage.setItem("favorite", JSON.stringify(favorites));
    closeModal();
    updateFavoriteItemCount();
  };

  const addProductToCart = () => {
    setIsCartAdded(true);
    setIsModalOpen(false);
    const cart = sessionStorage.getItem("cart");

    let cartItems = cart ? JSON.parse(cart) : {};
    cartItems[article] = productDetails;

    sessionStorage.setItem("cart", JSON.stringify(cartItems));
    closeModal();
    updateCartItemCountDisplay();
  };

  const removeProductFromCart = () => {
    setIsCartAdded(false);
    setIsModalOpen(false);
    if (isCartPage) setIsDeleted(true);

    let cartItems = JSON.parse(sessionStorage.getItem("cart"));
    delete cartItems[article];

    sessionStorage.setItem("cart", JSON.stringify(cartItems));
    closeModal();
    updateCartItemCountDisplay();
    updateTotalPrice();
  };

  if (isDeleted) return null;

  return (
    <>
      <ListItem classNames={"product-card"} key={key}>
        <Image
          src={imageURL}
          classNames={"product-card__img"}
          alt={"product-photo"}
        />
        <div className={"product-card__info"}>
          <div className={"product-card__section"}>
            <Text classNames={"product-card__description"} children={name} />
            <Text classNames={"product-card__category"} children={category} />
          </div>
          <Text classNames={"product-card__price"} children={`${price} грн`} />
        </div>
        <div className={"card-buttons"}>
          {!isFavoriteAdded ? (
            <Button
              classNames={"card-button card-favorite"}
              type={"button"}
              onClick={handleFavoriteClick}
            />
          ) : (
            <Button
              classNames={"card-button in-favorite"}
              type={"button"}
              onClick={handleFavoriteClick}
            />
          )}
          {!isCartAdded ? (
            <Button
              classNames={"card-button card-cart"}
              type={"button"}
              onClick={handleCartClick}
            />
          ) : (
            <Button
              classNames={"card-button in-cart"}
              type={"button"}
              onClick={handleCartClick}
            />
          )}
        </div>
        <RenderModal
          onClose={closeModal}
          isModal={isModalOpen}
          isFavorite={isViewingFavorites}
          isCart={isViewingCart}
          isAddFavorite={isFavoriteAdded}
          imageURL={imageURL}
          name={name}
          category={category}
          onAddFavorite={addProductToFavorites}
          onRemoveFavorite={removeProductFromFavorites}
          onAddCart={addProductToCart}
          isAddCart={isCartAdded}
          onRemoveCart={removeProductFromCart}
        />
      </ListItem>
    </>
  );
};

ProductCard.propTypes = {
  imageURL: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.string,
  key: PropTypes.string,
  article: PropTypes.string.isRequired,
  isFavoritePage: PropTypes.bool,
  isCartPage: PropTypes.bool,
};

export default ProductCard;
