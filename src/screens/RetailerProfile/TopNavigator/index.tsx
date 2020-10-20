import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {colors} from '../../../utilities/colors';

import {RetailerInfo} from './RetailerInfo';
import {Orders} from './Orders';
import {Issues} from './Issues';

const Tab = createMaterialTopTabNavigator();

export const TopNavigator = () => {
  return (
    <Tab.Navigator
      lazy
      tabBarOptions={{
        labelStyle: {
          textTransform: 'none',
        },
        indicatorStyle: {backgroundColor: colors.blue},
        style: {
          elevation: 0,
          shadowOpacity: 0,
        },
      }}>
      <Tab.Screen name="Retailer Info" component={RetailerInfo} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Issues" component={Issues} />
    </Tab.Navigator>
  );
};
