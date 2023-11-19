import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import styleHeader from './style';

export default function Header({leftArrow: arrow}) {
  const navigation = useNavigation();

  function Voltar() {
    navigation.goBack;
  }

  function Login() {
    navigation.navigate('Login');
  }

  return (
    <View style={styleHeader.container}>
      {arrow && (
        <Icon
          name="arrow-left"
          size={30}
          color={'#000'}
          onPress={() => {
            Voltar();
          }}
        />
      )}
      <Text style={styleHeader.texto}>Ouvidoria</Text>
      <Icon
        name="account-circle"
        size={30}
        color={'#000'}
        onPress={() => {
          Login();
        }}
      />
    </View>
  );
}