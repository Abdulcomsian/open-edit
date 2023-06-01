import React from 'react';
import {createSlice} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  isLoggedIn: false,
  userType: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
    logout: () => initialState,
  },
});
export const {setLoggedIn, logout, setUserType} = authSlice.actions;
export const {isLoggedIn = false} = state => state.auth;

const persistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};
const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);
export default persistedAuthReducer;
