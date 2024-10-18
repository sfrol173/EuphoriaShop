import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sendRequest } from "../../Helpers/sendRequest";
import { API } from "../../Helpers/API";

const initialState = {
  products: [],
};

export const fetchProductCards = () => (dispatch) => {
  return sendRequest(API).then((results) => {
    dispatch(shopProductsCards(results.products));
  });
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    shopProductsCards: (state, action) => {
      console.log(action.payload);

      state.products = [...action.payload];
    },
  },
});

export const { shopProductsCards } = shopSlice.actions;

export default shopSlice.reducer;
