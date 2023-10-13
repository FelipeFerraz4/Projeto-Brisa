import {StyleSheet} from 'react-native';

const styleHome = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#F5F6FF',
  },
  conteiner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  campoHeader: {
    width: 350,
    height: 50,
    marginTop: '3%',
    marginVertical: '7%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  headerTexto: {
    fontSize: 25,
    lineHeight: 30,
    color: '#000',
  },
  icon: {
    width: 30,
  },
  logo: {
    width: 220,
    height: 220,
  },
  campoBotao: {
    marginVertical: '3%',
    marginHorizontal: '5%',
  },
  botao: {
    width: 350,
    height: 50,
    backgroundColor: '#30358C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    padding: 12,
  },
  campoTitulo: {
    marginVertical: 2,
    padding: '3%',
    fontSize: 25,
    lineHeight: 30,
    color: '#000',
    fontWeight: 'bold',
  },
  campoImage: {
    marginHorizontal: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  imagem: {
    width: 125,
    height: 125,
    borderRadius: 20,
  },
  main: {
    padding: '4%',
    width: 350,
    marginVertical: 2,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#30358C',
  },
  formulario: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 0.2,
    padding: '1%',
    margin: '1%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  titulo: {
    width: '50%',
    margin: '4%',
    fontSize: 20,
    lineHeight: 30,
    color: '#000',
  },
});

export default styleHome;
