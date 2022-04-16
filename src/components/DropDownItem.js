/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {Text} from './Text';

const DropDownItem = ({text, checked, onPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      }}>
      <Text text={text} colorText="black" />
      <RadioButton
        value={checked}
        onPress={onPress}
        status={checked ? 'checked' : 'unchecked'}
      />
    </View>
  );
};

export default DropDownItem;
