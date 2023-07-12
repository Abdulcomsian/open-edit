import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const initialState = {
  folders: [],
};
const foldersSlice = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    setFolders: (state, action) => {
      state.folders = action.payload;
    },
    createFolder: (state, action) => {
      state.folders = [action.payload, ...state.folders];
    },
    deleteFolder: (state, action) => {
      state.folders = state.folders.filter(item => item.id !== action.payload);
    },
    addMediaToFolder: (state, action) => {
      const indexOfFolder = state.folders
        .map(item => item.id)
        .indexOf(action.payload.folderId);
      if (indexOfFolder > -1) {
        state.folders[indexOfFolder].media.unshift(action.payload.media);
      }
    },
    deleteMediaFromFolder: (state, action) => {
      const indexOfFolder = state.folders
        .map(item => item.id)
        .indexOf(action.payload.folderId);
      const indexOfMedia = state.folders[indexOfFolder]?.media
        ?.map(item => item.id)
        .indexOf(action.payload.mediaId);
      state.folders[indexOfFolder].media.splice(indexOfMedia, 1);
    },
  },
});

export const {
  setFolders,
  createFolder,
  deleteFolder,
  addMediaToFolder,
  deleteMediaFromFolder,
} = foldersSlice.actions;
const persistConfig = {
  key: 'folders',
  storage: AsyncStorage,
  blacklist: ['folders'],
};
const persistedFoldersReducer = persistReducer(
  persistConfig,
  foldersSlice.reducer,
);
export default persistedFoldersReducer;
