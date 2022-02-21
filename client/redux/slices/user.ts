import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../models/user';

export interface UserState {
  user: IUser | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const userReduer = userSlice.reducer;
