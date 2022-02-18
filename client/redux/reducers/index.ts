import { alertReducer } from './alertReducer';
import { authReducer } from './authReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
