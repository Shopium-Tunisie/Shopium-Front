import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {widthOptions} from '../tools/helper';
import {Text} from './Text';

export const Input = ({
  containerStyle,
  label,
  labelColor,
  borderColor = 'white',
  placeholder,
  onChangeText,
  height = 50,
  inputTextColor = 'white',
  size = 'large',
  style,
  type,
  placeholderTextColor = '#cfcec8',
  labelContainerStyle,
  secure,
  icon,
  ...props
}) => {
  const inputWidth = widthOptions[size];

  const communInputStyle = {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: borderColor,
    color: inputTextColor,
    height: height,
    width: inputWidth,
    marginVertical: 6,
    padding: 10,
  };

  const communContainerStyle = {
    alignItems: 'center',
  };
  return (
    <View style={[communContainerStyle, containerStyle]}>
      {label && (
        <Text
          text={label}
          colorText={labelColor}
          containerStyle={labelContainerStyle}
        />
      )}

      <TextInput
        secureTextEntry={type === 'password'}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={[communInputStyle, style]}
        key={placeholder}
        placeholderTextColor={placeholderTextColor}
        autoCapitalize="none"
        underlineColorAndroid="transparent"
        keyboardAppearance="light"
        multiline={type === 'multi' ? true : false}
        {...props}
      />

      <View />
    </View>
  );
};
