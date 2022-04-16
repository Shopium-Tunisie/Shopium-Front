/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Text} from './Text';

const AlignedText = ({
  title,
  description,
  titleSize,
  descriptionSize,
  bottomMargin = 0,
}) => {
  return (
    <View style={{alignItems: 'flex-start'}}>
      <Text
        weight="bold"
        text={title}
        colorText="black"
        style={{fontSize: titleSize}}
      />
      <Text
        text={description}
        colorText="grey"
        style={{
          fontSize: descriptionSize,
          textAlign: 'justify',
          marginBottom: bottomMargin,
        }}
      />
    </View>
  );
};

export default AlignedText;
