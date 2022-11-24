import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import {StatusBar} from 'react-native';
import Register from '../screens/Auth/Register';
import Login from '../screens/Auth/Login';
import { useSelector } from 'react-redux';
import { getAuthState } from '../store/auth/selectors';

const Stack = createStackNavigator();

const navOptions = {
  header: () => null,
};

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={navOptions} />
  </Stack.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Register" component={Register} options={navOptions} />
    <Stack.Screen name="Login" component={Login} options={navOptions} />
  </Stack.Navigator>
);
const RootNavigation: React.FC = () => {
  const {signedIn} = useSelector(getAuthState);
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} />
      <>{
        signedIn ? <HomeStack /> : <AuthStack />
      }</>
    </NavigationContainer>
  );
};

export default RootNavigation;
