import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count = state.count + 1;
      // state.count += 1; // This is also valid
    },

    decrement: (state, action) => {
      state.count = state.count - 1;
      // state.count -= 1; // This is also valid
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
