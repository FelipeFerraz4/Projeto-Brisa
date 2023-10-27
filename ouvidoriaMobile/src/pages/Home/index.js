import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {CarregarRomaria, CarregarOuvidoria} from '../../serviços/CarregarForms';
import Login from '../../assets/icon/person_circle_black.png';
import Logo from '../../assets/logo/logo.png';
import OuvidoriaIntinerante from '../../assets/imagem/Ouvidoria_Intinerante.png';
import PadreCicero from '../../assets/imagem/Padre_Cícero2.png';
import styleHome from './style';
import {useNavigation} from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();
  const dadoOuvidoria = CarregarOuvidoria();
  const dadoRomaria = CarregarRomaria();

  function LoginPage() {
    navigation.navigate('Login');
  }

  function handlePress() {
    navigation.navigate('Upload');
  }
  function formularioPress(id) {
    console.log(id);
    navigation.navigate('FormularioHome', {idForm: id});
  }

  return (
    <View style={styleHome.app}>
      <ScrollView>
        <View style={styleHome.conteiner}>
          <View style={styleHome.campoHeader}>
            <Text style={styleHome.headerTexto}>Ouvidoria</Text>
            <TouchableOpacity
              onPress={() => {
                LoginPage();
              }}>
              <Image source={Login} style={styleHome.icon} />
            </TouchableOpacity>
          </View>
          <Image source={Logo} style={styleHome.logo} />
          <View style={styleHome.main}>
            <View>
              <Text style={styleHome.campoTitulo}>Formulários</Text>
            </View>
            <View>
              <TouchableOpacity
                style={styleHome.formulario}
                onPress={() => {
                  formularioPress(dadoOuvidoria.id);
                }}>
                <View style={styleHome.campoImage}>
                  <Image
                    source={OuvidoriaIntinerante}
                    resizeMode="cover"
                    style={styleHome.imagem}
                  />
                </View>
                <View>
                  <Text style={styleHome.titulo}>{dadoOuvidoria.titulo}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styleHome.formulario}
                onPress={() => {
                  formularioPress(dadoRomaria.id);
                }}>
                <View style={styleHome.campoImage}>
                  <Image
                    source={PadreCicero}
                    resizeMode="stretch"
                    style={styleHome.imagem}
                  />
                </View>
                <View>
                  <Text style={styleHome.titulo}>{dadoRomaria.titulo}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styleHome.campoBotao}>
            <TouchableOpacity
              style={styleHome.botao}
              onPress={() => {
                handlePress();
              }}>
              <Text style={styleHome.botaoTexto}>Enviar Formulários</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
