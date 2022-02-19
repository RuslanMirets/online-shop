import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';
import { RootState } from '../store';

interface UserState {
  user: IUser[] | null;
  token?: string;
}

const initialState: UserState = {
  user: null,
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<IUser[]>) {
      state.user = action.payload;
    },
  },
});

export default authSlice.reducer;
