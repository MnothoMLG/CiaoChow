import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import LoadingOverlay from './src/components/loader';
import { store, persistor } from './src/store/root.store';
import RootNavigation from './src/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<ActivityIndicator />}>
        <LoadingOverlay />
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});