import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'; 
import contactsSlice from './reducer';
import authSlice from './auth/auth-slice'
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = {
  auth: persistReducer(authPersistConfig, authSlice),
  contacts: contactsSlice,
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
]

export const store = configureStore({
  reducer: rootReducer, 
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);