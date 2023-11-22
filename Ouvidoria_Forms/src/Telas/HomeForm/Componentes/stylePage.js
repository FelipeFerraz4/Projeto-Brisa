import {StyleSheet} from 'react-native';

const stylePage = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5F6FF',
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
  titulo: {
    margin: '3%',
    padding: '2%',
    borderRadius: 17,
    borderWidth: 2,
    borderColor: '#0068bd',
    backgroundColor: '#FFF',
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
  botao: {
    margin: '5%',
    backgroundColor: '#0068bd',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 22,
    lineHeight: 50,
    fontWeight: '500',
  },
});

export default stylePage;
