import {createSlice} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  jobsPosted: [],
};
const jobsPostedSlice = createSlice({
  name: 'jobsPosted',
  initialState,
  reducers: {
    setJobsPosted: (state, action) => {
      state.jobsPosted = action.payload;
    },
    createJob: (state, action) => {
      state.jobsPosted = [action.payload, ...state.jobsPosted];
    },
  },
});

export const {setJobsPosted, createJob} = jobsPostedSlice.actions || {};
const persistConfig = {
  key: 'jobsPosted',
  storage: AsyncStorage,
};
const persistedJobsPostedReducer = persistReducer(
  persistConfig,
  jobsPostedSlice.reducer,
);
export default persistedJobsPostedReducer;
