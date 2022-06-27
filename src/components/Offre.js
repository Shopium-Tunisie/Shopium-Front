/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {height,width}from '../utils/Dimension';
import {Button} from './Button';
import { Text } from './Text';
const BUTTON_HEIGHT = height * 0.04;  
const Offre = ({setPromoMessage}) => {
  const navigation = useNavigation();
  const TEXT = 'Découvrir Nos Offres.';
  return (
        <View style={styles.root}>
        <View style={styles.txt} >
          <Text
                    text={TEXT}
                    style={{
                        fontSize: 17,
                        textAlign: 'justify',
                    }}
                    colorText="white"
                    weight="normal"
                />
        </View>
        <View style={styles.button}>
       <Button
          size="medium"
          color="white"
          style={{height: BUTTON_HEIGHT}}
          text="Decouvrir l'ordre"
          theTextColor="red"
          textStyle={{fontSize: BUTTON_HEIGHT / 2.2}}
          onPress={() => {
            navigation.navigate('PromosScreen', {
              image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXZQ8I4ftNoTNERf5CWlG0s5rfOlTz-wzrNw&usqp=CAU',
            });
          }}
        />
        <Button
          size="extraSmall"
          text="Fermer"
          color="black"
          theTextColor="white"
          textStyle={{fontSize: BUTTON_HEIGHT / 2.2}}
          style={{
            height: BUTTON_HEIGHT,
            borderColor: 'white',
            borderWidth: 1,
          }}
          onPress={() => {
            setPromoMessage(false);
          }}
        />
      </View>
    </View>
    );
};
const styles = StyleSheet.create({
  root: {
    margin: 16,
    width: '92%',
    height: 140,
    borderRadius: 6,
    backgroundColor: '#ed6253',
    padding: 20,
  },
  txt:{
      height: '70%',
  },
  button:{
    height: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
});
export default Offre;