/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import { Text } from './Text';

const SheetButton = ({innerIcon, onPress, text, ...props}) => {
  const InnerIcon = innerIcon;
  return (
    <TouchableOpacity
      {...props}
      onPress={onPress}
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        width: '100%',
      }}>
      <View
        style={{
          width: '20%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            height: 40,
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
          }}>
          <InnerIcon />
        </View>
      </View>
      <View Style={{width: '80%', height: '100%'}}>
        <Text text={text} style={{fontSize: 18}} colorText="white" />
      </View>
    </TouchableOpacity>
  );
};
export default SheetButton;
