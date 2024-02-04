import {StyleSheet} from 'react-native';

const styleServidor = StyleSheet.create({
  conteiner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5F6FF',
  },
  main: {
    flex: 1,
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
    fontSize: 20,
    lineHeight: 30,
    marginVertical: '2%',
    fontWeight: 'bold',
    color: '#30358C',
  },
  input: {
    width: '95%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  inputContainer: {
    borderWidth: 3,
    borderBottomWidth: 3,
    borderRadius: 10,
    borderColor: '#30358C',
  },
  inputContainerErro: {
    borderWidth: 3,
    borderBottomWidth: 3,
    borderRadius: 10,
    borderColor: '#F00',
  },
  inputMensagemErro: {
    color: '#f00',
  },
  botao: {
    marginVertical: '2%',
    borderRadius: 10,
  },
  botaoContainer: {
    width: '90%',
  },
});

export default styleServidor;
