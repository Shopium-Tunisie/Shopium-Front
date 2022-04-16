/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import { Text } from './Text';


const Square = ({text}) => {
  return (
    <View
      style={{
        backgroundColor: '#FFA0F2',
        width: 40,
        height: '65%',
        justifyContent: 'center',
        borderRadius: 4,
        borderColor: '#ED5351',
        borderWidth: 1,
      }}>
      <Text text={text} colorText="white" style={{fontSize: 12}} />
    </View>
  );
};

export default Square;
