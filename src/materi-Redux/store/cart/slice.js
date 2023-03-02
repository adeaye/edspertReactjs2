import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    entities: [],
    error: null,
  },
  reducers: {
    // untuk mengubah state
    addItem: (state, action) => {
      console.log("action", action);
      if (state.entities.length === 0) {
        state.entities = [action.payload];
      } else {
        const itemExist = state.entities.filter(
          (item) => item.id === action.payload.id
        );
        if (itemExist.length === 0) {
          state.entities = [...state.entities, action.payload];
        }
      }
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
