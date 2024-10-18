import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  productData: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.productData = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.productData = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
