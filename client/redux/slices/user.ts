import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../models/user';

export interface UserState {
  data: IUser[];
}

const initialState: UserState = {
  data: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getAllUsers(state, action) {
      state.data = action.payload;
    },
  },
});

export const userReduer = userSlice.reducer;
