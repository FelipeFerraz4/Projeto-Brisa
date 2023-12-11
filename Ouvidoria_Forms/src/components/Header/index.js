import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import styleHeader from './style';

export default function Header({
  leftArrow: arrow = true,
  voltar,
  login = false,
}) {
  const navigation = useNavigation();
  const [styleContainer, setStyleContainer] = useState(styleHeader.container);

  useEffect(() => {
    if (login === false && arrow === false) {
      setStyleContainer(styleHeader.containerTitulo);
    }
  }, [arrow, login]);

  function Login() {
    navigation.navigate('Login');
  }

  return (
    <View style={styleContainer}>
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
      {login && (
        <Icon
          testID="HeaderIconeLeftArrow"
          name="account-circle"
          size={30}
          color={'#000'}
          onPress={() => {
            Login();
          }}
        />
      )}
    </View>
  );
}
