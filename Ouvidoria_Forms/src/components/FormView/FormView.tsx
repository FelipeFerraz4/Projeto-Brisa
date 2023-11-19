import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface FormViewProps {
  imgOuvidoria: ImageSourcePropType;
  title: string;
  subtitle: string;
}

export const FormView: React.FC<FormViewProps> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={props.imgOuvidoria}
            resizeMode="cover"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    borderColor: '#D9D9D9',
    backgroundColor: '#F8F8F8',
    borderTopWidth: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 20,
  },
  textContainer: {
   marginLeft:10,
  },
  title: {
    color: '#4D4D4D',
    fontSize: 22,
  },
  subtitle: {
    color: '#4D4D4D',
    fontSize: 16,
  },
});
