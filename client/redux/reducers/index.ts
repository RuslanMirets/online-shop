import { combineReducers } from 'redux';
import auth from './authReducer';
import alert from './alertReducer';

export const rootReducer = combineReducers({
  auth,
  alert,
});

export type RootState = ReturnType<typeof rootReducer>;
