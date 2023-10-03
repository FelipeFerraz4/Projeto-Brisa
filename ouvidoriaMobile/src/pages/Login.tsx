import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {CustomInput} from '../components/CustomInput';
import {CustomButton} from '../components/CustomButton';
import {styles} from '../styles/styles';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo/logo.png')} />
      <Text style={styles.h1}>Entrar</Text>
      <CustomInput
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
      />
      <View style={styles.forgotArea}>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
      <CustomButton name="Entrar" />
    </View>
  );
}