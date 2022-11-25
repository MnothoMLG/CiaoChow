import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider, useSelector} from 'react-redux';
import LoadingOverlay from './src/components/loader';
import { store, persistor } from './src/store/root.store';
import RootNavigation from './src/navigation';
import { AppIntro } from './src/screens/OnBoarding';
import { getAuthState } from './src/store/auth/selectors';
import { clearToken } from './src/api/tokenData';
import { AlertPopUp } from './src/components/alertPopUp';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<ActivityIndicator />}>
        <LoadingOverlay />
        <EntryPoint />
        <AlertPopUp />
      </PersistGate>
    </Provider>
  );
}

const EntryPoint = () => {

  useEffect(()=> {
      clearToken();
  },[])

  const authState = useSelector(getAuthState);

  return authState.onBoarded ?  <RootNavigation /> : <AppIntro /> 
}
