import {StyleSheet, Dimensions} from 'react-native';

const largura = Dimensions.get('screen').width;

const styleHome = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignContent: 'center',
    backgroundColor: '#F5F6FF',
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: '#f00',
  },
  main: {
    flex: 2,
    flexDirection: 'column',
    // backgroundColor: '#0F0',
  },
  campoTitulo: {
    fontSize: 25,
    lineHeight: 30,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '5%',
    // marginRight: 50,
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
  },
  pesquisaCampo: {
    width: largura * (8 / 10),
    paddingHorizontal: '5%',
  },
  formularioCampo: {
    marginVertical: '3%',
    flex: 1,
  },
  formulario: {
    height: 70,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    margin: '1%',
    marginHorizontal: '5%',
    borderWidth: 0.2,
  },
  formularioTexto: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
    padding: '3%',
    paddingLeft: '4%',
  },
});

export default styleHome;
