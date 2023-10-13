import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {CustomInput} from '../../components/CustomInput';
import {CustomButton} from '../../components/CustomButton';
import {styles} from './styles';
import arrow from '../../assets/icon/arrow_black.png';
import {NavigationProp} from '@react-navigation/native';

type RootStackParamList = {
  Upload: undefined;
};

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

export function Login({navigation}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleUploadBnt() {
    navigation.navigate('Upload');
  }

  function handleBackBnt() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <TouchableOpacity
          onPress={() => {
            handleBackBnt();
          }}>
          <Image source={arrow} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.logo}
        source={require('../../assets/logo/logo.png')}
      />
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
      <CustomButton name="Entrar" onPress={handleUploadBnt} />
    </View>
  );
}
