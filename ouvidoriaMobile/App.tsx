import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './src/styles/styles';
import Icon from 'react-native-vector-icons/EvilIcons';

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
      <View style={styles.inputBlock}>
        <View style={styles.inputAreaLabel}>
          <Icon name="user" style={styles.icon} size={30} />
          <TextInput
            style={styles.inputLabel}
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={t => setEmail(t)}
          />
        </View>
      </View>
      <View style={styles.inputAreaLabel}>
        <Icon name="lock" style={styles.icon} size={30} />
        <TextInput
          style={styles.inputLabel}
          placeholder="Senha"
          placeholderTextColor="#999"
          value={password}
          onChangeText={t => setPassword(t)}
        />
      </View>
      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;
