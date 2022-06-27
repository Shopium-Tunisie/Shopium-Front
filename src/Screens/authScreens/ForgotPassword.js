/* eslint-disable prettier/prettier */
import {View, Text, ToastAndroid, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import { KeyboardAvoidingView } from 'react-native';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Dimensions } from 'react-native';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import { showError, showSuccess } from '../../tools/helperFunction';
const URL = "http://192.168.155.145:8000";
const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const SendButton = async () => {
    try {
      if (email === '') {
        ToastAndroid.show('Please fill in your credential', ToastAndroid.SHORT);
      }
      console.log(email);
      const {data} = await axios.post(
        `${URL}/user/forgot-password`,
        {email},
      );
      console.log(data);
      console.log(data.id);
      console.log(data.token);
      if (data.success) {
        showSuccess({message:'success, verifier votre email'});
        ToastAndroid.show(`${data.message}`, ToastAndroid.LONG);
      } else {
        showError('error')
        ToastAndroid.show(`${data.message}`, ToastAndroid.LONG);
      }
      setEmail('');
      navigation.navigate('resetPassword', {token: data.token, id: data.id});
      return {data};
    } catch (error) {
      return console.log(error);
    }
  };
  return (
    <KeyboardAvoidingView style={styles.root}>
      <Text style={styles.title}>Mot de Passe Oublié</Text>
      <Text style={styles.description}>
        Occaecat esse reprehenderit incididunt officia nisi eiusmod sint velit.
      </Text>
      <View style={styles.container}>
        <Input
          style={styles.input}
          placeholder=" Email"
          value={email}
          onChangeText={email => setEmail(email)}
          keyboardType="email-address"
        />
      </View>
      <View style={{marginTop: 145}}>
        <ButtonWithLoader text={'Envoyer'} onPress={SendButton} />
      </View>
    </KeyboardAvoidingView>
  );
};
const {width} = Dimensions.get('window');
const inputWidth = Math.round(width / 4);
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#54A0FE',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 35.16,
    fontStyle: 'normal',
    color: '#ffffff',
    textTransform: 'capitalize',
    textAlign: 'center',
    marginTop: 110,
  },
  container: {},
  description: {
    marginTop: 79,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    marginTop: 67,
    width: width - 40,
    height: inputWidth / 2,
    borderWidth: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ffffff',
    borderRadius: 6,
    textDecorationColor: '#ffffff',
    color: '#fff',
    fontSize: 19,
    fontWeight: '700',
  },
  viewButton: {
    marginTop: 145,
  },
});
export default ForgotPassword;
