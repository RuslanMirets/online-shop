import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
  reducers: {
    profile(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
  },
});

export const userReduer = userSlice.reducer;
