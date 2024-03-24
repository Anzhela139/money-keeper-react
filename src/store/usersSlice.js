import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    post: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    removePost: (state) => {
      state.value -= 1;
    },
    edit: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { post, removePost, edit } = usersSlice.actions;

export default usersSlice.reducer;
