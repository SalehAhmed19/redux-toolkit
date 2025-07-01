import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
      // state.count += 1; // This is also valid
    },

    decrement: (state) => {
      state.count = state.count - 1;
      // state.count -= 1; // This is also valid
    },

    incrementByAmount: (state, actions) => {
      state.count = state.count + actions.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
