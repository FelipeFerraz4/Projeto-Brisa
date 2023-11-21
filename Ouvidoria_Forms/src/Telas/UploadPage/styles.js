import {StyleSheet, Dimensions} from 'react-native';

const altura = Dimensions.get('screen').height;

const styleUpload = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FF',
    // backgroundColor: '#f00',
    // height: altura,
  },
  header: {
    flex: 1,
    backgroundColor: '#00f',
  },
  main: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f0',
  },
  footer: {
    flex: 1,
    backgroundColor: '#f0f',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 25,
    lineHeight: 30,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: '3%',
  },
  areaForms: {
    flex: 1,
    width: '90%',
    backgroundColor: '#fff',
    marginVertical: '4%',
    borderWidth: 0.2,
  },
  botao: {
    marginVertical: '5%',
  },
});

export default styleUpload;
