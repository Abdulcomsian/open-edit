import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userType = action.payload;
    },
    deleteUser: () => {
      return initialState;
    },
  },
});

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
};
export const {setUser, deleteUser} = userSlice.actions;
const persistedUser = persistReducer(userPersistConfig, userSlice.reducer);
export default persistedUser;
