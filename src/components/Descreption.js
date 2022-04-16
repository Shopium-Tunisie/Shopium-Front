/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from './Text';

const Description = ({
  containerStyle,
  title,
  titleStyle,
  titleColor ,
  description,
  descriptionStyle,
  descriptionColor = 'grey',
  distance = 15,
  distant,
}) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: 'transparent',
      width: '100%',
    },
  });

  const DISTANCE = distant ? distance : 0;
  return (
    <View style={[styles.container, containerStyle]}>
      <Text
        text={title}
        colorText={titleColor}
        style={titleStyle}
        weight="bold"

        
      />
      <Text
        text={description}
        colorText={descriptionColor}
        style={[descriptionStyle, {marginTop: DISTANCE, paddingHorizontal: 2}]}
      />
    </View>
  );
};

export default Description;
