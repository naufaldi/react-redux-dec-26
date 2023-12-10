import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  // nama state
  name: 'counter',
  //inisitial state
  initialState: {
    value: 100,
  },
  //nama action untuk reducers
  reducers: {
    increment: (state) => {
      //actionnya ngapain?
      state.value += 1;
    },
    decrement: (state) => {
      //actionnya ngapain?
      state.value -= 1;
    },
  },
});

// export actionnya ke reducer
export const { increment, decrement } = counterSlice.actions;

// export reducer biar bisa dipkek di func lain.
export default counterSlice.reducer;
