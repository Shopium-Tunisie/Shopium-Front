/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image as NativeImage} from 'react-native';

export const Image = ({
  imageSource,
  containerHeight,
  containerWidth,
  containerStyle,
  rounded,
  resizeMode = 'cover',
  style,
  ...props
}) => {
  const BORDERRADIUS = rounded ? containerHeight / 2 : 0;
  // const CONTAINERHEIGHT = containerHeight || 0;
  // const CONTAINERWIDTH = containerWidth || 0;

  const containerCommunStyle = {
    width: containerWidth,
    height: containerHeight,
    borderRadius: BORDERRADIUS,
  };

  return (
    <View style={[containerCommunStyle, containerStyle]}>
      <NativeImage
        resizeMode={resizeMode}
        source={{uri: imageSource}}
        style={[
          // eslint-disable-next-line react-native/no-inline-styles
          {
            width: '100%',
            height: '100%',
            borderRadius: BORDERRADIUS,
          },
          style,
        ]}
        {...props}
      />
    </View>
  );
};
