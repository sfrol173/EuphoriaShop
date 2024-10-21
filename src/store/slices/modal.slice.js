import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isFavorite: false,
  isCart: false,
  productKey: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    isFavoriteOpen: (state, action) => {
      state.isFavorite = true;
      state.isOpen = true;
      state.productKey = action.payload.productKey;
    },
    isCartOpen: (state, action) => {
      state.isCart = true;
      state.isOpen = true;
      state.productKey = action.payload.productKey;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.isFavorite = false;
      state.isCart = false;
      state.productKey = null;
    },
  },
});

export const { isFavoriteOpen, isCartOpen, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
