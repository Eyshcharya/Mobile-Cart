import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './src/Features/CartSlice';
import modalReducer from './src/Features/ModalSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
