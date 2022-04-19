/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import {Text} from './Text';

const RibBox = ({onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstChild}>
        <Text text="995 9546 4616 48784" colorText={'black'} weight="bold" style={{fontSize: 18}} />
      </View>
      <View style={styles.secondChild}>
        <Icon name="trash" size={35} color="#999c97" />
        <SimpleIcon
          name="pencil"
          size={22}
          color="#999c97"
          style={{}}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '86%',
    height: '12%',
    borderWidth: 1,
    borderColor: '#EDEDED',
    borderRadius: 6,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  firstChild: {
    height: '100%',
    width: '72%',
    justifyContent: 'center',
  },
  secondChild: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '28%',

    alignItems: 'center',
  },
});
export default RibBox;
