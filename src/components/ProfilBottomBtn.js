/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {Text} from './Text';

const ProfilBottomBtn = ({icon, title, description, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View
          style={{
            width: '26%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={icon}
            style={{
              backgroundColor: 'transparent',
              height: 60,
              width: 60,
            }}
          />
        </View>
        <View style={styles.description}>
          <View style={{justifyContent: 'center'}}>
            <Text
              text={title}
              style={{
                fontSize: 16,
                color:'#000000',
              }}
              containerStyle={{alignItems: 'flex-start'}}
            />
            <Text
              text={description}
              colorText="lightGrey"
              style={{
                fontSize: 15,
                marginTop: 6,
              }}
              containerStyle={{alignItems: 'flex-start'}}
            />
          </View>
        </View>
        <View style={styles.iconView}>
          <Icon name="chevron-right" size={36} color="#adb3ae" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 75,
    width: '93%',
    alignSelf: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#EDEDED',
    flexDirection: 'row',
    marginVertical: 6,
  },
  description: {
    width: '64%',
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  iconView: {
    height: '40%',
    width: '10%',
    alignSelf: 'center',
  },
});
export default ProfilBottomBtn;
