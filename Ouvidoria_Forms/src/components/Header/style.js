import {StyleSheet, Dimensions} from 'react-native';

const largura = Dimensions.get('screen').width;

const styleHeader = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: largura,
    height: 70,
    paddingHorizontal: '3%',
    paddingVertical: '2%',
    marginVertical: '2%',
    // backgroundColor: '#F00',
  },
  texto: {
    fontSize: 25,
    lineHeight: 30,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default styleHeader;
