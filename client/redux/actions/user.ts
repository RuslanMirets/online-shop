import { userSlice } from './../reducers/UserSlice';
import axios from 'axios';
import { IUser } from '../../models/IUser';
import { AppDispatch } from './../store';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.usersFetching());
    const response = await axios.get<IUser[]>('http://localhost:5000/users');
    dispatch(userSlice.actions.usersFetchingSuccess(response.data));
  } catch (error: any) {
    dispatch(userSlice.actions.usersFetchingError('Не удалось загрузить пользователей'));
  }
};

// export const fetchUsers = createAsyncThunk('fetchUsers', async (_, thunkAPI) => {
//   try {
//     const response = await axios.get<IUser[]>('http://localhost:5000/users');
//     return response.data;
//   } catch (e) {
//     return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
//   }
// });
