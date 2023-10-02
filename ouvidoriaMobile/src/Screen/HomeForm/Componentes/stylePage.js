import {StyleSheet} from 'react-native';

const stylePage = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: '1%',
    marginVertical: '7%',
  },
  topo: {
    margin: '2%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titulo: {
    margin: '3%',
    borderRadius: 17,
    borderWidth: 0.5,
    borderColor: '#888',
    backgroundColor: '#FFF',
  },
  tituloNome: {
    margin: '2%',
    fontSize: 20,
  },
  tituloSubnome: {
    margin: '2%',
  },
  botao: {
    margin: '5%',
    backgroundColor: '#30358C',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#EFEFFF',
    fontSize: 22,
    lineHeight: 50,
    fontWeight: '500',
  },
});

export default stylePage;
