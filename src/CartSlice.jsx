import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    items: []
  };

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      // Add a plant to the cart, or increment quantity if it already exists
      addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.items.push({ name, image, cost, quantity: 1 });
        }
      },
      // Remove a plant from the cart by name
      removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
      },
      // Update the quantity of a plant in the cart
      updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const item = state.items.find(item => item.name === name);
        if (item && quantity > 0) {
          item.quantity = quantity;
        }
      },
    }
  });

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
