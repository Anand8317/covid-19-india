import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { covidReducer } from './covid/covid';

const store = configureStore(
  {
    reducer: {
      covid: covidReducer,
    },
  },
  applyMiddleware(thunk),
);
export default store;
