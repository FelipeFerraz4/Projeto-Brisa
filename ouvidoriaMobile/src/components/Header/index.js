import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import styleHeader from './style';
import {AuthContext} from '../../contexts/AuthContext';
// import {auth} from '../../config/firebase';

export default function Header({
  arrow = false,
  voltar,
  login = false,
  logout = false,
}) {
  const navigation = useNavigation();
  const [styleContainer, setStyleContainer] = useState(styleHeader.container);
  const {SalvarLogoff} = useContext(AuthContext);

  useEffect(() => {
    if (login === false && arrow === false && logout === false) {
      setStyleContainer(styleHeader.containerTitulo);
    }
  }, [arrow, login, logout]);

  function Login() {
    navigation.navigate('Login');
  }

  function offLogin() {
    SalvarLogoff();
    navigation.replace('Login');
  }

  return (
    <View style={styleContainer}>
      {arrow && (
        <Icon
          name="arrow-left"
          size={35}
          color={'#000'}
          onPress={voltar}
        />
      )}
      <Text style={styleHeader.texto}>
        Ouvidoria
      </Text>
      {login && (
        <Icon
          name="account-circle"
          size={30}
          color={'#000'}
          onPress={() => {
            Login();
          }}
        />
      )}
      {logout && (
        <Icon
          name="logout"
          size={30}
          color={'#000'}
          onPress={() => {
            offLogin();
          }}
        />
      )}
    </View>
  );
}
