import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {CustomInput} from './src/components/CustomInput';
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

export default App;
