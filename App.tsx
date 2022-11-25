import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import LoadingOverlay from './src/components/loader';
import { store, persistor } from './src/store/root.store';
import RootNavigation from './src/navigation';
import { AppIntro } from './src/screens/OnBoarding';
import { getAuthState } from './src/store/auth/selectors';
import { clearToken } from './src/api/tokenData';
import { AlertPopUp } from './src/components/alertPopUp';
import { setAndShowFeedback } from './src/store/alert/actions';

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


  const dispatch = useDispatch()

  useEffect(()=> {
      clearToken();

      dispatch(
        setAndShowFeedback({
          title: "Test alert",
          visible: false,
          message: "One-two",
          right: {
            label: "Hey",
            onPress: () => {}
          },
          left: {
            label: "Hey",
            onPress: () => {}
          }

        })
      )
  },[])

  const authState = useSelector(getAuthState);

  return authState.onBoarded ?  <RootNavigation /> : <AppIntro /> 
}
