/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View, Keyboard, KeyboardAvoidingView} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import { Button } from '../../components/Button';
import { Image } from '../../components/Image';
import { Input } from '../../components/Input';
import { Text } from '../../components/Text';
import {lorem} from '../../tools/helper';



const image = 'https://i.ibb.co/1XbHTbT/Artboard-3.png';

const EnterCode = () => {
  const [code, setCode] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Image
          containerStyle={styles.image}
          imageSource={image}
          resizeMode="contain"
        />
        <Text
          text={lorem}
          style={{fontSize: 16}}
          colorText="grey"
          containerStyle={{marginBottom: 30}}
        />
        <Input
          placeholder="157452"
          label="Code parrain ou code promo"
          borderColor="black"
          style={{color: 'black'}}
          keyboardType={'numeric'}
          labelContainerStyle={{alignItems: 'flex-start', width: '90%'}}
          labelColor="red"
          onChangeText={text => {
            setCode(text);
          }}
        />
        <Button
          style={{alignSelf: 'center', height: 44, marginTop: 80}}
          text="Decouvrir mon cadeau"
          theTextColor="white"
          textStyle={{fontSize: 17}}
        />
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height: '42%',
    width: '100%',

    marginTop: 50,
    marginBottom: 16,
  },
});
export default EnterCode;
