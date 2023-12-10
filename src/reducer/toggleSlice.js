import { createSlice } from '@reduxjs/toolkit';

export const toggleSlice = createSlice({
  // nama state
  name: 'toggle',
  //inisitial state
  initialState: {
    value: false,
  },
  //nama action untuk reducers
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

// export actionnya ke reducer
export const { toggle } = toggleSlice.actions;

// export reducer biar bisa dipkek di func lain.
export default toggleSlice.reducer;
