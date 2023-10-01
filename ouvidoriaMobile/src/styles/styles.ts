import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    width: 180,
    height: 180,
  },
  loginArea: {
    width: '100%',
  },
  h1: {
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0068bd',
  },
  inputBlock: {
    paddingVertical: 15,
  },
  inputAreaLabel: {
    flexDirection: 'row',
    backgroundColor: '#EEE',
    width: '88%',
    paddingVertical: 4,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
  },
  inputLabel: {
    width: '91%',
  },
  icon: {
    top: 8,
    left: 2,
  },
  buttonArea: {
    marginVertical: 10,
    backgroundColor: '#0D61FF',
    width: '30%',
    borderRadius: 9,
    padding: 13,
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
