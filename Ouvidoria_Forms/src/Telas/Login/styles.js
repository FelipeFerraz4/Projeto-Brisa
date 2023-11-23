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
    marginVertical: '1%',
    width: '95%',
  },
  inputContainer: {
    borderWidth: 1,
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
});

export default styleLogin;
