import React, {useContext, useEffect, useState} from 'react';
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
import {GlobalContext} from '../../contexts/GlobalContext';
import {FormsContext} from '../../contexts/FormsContext';

function Home() {
  const navigation = useNavigation();
  // const formulario = CarregarFormularios();
  const [Busca, SetBusca] = useState('');
  const {formularioAtual, setFormularioAtual, setFormulario, setServidor} =
    useContext(GlobalContext);
  const {forms, setForms} = useContext(FormsContext);
  console.log(forms.data);
  const [formularios, setFormularios] = useState(forms.data);
  const [ListaFormulario, SetListaFormulario] = useState(formularios);

  function formularioPress(id) {
    // console.log(id);
    setFormularioAtual(id - 1);
    // setFormulario(form);
    setServidor('');
    // console.log('Botao pressionado');
    navigation.navigate('Servidor');
  }

  useEffect(() => {
    if (Busca === '') {
      SetListaFormulario(formularios);
    } else {
      SetListaFormulario(
        formularios.filter(
          item => item.nome.toLowerCase().indexOf(Busca.toLowerCase()) > -1,
        ),
      );
    }
  }, [Busca, formularios]);

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
                <Text style={styleHome.formularioTexto}>
                  {item.nome.replace(/(^\w{1})|(\s+\w{1})/g, letra =>
                    letra.toUpperCase(),
                  )}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
