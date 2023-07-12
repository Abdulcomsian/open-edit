import {combineReducers, configureStore} from '@reduxjs/toolkit';
import persistedAuthReducer from './authSlice';
import reactotron from '../configs/ReactotronConfig';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistedMediaReducer from './mediaSlice';
import persistedJobsPostedReducer from './jobsPostedSlice';
import persistedFoldersReducer from './foldersSlice';
import persistedUser from './userSlice';

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  media: persistedMediaReducer,
  jobsPosted: persistedJobsPostedReducer,
  folders: persistedFoldersReducer,
  user: persistedUser,
});

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['media', 'folders'],
};

const rootPersistedReducer = persistReducer(rootPersistConfig, rootReducer);
export const store = configureStore({
  reducer: rootPersistedReducer,
  enhancers: [reactotron?.createEnhancer()],
  middleware: [thunk],
});
export const persistor = persistStore(store);
