import React, {useState} from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Input} from '@rneui/themed';

import styleServidor from './style';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import ButtonComponent from '../../components/ButtonComponent';
import {CarregarFormularios} from '../../serviços/CarregarForms';

function FormularioHome() {
  const navigation = useNavigation();
  const dado = useRoute().params?.idForm;
  const [servidor, setServidor] = useState('');
  const formulario = CarregarFormularios();
  const [mensagemErro, setMensagemErro] = useState('');
  const [erroStyleContainer, setErroStyleContainer] = useState(
    styleServidor.inputContainer,
  );

  function FormsButton() {
    const form = dado;
    if (servidor !== '') {
      if (form === 2) {
        navigation.navigate('RomariaForm');
      } else {
        navigation.navigate('OuvidoriaIntineranteForm');
      }
      setServidor('');
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
          <Header voltar={HandleBackButton} />
          <Logo />
        </View>
        <View style={styleServidor.main}>
          <Text style={styleServidor.titulo}>
            {formulario[dado - 1].nome.toUpperCase()}
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
            onPress={FormsButton}
            styleBotao={styleServidor.botao}
            styleContainer={styleServidor.botaoContainer}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default FormularioHome;
