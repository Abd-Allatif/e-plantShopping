import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const {name, img, cost} = action.payload;

      const existingItems = state.find((item)=> {item.name === name});

      if(existingItems){
        existingItems.quantity++;
      }else{
        existingItems.push({name, img, cost, quantity: 1});
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name != action.payload);
    },
    updateQuantity: (state, action) => {
      const {name, quantity} = action.payload;

      const itemsToUpdate = state.items.find((item) => item.name === name);

      if(itemsToUpdate){
        itemsToUpdate.quantity = quantity;
      }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
