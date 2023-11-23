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
  campoBotao: {
    marginHorizontal: '2%',
    width: '90%',
  },
  titulo: {
    fontSize: 20,
    lineHeight: 30,
    marginVertical: '2%',
    fontWeight: 'bold',
    color: '#30358C',
  },
  textInput: {
    width: '90%',
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#30358C',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  InputCampo: {
    width: '90%',
  },
  botao: {
    marginVertical: '5%',
    borderRadius: 10,
  },
  botaoContainer: {
    width: '90%',
  },
});

export default styleServidor;
