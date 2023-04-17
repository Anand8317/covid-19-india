import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const store = configureStore(
  {
    reducer: {
      covid: covidReducer,
    },
  },
  applyMiddleware(thunk),
);
export default store;