import {StyleSheet} from 'react-native';

const styleServidor = StyleSheet.create({
  conteiner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5F6FF',
  },
  campoHeader: {
    width: '90%',
    height: '7%',
    marginHorizontal: '1%',
    marginVertical: '1%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTexto: {
    fontSize: 25,
    lineHeight: 30,
    color: '#000',
  },
  icon: {
    width: 30,
  },
  campoLogo: {
    marginHorizontal: '2%',
  },
  image: {
    width: 220,
    height: 220,
  },
  campoForm: {
    marginVertical: '15%',
    width: '90%',
    marginHorizontal: '2%',
  },
  campoBotao: {
    marginHorizontal: '2%',
    width: '90%',
  },
  titulo: {
    fontSize: 20,
    lineHeight: 30,
    marginVertical: '2%',
    fontWeight: 'bold',
  },
  textInput: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#0068bd',
    flexDirection: 'row',
  },
  textInputImage: {
    margin: 1,
    width: '8%',
  },
  botao: {
    backgroundColor: '#0068bd',
    height: '25%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#FFF',
    marginHorizontal: 2,
    marginVertical: 2,
    fontSize: 20,
    lineHeight: 30,
  },
});

export default styleServidor;
