import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
});

export const authReduer = authSlice.reducer;
