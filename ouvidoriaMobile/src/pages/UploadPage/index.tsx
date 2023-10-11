import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './styles';
import {CustomButton} from '../../components/CustomButton';
import Icon from 'react-native-vector-icons/EvilIcons';

export function Upload() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.formsArea}>
          <Text style={styles.formsH1}>Formulários cadastrados</Text>
          <Icon name="search" style={styles.iconContainer} size={45} />
        </View>
      </ScrollView>
      <View style={styles.buttonArea}>
        <CustomButton name="Enviar" onPress={() => {}} />
      </View>
    </View>
  );
}
