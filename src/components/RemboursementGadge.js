/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import {height, width} from '../utils/Dimension';
import { Text } from './Text';

const ITEMHEIGHT = height * 0.14;
const ITEMWIDTH = width * 0.9;
const SPACING = 20;
const FONTSIZE = ITEMHEIGHT * 0.15;

const RemboursementGadget = ({data}) => {
  const color = () => {
    switch (data.state) {
      case 'En cours':
        return '#FECB58';
      case 'Accepté':
        return '#0b6e20';
      case 'Refusé':
        return 'red';
      default:
        return 'black';
    }
  };

  const Color = color();
  return (
    <View style={styles.container}>
      <Icon
        name="primitive-dot"
        size={16}
        color={Color}
        style={styles.square}
      />

      <Text
        text={data.item}
        weight="bold"
        style={{fontSize: FONTSIZE, textAlign: 'left'}}
      />
      <Text text={data.type} colorText="grey" style={{textAlign: 'left'}} />
      <View style={styles.thirdChild}>
        <Text text={data.text} style={{textAlign: 'left'}} />
        <Text text={data.amount} weight="bold" />
      </View>
      <View style={styles.lastChild}>
        <Text text={data.state} style={{color: Color, textAlign: 'left'}} />
        <Text text={data.date} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: ITEMHEIGHT,
    width: ITEMWIDTH,
    borderWidth: 1,
    borderColor: '#c5cbd6',
    marginVertical: 14,
    borderRadius: 6,
    justifyContent: 'space-between',
    paddingHorizontal: SPACING,
    paddingVertical: SPACING / 2,
  },
  firstChild: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
  },
  thirdChild: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lastChild: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  square: {position: 'absolute', left: SPACING / 3.5, top: SPACING / 1.5},
});
export default RemboursementGadget;
