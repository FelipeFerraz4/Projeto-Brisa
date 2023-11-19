import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styleServidor from './style';
import Person from '../../assets/icon/person.png';
import Logo from '../../assets/logo/logo.png';
import arrow from '../../assets/icon/arrow_black.png';
import Login from '../../assets/icon/person_circle_black.png';
import {useNavigation, useRoute} from '@react-navigation/native';

function FormularioHome() {
  const navigation = useNavigation();
  const dados = useRoute();
  const [Servidor, SetServidor] = useState('');

  function NavigationForm() {
    const form = dados.params?.idForm;
    if (form === 2) {
      navigation.navigate('Romaria');
    } else {
      navigation.navigate('OuvidoriaIntinerante');
    }
  }

  function LoginPage() {
    navigation.navigate('Login');
  }
  function HomePage() {
    navigation.goBack();
  }

  return (
    <View style={styleServidor.conteiner}>
      <View style={styleServidor.campoHeader}>
        <TouchableOpacity
          onPress={() => {
            HomePage();
          }}>
          <Image source={arrow} style={styleServidor.icon} />
        </TouchableOpacity>
        <Text style={styleServidor.headerTexto}>Ouvidoria</Text>
        <TouchableOpacity
          onPress={() => {
            LoginPage();
          }}>
          <Image source={Login} style={styleServidor.icon} />
        </TouchableOpacity>
      </View>
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
