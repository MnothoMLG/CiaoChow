import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createFilter from 'redux-persist-transform-filter';
import {persistStore, persistReducer} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';
import {reducers} from './root.reducer';
import sagas from './root.saga';

const saveSubsetFilter = createFilter('authReducer', ['onBoarded']);
const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authReducer'],
  debug: true,
  transforms: [saveSubsetFilter]

};

const persistedReducers = persistReducer(config, reducers);
const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
  reducer: persistedReducers,
  devTools: true,
  middleware: [sagaMiddleware],
});

const persistor = persistStore(store);
sagaMiddleware.run(sagas);

export {persistor, store};
