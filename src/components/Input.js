/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {widthOptions} from '../tools/helper';
import {Text} from './Text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export const Input = ({
  containerStyle,
  label,
  labelColor,
  borderColor = 'white',
  placeholder,
  onChangeText,
  height = 60,
  inputTextColor = 'white',
  size = 'large',
  style,
  type,
  placeholderTextColor = '#ffffff',
  labelContainerStyle,
  secure,
  onFocus = () => {},
  icon,
  error,
  password,
  ...props
}) => {
  const inputWidth = widthOptions[size];
  const [focused, setFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);
  const [isFocused, setIsFocused] = useState(false);
  const communInputStyle = {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: error ? 'red' : focused ? borderColor : 'white',
    color: inputTextColor,
    height: height,
    width: inputWidth,
    marginVertical: 9,
    flexDirection: 'row',
    paddingHorizontal: 15,
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
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={[communInputStyle, style]}
        key={placeholder}
        onBlur={() => setFocused(false)}
        placeholderTextColor={placeholderTextColor}
        autoCapitalize="none"
        underlineColorAndroid="transparent"
        keyboardAppearance="light"
        secureTextEntry={hidePassword}
        multiline={type === 'multi' ? true : false}
        onFocus={() => {
          onFocus;
          setFocused(true);
        }}
        {...props}
      />
      <View style={{position: 'absolute', marginVertical: 27, right: 20}}>
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{color: 'black', fontSize: 22}}
          />
        )}
      </View>
      {error && (
        <Text
          style={{marginTop: 1, left: -0}}
          text={error}
          colorText={'black'}
        />
      )}
    </View>
  );
};
