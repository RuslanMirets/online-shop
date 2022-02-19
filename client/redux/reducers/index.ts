import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import userReducer from './UserSlice';
import authReducer from './AuthSlice';

export const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
});

export const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    if (state.count) nextState.count = state.count;
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducer>;
