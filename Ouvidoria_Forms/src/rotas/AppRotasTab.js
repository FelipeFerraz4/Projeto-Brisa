import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AppRotasStackHome from './AppRotasStackHome';
import AppRotasStackUpload from './AppRotasStackUpload';

const Tab = createBottomTabNavigator();

function AppRotasTab() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="AppRotasStackHome" component={AppRotasStackHome} />
      <Tab.Screen name="AppRotasStackUpload" component={AppRotasStackUpload} />
    </Tab.Navigator>
  );
}

export default AppRotasTab;
