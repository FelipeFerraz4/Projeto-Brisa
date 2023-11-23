import React, {useState} from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Input} from '@rneui/themed';

import styleLogin from './styles';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import ButtonComponent from '../../components/ButtonComponent';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [icon, setIcon] = useState('eye');

  function handleBackButton() {
    navigation.goBack();
  }

  function visibilityButton() {
    if (secure === true) {
      setSecure(false);
      setIcon('eye-slash');
    } else {
      setSecure(true);
      setIcon('eye');
    }
  }

  return (
    <KeyboardAvoidingView
      style={styleLogin.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={70}>
      <ScrollView>
        <View>
          <Header voltar={handleBackButton} />
          <Logo />
        </View>
        <View style={styleLogin.container}>
          <Text style={styleLogin.titulo}>Faça seu login</Text>
          <Input
            containerStyle={styleLogin.input}
            inputContainerStyle={styleLogin.inputContainer}
            value={email}
            onChangeText={setEmail}
            placeholder="Digite seu e-mail"
            leftIcon={{type: 'MaterialIcons', name: 'person'}}
            inputMode="email"
          />
          <Input
            containerStyle={styleLogin.input}
            inputContainerStyle={styleLogin.inputContainer}
            value={password}
            onChangeText={setPassword}
            placeholder="Digite sua senha"
            leftIcon={{type: 'MaterialIcons', name: 'lock'}}
            rightIcon={{
              type: 'font-awesome',
              name: icon,
              onPress: visibilityButton,
            }}
            secureTextEntry={secure}
          />
        </View>
        <View style={styleLogin.container}>
          <ButtonComponent
            texto={'Entrar'}
            onPress={handleBackButton}
            styleBotao={styleLogin.botao}
            styleContainer={styleLogin.botaoContainer}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
