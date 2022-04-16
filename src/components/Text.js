/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text as NativeText, StyleSheet} from 'react-native';
import {textColor, textWeight} from '../tools/helper';

export const Text = ({text, weight, colorText, style, containerStyle}) => {
  const theWeight = textWeight[weight];
  const theColor = textColor[colorText];

  const fontCommunStyle = {
    fontWeight: theWeight,
    color: theColor,
    textAlign: 'center',
    fontFamily: 'Roboto',
  };

  return (
    <View style={containerStyle}>
      <NativeText style={[fontCommunStyle, style]}>{text}</NativeText>
    </View>
  );
};
