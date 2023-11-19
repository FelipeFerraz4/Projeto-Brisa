import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5F6FF',
  },
  Header: {
    width: '90%',
    height: '7%',
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
  logo: {
    width: 220,
    height: 220,
  },
  loginArea: {
    width: '100%',
  },
  h1: {
    width: '100%',
    paddingTop: 30,
    paddingLeft: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0068bd',
  },
  forgotArea: {
    width: '100%',
    alignItems: 'flex-end',
    marginEnd: 25,
    marginVertical: 5,
  },
  forgotText: {
    fontSize: 18,
    color: '#0068bd',
  },
});
