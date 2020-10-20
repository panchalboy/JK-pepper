import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Retailers} from './Retailers';

import {colors} from '../../../../utilities/colors';
import {Dealers} from './Dealers';

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
      <Tab.Screen name="Retailers" component={Retailers} />
      <Tab.Screen name="Dealers" component={Dealers} />
      <Tab.Screen name="Leads" component={Retailers} />
      <Tab.Screen name="Influencer" component={Retailers} />
    </Tab.Navigator>
  );
};
