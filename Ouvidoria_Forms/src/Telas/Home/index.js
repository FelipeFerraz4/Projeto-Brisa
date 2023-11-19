import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';

import {CarregarFormularios} from '../../serviços/CarregarForms';
import styleHome from './style';
import Header from '../../components/Header';
import Logo from '../../components/Logo';

const TopoLista = () => {
  return (
    <>
      <Header leftArrow={false} />
      <Logo />
      <View>
        <Text style={styleHome.campoTitulo}>Formulários</Text>
      </View>
      <View style={styleHome.main}>
        {/* <TextInput />
        <Text>Lupa</Text>
        <Text>Ordem alfabetica</Text> */}
      </View>
    </>
  );
};

function Home() {
  const navigation = useNavigation();
  const formulario = CarregarFormularios().formularios;

  function formularioPress(id) {
    console.log(id);
    navigation.navigate('FormularioHome', {idForm: id});
  }

  return (
    <View style={styleHome.app}>
      <FlatList
        data={formulario}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => formularioPress(item.id)}>
            <Text>{item.nome}</Text>
          </TouchableOpacity>
        )}
        ListHeaderComponent={TopoLista}
      />
    </View>
  );
}

export default Home;
