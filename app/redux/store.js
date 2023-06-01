import {combineReducers, configureStore} from '@reduxjs/toolkit';
import persistedAuthReducer from './authSlice';
import reactotron from '../configs/ReactotronConfig';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
});

const rootPersistedReducer = persistReducer(rootPersistConfig, rootReducer);
export const store = configureStore({
  reducer: rootPersistedReducer,
  enhancers: [reactotron?.createEnhancer()],
  middleware: [thunk],
});
export const persistor = persistStore(store);
