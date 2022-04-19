/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Input} from './Input';

const IconedInput = ({label}) => {
  const [visible, setVisible] = useState(false);
  const showPassword = () => {
    setVisible(!visible);
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <Input
      placeholder={'*************'}
        type="Password"
        secure={visible}
        size="large"
        style={{borderColor: '#000000', color: 'black'}}
        containerStyle={{width: '100%'}}
        label={label}
        labelColor="red"
      />
      <Icon
        name="eye"
        size={24}
        color="grey"
        onPress={showPassword}
        style={{position: 'absolute', right: 18, top: 32}}
      />
    </View>
  );
};

export default IconedInput;
