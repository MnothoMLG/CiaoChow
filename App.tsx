import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider, useSelector} from 'react-redux';
import LoadingOverlay from './src/components/loader';
import { store, persistor } from './src/store/root.store';
import RootNavigation from './src/navigation';
import { AppIntro } from './src/screens/OnBoarding';
import { getAuthState } from './src/store/auth/selectors';
import { clearToken } from './src/api/tokenData';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<ActivityIndicator />}>
        <LoadingOverlay />
        <EntryPoint />
      </PersistGate>
    </Provider>
  );
}

const EntryPoint = () => {

  useEffect(()=> {
      clearToken();
  },[])

  const authState = useSelector(getAuthState);

  return authState.onBoarded || true?  <RootNavigation /> : <AppIntro /> 
}
