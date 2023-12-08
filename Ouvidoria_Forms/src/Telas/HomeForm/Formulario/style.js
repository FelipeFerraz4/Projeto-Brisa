import {StyleSheet, Dimensions} from 'react-native';

const altura = Dimensions.get('screen').height;

const stylePage = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#F5F6FF',
    // backgroundColor: '#f00',
  },
  scroll: {
    flex: 1,
    // backgroundColor: '#f00',
  },
  page: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#55f',
  },
  messageCompleted: {
    display: 'none',
    flex: 1,
  },
  messageCompletedVisible: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#55f',
  },
  topo: {
    margin: '2%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTexto: {
    fontSize: 25,
    lineHeight: 30,
    color: '#000',
  },
  main: {
    flex: 1,
    borderRadius: 17,
    borderWidth: 2,
    borderColor: '#30358C',
    backgroundColor: '#FFF',
    marginVertical: '2%',
    marginHorizontal: '1%',
    height: altura * 0.65,
  },
  tituloNome: {
    margin: '2%',
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 'bold',
  },
  tituloSubnome: {
    margin: '2%',
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 'bold',
  },
  footer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1%',
  },
  botao: {
    marginVertical: '5%',
    borderRadius: 10,
  },
  botaoContainer: {
    width: '100%',
  },
  campoBotao: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});

export default stylePage;
