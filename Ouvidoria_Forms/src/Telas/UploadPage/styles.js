import {StyleSheet, Dimensions} from 'react-native';

const largura = Dimensions.get('screen').width;

const styleUpload = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FF',
  },
  header: {
    flex: 1,
  },
  main: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 25,
    lineHeight: 30,
    fontWeight: 'bold',
    color: '#30358C',
    marginVertical: '3%',
  },
  pesquisa: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#30358C',
    marginHorizontal: '5%',
    paddingHorizontal: '2%',
    marginTop: '2%',
  },
  pesquisaCampo: {
    width: largura * (8 / 10),
    paddingHorizontal: '5%',
  },
  areaForms: {
    flex: 1,
    width: '90%',
    marginVertical: '4%',
    borderWidth: 0.5,
    borderRadius: 10,
  },
  resposta: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: '2%',
    paddingVertical: '5%',
    marginBottom: '2%',
  },
  respostaTexto: {
    color: '#000',
    fontSize: 20,
    lineHeight: 25,
  },
  botao: {
    marginVertical: '2%',
    borderRadius: 10,
  },
});

export default styleUpload;
