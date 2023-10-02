import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {styles} from './styles';

type Props = {
  value: string;
  setValue: Function;
  placeholderName: string;
  icon?: string;
  secureTextEntry?: boolean;
};

export function CustomInput({
  value,
  setValue,
  placeholderName,
  icon,
  secureTextEntry,
}: Props) {
  return (
    <View style={styles.inputBlock}>
      <View style={styles.inputAreaLabel}>
        <Icon name={icon} style={styles.icon} size={30} />
        <TextInput
          style={styles.inputLabel}
          placeholder={placeholderName}
          placeholderTextColor="#999"
          value={value}
          onChangeText={t => setValue(t)}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
}
