import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {CarregarRomaria, CarregarOuvidoria} from '../../serviços/CarregarForms';
import Logo from '../../assets/logo/logo.png';
import styleHome from './style';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';

function Home() {
  const navigation = useNavigation();
  const dadoOuvidoria = CarregarOuvidoria();
  const dadoRomaria = CarregarRomaria();

  function formularioPress(id) {
    console.log(id);
    navigation.navigate('FormularioHome', {idForm: id});
  }

  return (
    <View style={styleHome.app}>
      <ScrollView>
        <View style={styleHome.conteiner}>
          <Header leftArrow={false} />
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
                <View>
                  <Text style={styleHome.titulo}>{dadoOuvidoria.titulo}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styleHome.formulario}
                onPress={() => {
                  formularioPress(dadoRomaria.id);
                }}>
                <View>
                  <Text style={styleHome.titulo}>{dadoRomaria.titulo}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
