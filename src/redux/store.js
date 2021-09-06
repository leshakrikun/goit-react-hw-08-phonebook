import { configureStore } from '@reduxjs/toolkit';
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
  contacts: contactsSlice,
  auth: persistReducer(authPersistConfig, authSlice),
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});




/* import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';*/


/* import { authReducer } from './auth'; */

/* const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
]; */


/* export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
    todos: todosReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
}); */

export const persistor = persistStore(store);