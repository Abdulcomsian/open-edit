import React from 'react';
import {createSlice} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  mediaList: [],
};

export const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    setMedia: (state, action) => {
      state.mediaList = [action.payload, ...state.mediaList];
    },
    deleteMedia: (state, action) => {
      state.mediaList = state.mediaList.filter(
        item => item.id !== action.payload,
      );
    },
  },
});
export const {setMedia, deleteMedia} = mediaSlice.actions;
export const {isLoggedIn = false} = state => state.auth;

const persistConfig = {
  key: 'media',
  storage: AsyncStorage,
  blacklist: ['mediaList'],
};
const persistedMediaReducer = persistReducer(persistConfig, mediaSlice.reducer);
export default persistedMediaReducer;
