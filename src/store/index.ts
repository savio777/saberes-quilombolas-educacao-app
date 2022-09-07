import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import Auth from './modules/Auth';
import Files from './modules/Files';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({auth: Auth, files: Files});

export type RootState = ReturnType<typeof store.getState>;

const persistedReducer = persistReducer(persistConfig as any, rootReducer);

const middleware = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  const reduxFlipper = createDebugger();

  middleware.push(reduxFlipper);
}

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  // actions async
  /*middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),*/
});

export default store;

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();