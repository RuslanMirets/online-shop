import { createStore, applyMiddleware, Store, AnyAction } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { reducer, rootReducer, RootState } from './reducers';
import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// export default store;

const makeStore = (context: Context) =>
  createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: true });

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
