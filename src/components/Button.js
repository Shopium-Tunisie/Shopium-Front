/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {TouchableOpacity} from 'react-native';
import React from 'react';
import { buttonColors, buttonWidth } from '../tools/helper';
import { Text } from './Text';

export const Button = ({
  text,
  onPress,
  size = "large",
  color = "default",
  style,
  theTextColor,
  textStyle,
  ...props
}) => {
  const buttonContainerSize = buttonWidth[size];
  const buttonContainerColor = buttonColors[color];

  const containerCommonStyle = {
    width: buttonContainerSize,
    backgroundColor: buttonContainerColor,
    flexDirection: "column",
    borderRadius: 25,
    justifyContent: "center",
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[containerCommonStyle, style]}
      {...props}
    >
      <Text text={text} colorText={theTextColor} style={textStyle} />
    </TouchableOpacity>
  );
};
