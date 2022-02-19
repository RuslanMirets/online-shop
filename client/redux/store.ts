import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/UserSlice';

const rootReducer = combineReducers({
  userReducer,
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
