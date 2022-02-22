import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { IUser } from '../../models/user';

export interface AuthState {
  authData: IUser | null;
  registerData: IUser | null;
}

const initialState: AuthState = {
  authData: null,
  registerData: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<IUser>) {
      state.authData = action.payload;
    },
    register(state, action: PayloadAction<IUser>) {
      state.registerData = action.payload;
    },
    logout(state) {
      state.authData = null;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      // return {
      //   ...state,
      //   ...action.payload.auth.data,
      // };
      state.authData = action.payload.auth.authData;
    },
  },
});

export const authReduer = authSlice.reducer;
