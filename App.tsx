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
import { useFonts } from 'expo-font';

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
  const authState = useSelector(getAuthState);
  const [fontsLoaded] = useFonts({
    'Inter': require('./src/assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('./src/assets/fonts/Inter-Bold.ttf'),
    'Inter-Thin': require('./src/assets/fonts/Inter-Light.ttf'),
    'Inter-Med': require('./src/assets/fonts/Inter-Medium.ttf'),
  });

  useEffect(()=> {
      clearToken();
  },[])

  if (!fontsLoaded) return null

  return authState.onBoarded ?  <RootNavigation /> : <AppIntro /> 
}
