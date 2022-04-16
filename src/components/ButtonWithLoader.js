/* eslint-disable prettier/prettier */
import {ActivityIndicator, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const ButtonWithLoader = ({
  text,
   onPress,
    isLoading,
  }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnStyle}>
      {!!isLoading ? <ActivityIndicator size="large" color="white" /> : <Text style={styles.textStyle}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default ButtonWithLoader;

const styles = StyleSheet.create({
  btnStyle: {
    height: 48,
    backgroundColor: 'red',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
  },
  textStyle: {
    fontSize: 17,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
  },
});
