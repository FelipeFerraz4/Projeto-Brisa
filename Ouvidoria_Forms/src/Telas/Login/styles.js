import {StyleSheet} from 'react-native';

const styleLogin = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F6FF',
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
    borderColor: '#30358C',
    borderRadius: 10,
  },
  titulo: {
    marginBottom: '3%',
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
    color: '#30358C',
  },
  botao: {
    marginVertical: '2%',
    borderRadius: 10,
  },
  botaoContainer: {
    width: '90%',
  },
  inputMensagemErro: {
    color: '#f00',
  },
  inputContainerErro: {
    borderWidth: 3,
    borderBottomWidth: 3,
    borderRadius: 10,
    borderColor: '#F00',
  },
});

export default styleLogin;
