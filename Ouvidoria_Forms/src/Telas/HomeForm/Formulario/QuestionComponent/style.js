import {StyleSheet} from 'react-native';

const styleQuestion = StyleSheet.create({
  campo: {
    margin: '1%',
    padding: '0.5%',
  },
  titulo: {
    margin: '1%',
    fontSize: 20,
    color: '#000',
  },
  inputText: {
    margin: '1%',
    paddingHorizontal: '3%',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#30358C',
    backgroundColor: '#FFF',
  },
  checkBox: {
    backgroundColor: '#eee',
    borderWidth: 0.2,
    borderRadius: 10,
  },
  checkBoxContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 0,
  },
  checkBoxView: {
    marginBottom: '5%',
    flex: 1,
  },
});

export default styleQuestion;
