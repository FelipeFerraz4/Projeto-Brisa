import React, {useContext, useState} from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Input} from '@rneui/themed';

import styleServidor from './style';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import ButtonComponent from '../../components/ButtonComponent';
import {GlobalContext} from '../../contexts/GlobalContext';

function FormularioHome() {
  const navigation = useNavigation();
  // const [servidor, setServidor] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const [erroStyleContainer, setErroStyleContainer] = useState(
    styleServidor.inputContainer,
  );
  const {formularioAtual, formulario, servidor, setServidor} =
    useContext(GlobalContext);

  function FormsButton() {
    if (servidor !== '') {
      navigation.navigate('Formulario', {formulario: formulario});
      // setServidor('');
      setMensagemErro('');
      setErroStyleContainer(styleServidor.inputContainer);
    } else {
      setMensagemErro('Digite o nome do servidor');
      setErroStyleContainer(styleServidor.inputContainerErro);
    }
  }

  function HandleBackButton() {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView
      style={styleServidor.conteiner}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={70}>
      <ScrollView>
        <View>
          <Header voltar={HandleBackButton} arrow={true} />
          <Logo />
        </View>
        <View style={styleServidor.main}>
          <Text style={styleServidor.titulo}>
            {formulario.titulo.toUpperCase()}
          </Text>
          <Text style={styleServidor.titulo}>
            Nome do servidor{formularioAtual}
          </Text>
          <Input
            value={servidor}
            onChangeText={setServidor}
            placeholder="Nome do servidor"
            leftIcon={{type: 'MaterialIcons', name: 'person', size: 30}}
            containerStyle={styleServidor.input}
            inputContainerStyle={erroStyleContainer}
            errorMessage={mensagemErro}
            errorStyle={styleServidor.inputMensagemErro}
          />
        </View>
        <View style={styleServidor.footer}>
          <ButtonComponent
            texto={'Iniciar'}
            onPress={() => FormsButton()}
            styleBotao={styleServidor.botao}
            styleContainer={styleServidor.botaoContainer}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default FormularioHome;
