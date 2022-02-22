import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authData: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.authData = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
