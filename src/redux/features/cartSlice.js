import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []
}

export const cartSlice = createSlice({
  initialState,
  name: 'cartSlice',
  reducers: {}
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;