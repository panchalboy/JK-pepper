import React from 'react';
import {useTheme} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {MyDetails} from './MyDetails';
import {colors} from '../../../../utilities/colors';

const Tab = createMaterialTopTabNavigator();

export const TopNavigator = () => {
  const {colors: theme} = useTheme();
  return (
    <Tab.Navigator
      tabBarOptions={{
        indicatorStyle: {backgroundColor: colors.blue},
        style: {
          backgroundColor: theme.background,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}>
      <Tab.Screen name="My Details" component={MyDetails} />
      <Tab.Screen name="Target" component={MyDetails} />
      <Tab.Screen name="Summary" component={MyDetails} />
    </Tab.Navigator>
  );
};
