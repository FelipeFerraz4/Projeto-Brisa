import React, {useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import styleServidor from './style';
import Person from '../../assets/icon/person.png';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import ButtonComponent from '../../components/ButtonComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';

function FormularioHome() {
  const navigation = useNavigation();
  const dados = useRoute();
  const [Servidor, SetServidor] = useState('');

  function FormsButton() {
    const form = dados.params?.idForm;
    if (form === 2) {
      navigation.navigate('RomariaForm');
    } else {
      navigation.navigate('OuvidoriaIntineranteForm');
    }
  }

  function LoginPage() {
    navigation.navigate('Login');
  }
  function HandleBackButton() {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView
      style={styleServidor.conteiner}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={60}>
      <ScrollView>
        <View>
          <Header voltar={HandleBackButton} />
          <Logo />
        </View>
        <View style={styleServidor.main}>
          <Text style={styleServidor.titulo}>Nome do servidor</Text>
          <View style={styleServidor.textInput}>
            <Icon name="person" size={30} color={'#000'} />
            <TextInput
              value={Servidor}
              style={styleServidor.InputCampo}
              placeholder="Nome do servidor"
              onChangeText={nome => {
                SetServidor(nome);
              }}
            />
          </View>
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
