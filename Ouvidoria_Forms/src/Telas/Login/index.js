import React, {useContext, useEffect, useState} from 'react';
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
import {AuthContext} from '../../contexts/AuthContext';
// import {logar} from '../../serviços/requisicoesFirebase';
// import {auth} from '../../config/firebase';

export default function Login() {
  const {login, isLogged} = useContext(AuthContext);
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [secure, setSecure] = useState(true);
  const [icon, setIcon] = useState('eye');
  const [statusError, setStatusError] = useState('');
  const [mensagemErrorEmail, setMensagemErrorEmail] = useState('');
  const [mensagemErrorSenha, setMensagemErrorSenha] = useState('');
  const [mensagemError, setMensagemError] = useState('');
  const [erroStyleContainerEmail, setErroStyleContainerEmail] = useState(
    styleLogin.inputContainer,
  );
  const [erroStyleContainerSenha, setErroStyleContainerSenha] = useState(
    styleLogin.inputContainer,
  );
  const [erroStyleContainer, setErroStyleContainer] = useState(
    styleLogin.mensagemErro,
  );

  useEffect(() => {
    if (isLogged) {
      navigation.replace('Upload');
    }
  }, [isLogged, navigation]);

  function handleLoginButton() {
    navigation.replace('Upload');
  }

  function handleBackButton() {
    navigation.goBack();
  }

  function clearHooks() {
    setMensagemErrorEmail('');
    setErroStyleContainerEmail(styleLogin.inputContainer);
    setMensagemErrorSenha('');
    setErroStyleContainerSenha(styleLogin.inputContainer);
  }

  async function realizarLogin() {
    if (email === '') {
      clearHooks();
      setMensagemErrorEmail('Campo e-mail vazio');
      setErroStyleContainerEmail(styleLogin.inputContainerErro);
      setStatusError('email');
    } else if (senha === '') {
      clearHooks();
      setMensagemErrorSenha('Campo senha vazio');
      setErroStyleContainerSenha(styleLogin.inputContainerErro);
      setStatusError('senha');
    } else {
      clearHooks();
      const resultado = await login(email, senha);
      if (resultado === 'sucesso') {
        handleLoginButton();
      } else {
        // setStatusError('firebase');
        setMensagemError(resultado);
        setErroStyleContainer(styleLogin.mensagemErroContainer);
      }
    }
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
            value={email}
            onChangeText={setEmail}
            placeholder="Digite seu e-mail"
            containerStyle={styleLogin.input}
            inputContainerStyle={erroStyleContainerEmail}
            leftIcon={{type: 'MaterialIcons', name: 'person'}}
            inputMode="email"
            errorMessage={mensagemErrorEmail}
            errorStyle={styleLogin.inputMensagemErro}
          />
          <Input
            value={senha}
            onChangeText={setSenha}
            placeholder="Digite sua senha"
            containerStyle={styleLogin.input}
            inputContainerStyle={erroStyleContainerSenha}
            leftIcon={{type: 'MaterialIcons', name: 'lock'}}
            rightIcon={{
              type: 'font-awesome',
              name: icon,
              onPress: visibilityButton,
            }}
            secureTextEntry={secure}
            errorMessage={mensagemErrorSenha}
            errorStyle={styleLogin.inputMensagemErro}
          />
          <View style={erroStyleContainer}>
            <Text style={styleLogin.mensagemErroTexto}>{mensagemError}</Text>
          </View>
        </View>

        <View style={styleLogin.container}>
          <ButtonComponent
            texto={'Entrar'}
            onPress={() => {
              realizarLogin();
              // console.log(statusError);
              // console.log(mensagemErrorEmail);
              // console.log(mensagemErrorSenha);
              // console.log(mensagemError);
            }}
            styleBotao={styleLogin.botao}
            styleContainer={styleLogin.botaoContainer}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
