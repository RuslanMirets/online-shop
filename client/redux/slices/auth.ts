import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { IUserLogin } from '../../models/user';

export interface AuthState {
  data: IUserLogin | null;
}

const initialState: AuthState = {
  data: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<IUserLogin>) {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      // return {
      //   ...state,
      //   ...action.payload.auth.data,
      // };
      state.data = action.payload.auth.data
    },
  },
});

export const authReduer = authSlice.reducer;
