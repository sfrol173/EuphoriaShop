import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./slices/shop.slice.js";
import modalReducer from "./slices/modal.slice.js";
import { thunk } from "redux-thunk";
import { logger } from "redux-logger/src";

export default configureStore({
  reducer: {
    modal: modalReducer,
    shop: shopReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, logger),
});
