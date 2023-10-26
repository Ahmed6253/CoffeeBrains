import { createSlice } from '@reduxjs/toolkit';

const cart =
  localStorage.getItem('cart') !== null
    ? JSON.parse(localStorage.getItem('cart'))
    : [];
const amount =
  localStorage.getItem('amount') !== null
    ? JSON.parse(localStorage.getItem('amount'))
    : 0;
const items =
  localStorage.getItem('items') !== null
    ? JSON.parse(localStorage.getItem('items'))
    : 0;

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: { cartItems: cart, totalItems: items, totalAmount: amount },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const itemExiste = state.cartItems.find((i) => i.name === item.name);
      if (!itemExiste) {
        state.cartItems.push({
          id: item.name,
          img: item.img,
          name: item.name,
          price: item.price,
          quantity: 1,
        });
        state.totalAmount = state.totalAmount + item.price;
        state.totalItems++;
      }
      if (itemExiste) {
        itemExiste.quantity++;
        state.totalItems++;
        state.totalAmount = state.totalAmount + item.price;
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
      localStorage.setItem('amount', JSON.stringify(state.totalAmount));
      localStorage.setItem('items', JSON.stringify(state.totalItems));
    },
    removeFromCart(state, action) {
      const itemId = action.payload;
      const item = state.cartItems.find((i) => i.id === itemId);
      if (item.quantity === 1) {
        state.cartItems = state.cartItems.filter((i) => i.id !== itemId);
        state.totalAmount = state.totalAmount - item.price;
        state.totalItems--;
      }
      if (item.quantity > 1) {
        item.quantity--;
        state.totalAmount = state.totalAmount - item.price;
        state.totalItems--;
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
      localStorage.setItem('amount', JSON.stringify(state.totalAmount));
      localStorage.setItem('items', JSON.stringify(state.totalItems));
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalItems = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
