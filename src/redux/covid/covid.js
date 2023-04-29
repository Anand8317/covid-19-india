import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_COVID_ONCE = 'covid-10-india/covid/FETCH_COVID_ONCE';

const url = 'https://data.covid19india.org/v4/min/data.min.json';

const fetchCovidAction = createAsyncThunk(
  FETCH_COVID_ONCE,
  async (post, { dispatch }) => {
    const res = await fetch(url);
    const covid = await res.json();
    dispatch({ type: FETCH_COVID_ONCE, covid });
  },
);

export function covidReducer(state = [], action) {
  switch (action.type) {
    case FETCH_COVID_ONCE:
      return action.covid;
    default: return state;
  }
}

export { fetchCovidAction };
