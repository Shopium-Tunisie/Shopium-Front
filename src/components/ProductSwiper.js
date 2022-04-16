/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import {Discount} from './Discount';
import {Image} from './Image';

const ProductSwiper = ({images}) => {
  return (
    <View style={styles.container}>
      <Swiper
        showsButtons={true}
        showsPagination={true}
        paginationStyle={{bottom: -30}}
        loop={false}>
        <View>
          <Image
            imageSource={images.first}
            resizeMode="contain"
            containerStyle={{height: '100%'}}
          />
          <Discount
            discountAmount={20}
            style={{position: 'absolute', right: 14, bottom: 12}}
            containerHeight={30}
            containerWidth={44}
            chooseColor="red"
          />
        </View>

        <View>
          <Image
            imageSource={images.second}
            resizeMode="contain"
            containerStyle={{height: '100%'}}
          />
          <Discount
            discountAmount={20}
            style={{position: 'absolute', right: 14, bottom: 12}}
            containerHeight={30}
            containerWidth={44}
            chooseColor="red"
          />
        </View>

        <View>
          <Image
            imageSource={images.third}
            resizeMode="contain"
            containerStyle={{height: '100%'}}
          />
          <Discount
            discountAmount={20}
            style={{position: 'absolute', right: 14, bottom: 12}}
            containerHeight={30}
            containerWidth={44}
            chooseColor="red"
          />
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 146,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '#c8cfca',
    marginTop: 6,
    alignSelf: 'center',
    borderWidth: 1,
  },
});

export default ProductSwiper;
