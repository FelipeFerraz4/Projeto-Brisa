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
import {FormsContext} from '../../contexts/FormsContext';

function FormularioHome() {
  const navigation = useNavigation();
  // const [servidor, setServidor] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const [erroStyleContainer, setErroStyleContainer] = useState(
    styleServidor.inputContainer,
  );
  const {formularioAtual, servidor, setServidor} = useContext(GlobalContext);
  const {forms} = useContext(FormsContext);
  const [formulario, setFormulario] = useState(forms.data[formularioAtual]);

  function FormsButton() {
    if (servidor !== '' && servidor.trim().replace(/\s/g, '').length > 2) {
      // navigation.navigate('Formulario', {formulario: formulario});
      navigation.navigate('Formulario');
      // setServidor('');
      setMensagemErro('');
      setErroStyleContainer(styleServidor.inputContainer);
    } else {
      setMensagemErro('Número de caracteres insuficiente');
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
            {formulario.nome.toUpperCase()}
          </Text>
          <Text style={styleServidor.titulo}>Nome do servidor</Text>
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
