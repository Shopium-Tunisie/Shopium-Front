/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {Text} from './Text';

const ParametresTouchables = ({text, secondText = '', onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text text={text} weight="bold" colorText="black" />
      <Text text={secondText} colorText="grey" />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '94%',
    height: '9%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    borderColor: '#EDEDED',
    borderWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 7,
  },
});
export default ParametresTouchables;
