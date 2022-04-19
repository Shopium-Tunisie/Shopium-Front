/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import IconedInput from '../../components/IconInput';
import {Image} from '../../components/Image';
import {Input} from '../../components/Input';


const PasswordScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        imageSource="https://img.freepik.com/free-vector/locker_53876-25496.jpg?size=626&ext=jpg"
        containerStyle={{height: '30%'}}
        resizeMode="cover"
      />
      {/* <Image
        source={require('../../assets/images/passwordScreenlogo.png')}
        resizeMode="center"
        style={{height:'30%'}}

      /> */}
      <Input
        size="large"
        style={{borderColor: 'black', color: 'black'}}
        label="Ancien mot de passe"
        placeholder={"*************"}
        labelColor='red'
      />
      <IconedInput label="Nouveau Mot de Passe"/>
      <IconedInput label={'confirmer Mot de Passe'}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
});

export default PasswordScreen;
