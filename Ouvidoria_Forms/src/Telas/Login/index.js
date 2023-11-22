import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
// import {CustomInput} from '../../components/CustomInput';
// import {CustomButton} from '../../components/CustomButton';
import {styles} from './styles';
import arrow from '../../assets/icon/arrow_black.png';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import Logo from '../../components/Logo';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleBackButton() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Header voltar={handleBackButton} />
      <Logo />
      <Text style={styles.h1}>Entrar</Text>
      {/* <CustomInput
        icon="user"
        placeholderName="Email"
        value={email}
        setValue={setEmail}
      />
      <CustomInput
        icon="lock"
        placeholderName="Senha"
        value={password}
        setValue={setPassword}
        secureTextEntry
      /> */}
      <View style={styles.forgotArea}>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
      {/* <CustomButton name="Entrar" onPress={handleBackBnt} /> */}
    </View>
  );
}
