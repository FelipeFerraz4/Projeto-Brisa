import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';
import {FormView} from '../FormView/FormView';

interface ListItem {
  imgOuvidoria: number; // Suponho que imgOuvidoria seja um recurso de imagem
  title: string;
  subtitle: string;
}

const handlePress = () => {
  console.log('Botão pressionado');
};

export const AllForms: React.FC = () => {
  const lista: ListItem[] = [
    {
      imgOuvidoria: require('../AllForms/imgForm.jpeg'),
      title: 'Romaria',
      subtitle: 'Formulário Romaria',
    },
    {
      imgOuvidoria: require('../AllForms/imgForm.jpeg'),
      title: 'Ouvidoria',
      subtitle: 'Formulário da Ouvidoria',
    },
  ];

  return (
    <ScrollView style={{backgroundColor: '#F5F6FF'}}>
      <View />
      <View style={styles.box}>
        <View style={styles.spaceUp}>
          <Text style={styles.title}>Formulários </Text>
        </View>
        {lista.map((item, index) => (
          <FormView
            key={index}
            imgOuvidoria={item.imgOuvidoria}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.button}
          underlayColor="darkblue"
          onPress={handlePress}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box: {
    borderWidth: 2,
    borderColor: '#D9D9D9',
    borderRadius: 10,
    margin: 20,
    marginTop: 50,
    marginBottom: 50,
    padding: 10,
    backgroundColor: '#F8F8F8',
  },
  spaceUp: {
    paddingTop: 20,
    paddingLeft: 10,
  },
  title: {
    color: '#4D4D4D',
    fontSize: 24,
  },

  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#30358C',
    paddingVertical: 14,
    paddingHorizontal: 150,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
