import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

type Props = {
  name: string;
};

export function CustomButton({name}: Props) {
  return (
    <View style={styles.buttonArea}>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}
