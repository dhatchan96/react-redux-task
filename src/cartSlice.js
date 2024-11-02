import { createSlice } from '@reduxjs/toolkit';
import productsData from './products.json';

const initialState = {
  items: productsData.products.map(product => ({ ...product, quantity: 1 }))
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = Math.max(1, quantity);
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    }
  }
});

export const { updateQuantity, removeItem } = cartSlice.actions;

export const selectCartItems = state => state.cart.items;
export const selectTotalQuantity = state =>
  state.cart.items.reduce((acc, item) => acc + item.quantity, 0);
export const selectTotalAmount = state =>
  state.cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

export default cartSlice.reducer;
