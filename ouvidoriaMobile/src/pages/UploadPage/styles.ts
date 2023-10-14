import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: '#F5F6FF',
  },
  Header: {
    height: '7%',
    marginVertical: '2%',
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
  formsArea: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  formsH1: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 400,
    fontSize: 25,
    color: '#535151',
    fontWeight: 'bold',
  },
  iconContainer: {
    position: 'absolute',
    top: 14,
    right: 10,
  },
  buttonArea: {
    paddingBottom: 50,
    alignItems: 'center',
  },
});
