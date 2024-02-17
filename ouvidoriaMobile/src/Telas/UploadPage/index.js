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
import {useFocusEffect} from '@react-navigation/native';
import {SalvarFormularios, SalvarRespostas} from '../../serviços/AsyncStorage';
import {
  getFormularios,
  getFormulariosQuestao,
  salvarResposta,
  salvarRespostaCodigo,
} from '../../serviços/api/requisicoes';
import {FormsContext} from '../../contexts/FormsContext';

export default function Upload() {
  const {respostas, setRespostas, respostaNovas, setRespostaNovas} =
    useContext(GlobalContext);
  const {forms, setForms} = useContext(FormsContext);
  const [Respostas, SetResposta] = useState(respostas.respostas);
  const [Busca, SetBusca] = useState('');
  // console.log('respota: ' + Respostas);
  const [ListaRespostas, SetListaRespostas] = useState(Respostas);
  // console.log(ListaRespostas);
  // console.log('lista: ' + Array.from(ListaRespostas).length);

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

  async function GetFormularios() {
    const resultado = await getFormularios();
    setForms({
      data: await resultado.data,
    });
    SalvarFormularios(await forms);
    // console.log(forms.data);
  }

  async function GetFormulariosQuestao() {
    const resultado = await getFormulariosQuestao();
    console.log(await resultado);
  }

  async function SalvarResposta(
    idFormularioResposta,
    dataResposta,
    servidorResposta,
    resposta,
  ) {
    const resultado = await salvarResposta(
      idFormularioResposta,
      dataResposta,
      servidorResposta,
      resposta,
    );
    // const resultado = await salvarRespostaCodigo();
    console.log(resultado);
  }

  function EnviarResposta() {
    const respostaVazia = {
      respostas: [],
    };
    GetFormularios();
    // console.log(forms);
    // GetFormulariosQuestao();
    // console.log(respostas.respostas);
    ListaRespostas.map(item =>
      SalvarResposta(
        item.idFormulario,
        item.data,
        item.servidor,
        item.resposta,
      ),
    );
    // ListaRespostas.map(item => console.log(item));
    SetListaRespostas(respostaVazia.respostas);
    setRespostas(respostaVazia);
    SalvarRespostas(respostaVazia);

    // console.log('botao pressionado');
  }

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
          {Array.from(ListaRespostas).length > 0 &&
            ListaRespostas.sort(
              (respostaA, respostaB) => respostaB.id - respostaA.id,
            ).map(item => (
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
            EnviarResposta();
          }}
        />
      </View>
    </SafeAreaView>
  );
}
