import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
        state.value = action.payload;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
