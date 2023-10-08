 /*
        <section >
            <div className="container border-top border-light" style={{ marginTop: "40px", borderColor:"#D9D9D9", backgroundColor:"#F8F8F8" }}>
                <div className="row box-content  ">
                    <div className="col-md-6" >
                        <img  style={{width:"30em", height:"22em", borderRadius:"20px"}} src={props.imgOuvidoria} alt="Capa formulário" />
                    </div>
                    <div className="full-section-text col-md-6 pt-5"  >
                        <div className="container pb-2" style={{ paddingRight: "50px" }}>
                            <h3 style={{color:"#4D4D4D", fontSize:"32px"}} >{props.title}</h3>
                        </div>
                        <div className="container" style={{ paddingRight: "30px", color:"#4D4D4D", fontSize:"24px" }}>
                            <p className="" >
                                {props.subtitle}
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
        */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const FormView = (props) => {
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
    flex: 1,
    padding: 10,
  },
  image: {
    width: 300,
    height: 220,
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
    paddingRight: 50,
  },
  title: {
    color: '#4D4D4D',
    fontSize: 32,
  },
  subtitle: {
    color: '#4D4D4D',
    fontSize: 24,
    paddingRight: 30,
  },
});

