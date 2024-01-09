import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styleUpload from './styles';
import Header from '../../components/Header';
import ButtonComponent from '../../components/ButtonComponent';
import {GlobalContext} from '../../contexts/GlobalContext';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

export default function Upload() {
  const navigation = useNavigation();
  const {
    formularioAtual,
    respostas,
    setRespostas,
    respostaNovas,
    setRespostaNovas,
  } = useContext(GlobalContext);
  const [Respostas, SetResposta] = useState(respostas);
  const [Busca, SetBusca] = useState('');
  const [ListaRespostas, SetListaRespostas] = useState(Respostas);

  useEffect(() => {
    if (Busca === '') {
      SetListaRespostas(Respostas);
    } else {
      SetListaRespostas(
        Respostas.filter(
          item => item.servidor.toLowerCase().indexOf(Busca.toLowerCase()) > -1,
        ),
      );
    }
  }, [Busca, Respostas]);

  useFocusEffect(() => {
    if (respostaNovas === true) {
      setRespostaNovas(false);
      // navigation.replace('Upload');
    }
  });

  return (
    <SafeAreaView style={styleUpload.container}>
      <View style={styleUpload.header}>
        <Header leftArrow={false} logout={true} />
      </View>
      <View style={styleUpload.main}>
        <Text style={styleUpload.titulo}>
          Formulários cadastrados{formularioAtual}
        </Text>
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
                {item.id} - {item.servidor} - {item.data}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styleUpload.footer}>
        <ButtonComponent
          texto={'Enviar'}
          styleBotao={styleUpload.botao}
          onPress={() => {
            Alert.alert('Dados enviados com sucesso');
            setRespostas([]);
          }}
        />
      </View>
    </SafeAreaView>
  );
}
