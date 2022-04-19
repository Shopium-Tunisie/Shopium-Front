/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import { Text } from '../../components/Text';
import { lorem } from '../../tools/helper';

const EmplacementScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding:10}}>
      <Text
        text={lorem}
        containerStyle={{padding: 4, marginVertical: 16}}
        colorText="grey"
        style={{fontSize: 18}}
      />
    </View>
  );
};

export default EmplacementScreen;
