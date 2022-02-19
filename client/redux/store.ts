import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/UserSlice';
import authReducer from './reducers/AuthSlice';

const rootReducer = combineReducers({
  userReducer,
  authReducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = makeStore();

export type RootState = ReturnType<typeof rootReducer>;
export type RootStore = ReturnType<typeof makeStore>;
export type AppDispatch = RootStore['dispatch'];
