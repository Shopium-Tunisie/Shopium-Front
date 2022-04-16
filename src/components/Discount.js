/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from './Text';

export const Discount = ({
  discountAmount,
  rounded,
  chooseColor,
  containerWidth,
  containerHeight,
  containerBackgroundColor,
  style,
  textStyle,
}) => {
  const BORDERRADIUS = rounded ? containerWidth + containerHeight / 2 : 2;
  const FONTSIZE = containerHeight / 2 || 10;

  const communDiscountStyle = {
    backgroundColor: containerBackgroundColor || '#FFD9D9',
    width: containerWidth,
    height: containerHeight,
    borderRadius: BORDERRADIUS,
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <View style={[communDiscountStyle, style]}>
      <Text
        text={discountAmount + '%'}
        colorText={chooseColor}
        style={[{fontSize: FONTSIZE}, textStyle]}
      />
    </View>
  );
};
