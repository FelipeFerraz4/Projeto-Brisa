import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {CarregarFormularios} from '../../serviços/CarregarForms';
import styleHome from './style';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import {SafeAreaView} from 'react-native-safe-area-context';

function Home() {
  const navigation = useNavigation();
  const formulario = CarregarFormularios();
  const [ListaFormulario, SetListaFormulario] = useState(formulario);
  const [Busca, SetBusca] = useState('');

  function formularioPress(id) {
    console.log(id);
    navigation.navigate('FormularioHome', {idForm: id});
  }

  useEffect(() => {
    if (Busca === '') {
      SetListaFormulario(formulario);
    } else {
      SetListaFormulario(
        formulario.filter(
          item => item.nome.toLowerCase().indexOf(Busca.toLowerCase()) > -1,
        ),
      );
    }
  }, [Busca, formulario]);

  return (
    <SafeAreaView style={styleHome.container}>
      <ScrollView>
        <View style={styleHome.header}>
          <Header leftArrow={false} />
          <Logo />
        </View>
        <View style={styleHome.main}>
          <Text style={styleHome.campoTitulo}>Formulários</Text>
          <View style={styleHome.pesquisa}>
            <TextInput
              style={styleHome.pesquisaCampo}
              placeholder="Pesquise um formulário"
              placeholderTextColor={'#333'}
              value={Busca}
              onChangeText={SetBusca}
            />
            <Icon name="search" size={30} color={'#333'} />
          </View>
          <View style={styleHome.formularioCampo}>
            {ListaFormulario.map(item => (
              <TouchableOpacity
                key={item.id}
                style={styleHome.formulario}
                onPress={() => formularioPress(item.id)}>
                <Text style={styleHome.formularioTexto}>{item.nome}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
