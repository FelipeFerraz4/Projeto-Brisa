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
        <View style={styleHome.campo}>
          <Text>Hello</Text>
        </View>
        <View style={styleHome.campo}>
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
  );
}

export default Home;

const styleHome = StyleSheet.create({
  conteiner: {
    flex: 1,
    marginVertical: '2%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  campoHeader: {
    width: 350,
    height: 50,
    marginVertical: '4%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  campo: {
    marginVertical: '4%',
  },
  icon: {
    width: 30,
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
});
