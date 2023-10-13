import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Login from '../../assets/icon/person_circle_black.png';
import {NavigationProp} from '@react-navigation/native';
import OuvidoriaIntinerante from '../../assets/imagem/Ouvidoria_Intinerante.png';
import PadreCicero from '../../assets/imagem/Padre_Cícero2.png';

type RootStackParamList = {
  FormularioHome: undefined;
  Login: undefined;
  Upload: undefined;
};

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

function Home({navigation}: Props) {
  function LoginPage() {
    navigation.navigate('Login');
  }

  function handlePress() {
    navigation.navigate('Upload');
  }

  return (
    <View style={styleHome.app}>
      <ScrollView>
        <View style={styleHome.conteiner}>
          <View style={styleHome.campoHeader}>
            <TouchableOpacity
              onPress={() => {
                LoginPage();
              }}>
              <Image source={Login} style={styleHome.icon} />
            </TouchableOpacity>
          </View>
          <View style={styleHome.main}>
            <View>
              <Text style={styleHome.campoTitulo}>Formulários</Text>
            </View>
            <View>
              <TouchableOpacity style={styleHome.formulario}>
                <View style={styleHome.campoImage}>
                  <Image
                    source={OuvidoriaIntinerante}
                    resizeMode="stretch"
                    style={styleHome.imagem}
                  />
                </View>
                <View>
                  <Text style={styleHome.titulo}>Titulo</Text>
                  <Text style={styleHome.subTitulo}>Subtitulo</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styleHome.formulario}>
                <View style={styleHome.campoImage}>
                  <Image
                    source={PadreCicero}
                    resizeMode="stretch"
                    style={styleHome.imagem}
                  />
                </View>
                <View>
                  <Text style={styleHome.titulo}>Titulo</Text>
                  <Text style={styleHome.subTitulo}>Subtitulo</Text>
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

const styleHome = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#F5F6FF',
  },
  conteiner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  campoHeader: {
    width: 350,
    height: 50,
    marginVertical: '4%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    width: 30,
  },
  campoBotao: {
    marginVertical: '3%',
    marginHorizontal: '5%',
  },
  botao: {
    width: 350,
    height: 50,
    backgroundColor: '#30358C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    padding: 12,
  },
  campoTitulo: {
    marginVertical: 2,
  },
  campoImage: {
    marginHorizontal: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  imagem: {
    width: 125,
    height: 125,
    backgroundColor: '#f00',
  },
  titulo: {
    margin: '3%',
    fontSize: 20,
    lineHeight: 30,
  },
  subTitulo: {
    margin: '3%',
    fontSize: 15,
    lineHeight: 20,
  },
  main: {
    padding: '4%',
    width: 350,
    marginVertical: 2,
    borderRadius: 30,
    borderWidth: 1,
  },
  formulario: {
    paddingVertical: '3%',
    paddingHorizontal: '3%',
    marginHorizontal: '2%',
    marginVertical: '2%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
