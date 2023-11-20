import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import AppRotasStackHome from './AppRotasStackHome';
import AppRotasStackUpload from './AppRotasStackUpload';

const Tab = createBottomTabNavigator();

const Icone = (iconName, size, color) => {
  return <Icon name={iconName} size={size} color={color} />;
};

function AppRotasTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,

        tabBarIcon: ({focused, color, size}) => {
          let iconName = 'list-box';

          if (route.name === 'Formulário') {
            iconName = focused ? 'view-list' : 'view-list-outline';
          } else if (route.name === 'Enviar') {
            iconName = focused ? 'cloud-upload' : 'cloud-upload-outline';
          }
          return Icone(iconName, size, color);
        },
        tabBarActiveTintColor: '#30358C',
        tabBarInactiveTintColor: '#C7C7C7',
        tabBarLabelStyle: {
          fontSize: 20,
        },
      })}>
      <Tab.Screen name="Formulário" component={AppRotasStackHome} />
      <Tab.Screen name="Enviar" component={AppRotasStackUpload} />
    </Tab.Navigator>
  );
}

export default AppRotasTab;
