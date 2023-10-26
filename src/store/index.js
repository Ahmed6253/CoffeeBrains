import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart-slice';
import searchSlice from './search-slice';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    search: searchSlice.reducer,
  },
});

export default store;
