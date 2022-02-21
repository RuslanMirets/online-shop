import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { IUser } from '../../models/user';

export interface AuthState {
  data: IUser | null;
}

const initialState: AuthState = {
  data: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<IUser>) {
      state.data = action.payload;
    },
    logout(state) {
      state.data = null;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      // return {
      //   ...state,
      //   ...action.payload.auth.data,
      // };
      state.data = action.payload.auth.data;
    },
  },
});

export const authReduer = authSlice.reducer;
