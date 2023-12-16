import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styleUpload from './styles';
import Header from '../../components/Header';
import ButtonComponent from '../../components/ButtonComponent';
import {CarregarRespostas} from '../../serviços/CarregarForms';

export default function Upload() {
  // const navigation = useNavigation();
  const Respostas = CarregarRespostas().reverse();
  const [Busca, SetBusca] = useState('');
  const [ListaRespostas, SetListaRespostas] = useState(Respostas);

  useEffect(() => {
    if (Busca === '') {
      SetListaRespostas(Respostas);
    } else {
      SetListaRespostas(
        Respostas.filter(
          item => item.Servidor.toLowerCase().indexOf(Busca.toLowerCase()) > -1,
        ).reverse(),
      );
    }
  }, [Busca, Respostas]);

  return (
    <SafeAreaView style={styleUpload.container}>
      <View style={styleUpload.header}>
        <Header leftArrow={false} logout={true} />
      </View>
      <View style={styleUpload.main}>
        <Text style={styleUpload.titulo}>Formulários cadastrados</Text>
        <View style={styleUpload.pesquisa}>
          <TextInput
            style={styleUpload.pesquisaCampo}
            placeholder="Pesquise um formulário"
            placeholderTextColor={'#333'}
            value={Busca}
            onChangeText={SetBusca}
          />
          <Icon name="search" size={30} color={'#333'} />
        </View>
        <ScrollView style={styleUpload.areaForms}>
          {ListaRespostas.map(item => (
            <TouchableOpacity key={item.id} style={styleUpload.resposta}>
              <Text style={styleUpload.respostaTexto}>
                {item.id} - {item.Servidor} - {item.Data}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styleUpload.footer}>
        <ButtonComponent
          texto={'Enviar'}
          styleBotao={styleUpload.botao}
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
}
