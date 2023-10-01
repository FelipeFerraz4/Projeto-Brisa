import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {InputBlock} from './src/components/InputBlock';
import {CustomButton} from './src/components/CustomButton';
import {styles} from './src/styles/styles';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./src/assets/logo/logo.png')}
      />
      <Text style={styles.h1}>Entrar</Text>
      <InputBlock
        icon="user"
        placeholderName="Email"
        value={email}
        setValue={setEmail}
      />
      <InputBlock
        icon="lock"
        placeholderName="Senha"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />
      <CustomButton name="Entrar" />
    </View>
  );
}

export default App;
