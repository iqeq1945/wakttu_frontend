import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import userReducer from './user/userSlice';
import modalReducer from './modal/modalSlice';

export interface RootState {
  user: ReturnType<typeof userReducer>;
  modal: ReturnType<typeof modalReducer>;
}

const reducers = combineReducers({
  user: userReducer,
  modal: modalReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
  blacklist: ['modal'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
