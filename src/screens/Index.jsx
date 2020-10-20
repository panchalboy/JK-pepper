import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {UserContext} from '../contexts/UserContext';

import {Login} from './Login';
import {Main} from './Main';
import {AddNewRetailer} from './AddNewRetailer';
import {RetailerProfile} from './RetailerProfile';

const Stack = createStackNavigator();

export const Index = () => {
  const {
    authPayload: {isAuthenticated},
  } = useContext(UserContext);
  if (isAuthenticated) {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="AddNewRetailer" component={AddNewRetailer} />
        <Stack.Screen name="RetailerProfile" component={RetailerProfile} />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
