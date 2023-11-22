import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styleServidor from './style';
import Person from '../../assets/icon/person.png';
import Logo from '../../assets/logo/logo.png';
import arrow from '../../assets/icon/arrow_black.png';
import Login from '../../assets/icon/person_circle_black.png';
import {useNavigation, useRoute} from '@react-navigation/native';
import Header from '../../components/Header';

function FormularioHome() {
  const navigation = useNavigation();
  const dados = useRoute();
  const [Servidor, SetServidor] = useState('');

  function NavigationForm() {
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
  function handleBackButton() {
    navigation.goBack();
  }

  return (
    <View style={styleServidor.conteiner}>
      <Header voltar={handleBackButton} />
      <View style={styleServidor.campoLogo}>
        <Image source={Logo} style={styleServidor.image} />
      </View>
      <View style={styleServidor.campoForm}>
        <Text style={styleServidor.titulo}>Nome do servidor</Text>
        <View style={styleServidor.textInput}>
          <Image
            source={Person}
            style={styleServidor.textInputImage}
            resizeMode="contain"
          />
          <TextInput
            value={Servidor}
            placeholder="Nome do servidor"
            onChangeText={nome => {
              SetServidor(nome);
            }}
          />
        </View>
      </View>
      <View style={styleServidor.campoBotao}>
        <TouchableOpacity
          style={styleServidor.botao}
          onPress={() => {
            NavigationForm();
          }}>
          <Text style={styleServidor.botaoTexto}>Iniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default FormularioHome;
