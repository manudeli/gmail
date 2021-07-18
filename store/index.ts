import { userReducer, inboxReducer, uiReducer, dbReducer } from './slices';
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const rootReducer = combineReducers({
  user: userReducer,
  inbox: inboxReducer,
  ui: uiReducer,
  db: dbReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// How to install Redux-persist on Redux-toolkit
// https://edvins.io/how-to-use-redux-persist-with-redux-toolkit

export const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  middleware: customizedMiddleware,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
