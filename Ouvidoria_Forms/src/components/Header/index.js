import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import styleHeader from './style';

export default function Header({leftArrow: arrow = true, voltar}) {
  const navigation = useNavigation();

  function Login() {
    navigation.navigate('Login');
  }

  return (
    <View style={styleHeader.container}>
      {arrow && (
        <Icon
          testID="HeaderIconeLeftArrow"
          name="arrow-left"
          size={35}
          color={'#000'}
          onPress={voltar}
        />
      )}
      <Text testID="HeaderTitulo" style={styleHeader.texto}>
        Ouvidoria
      </Text>
      <Icon
        testID="HeaderIconeLeftArrow"
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
