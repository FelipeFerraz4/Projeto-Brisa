import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
// import {CustomButton} from '../../components/CustomButton';
// import Icon from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';
import arrow from '../../assets/icon/arrow_black.png';

export default function Upload() {
  const navigation = useNavigation();

  function handleBackBnt() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.Header}>
          <TouchableOpacity
            onPress={() => {
              handleBackBnt();
            }}>
            <Image source={arrow} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.headerTexto}>Ouvidoria</Text>
        </View>
        <View style={styles.formsArea}>
          <Text style={styles.formsH1}>Formulários cadastrados</Text>
          {/* <Icon name="search" style={styles.iconContainer} size={45} /> */}
        </View>
      </ScrollView>
      <View style={styles.buttonArea}>
        {/* <CustomButton
          name="Enviar"
          onPress={() => {
            handleBackBnt();
          }}
        /> */}
      </View>
    </View>
  );
}
