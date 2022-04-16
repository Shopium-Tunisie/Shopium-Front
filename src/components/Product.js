/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React, { Fragment, useState } from 'react';
import {View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import { similarProducts } from '../utils/FakeData';
import { Text } from './Text';
import { Image } from './Image';
import Square from './Square';
import { Discount } from './Discount';
import Description from './Descreption';
import Icon from 'react-native-vector-icons/Feather';

const HEART_CONTAINER_SIZE = 30;

export const link =
  'https://www.nesquik.com/sites/site.prod1.nesquik.com/files/products/nesquik_no_sugar_added_chocolate_cocoa_powder_16_oz._tub__chocolate_milk_powderPNG';

const Product = ({
  productImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfw54CoK5kk0VnG8WCifwByYEbWzmNFeVK7w&usqp=CAU',
  companyLogo = 'https://photos.prnewswire.com/prnfull/20160308/341774LOGO',
  discount = 10,
  offerEnd = 3,
  productName = ' Céréales NESQUIK ',
  productDescription = 'Not good for health, i know you know',
  isNew = true,
  isLiked,
  id,
  style,
}) => {
  const [liked, setLiked] = useState(isLiked);
  const navigation = useNavigation();

  const likeProduct = () => {
    setLiked(!liked);
  };

  const thirdChild = {
    height: '16%',
    flexDirection: 'row',
    justifyContent: isNew ? 'space-between' : 'center',
    paddingHorizontal: 6,
    alignItems: 'center',

  };

  return (
    <View style={[styles.container, style]}>
      <View
        style={{height: '84%', justifyContent: 'space-between'}}
        key={id}
        onTouchEnd={() => {
          navigation.navigate('ProductDetail', {
            productName: productName,
            rating: 4,
            similarProducts: similarProducts,
          });
        }}>
        <View style={styles.firstChild}>
          <View style={styles.imageContainer}>
            <Image
              imageSource={productImage}
              resizeMode="cover"
              containerStyle={{
                backgroundColor: '#ededed',
                borderRadius: 6,
                width: '90%',
                height: '96%',
                alignSelf: 'center',
              }}
            />
          </View>
          <View
            style={{
              width: '46%',
              alignItems: 'center',
              padding: 4,
            }}>
            <Image
              imageSource={companyLogo}
              resizeMode="cover"
              style={{borderRadius: 6}}
              containerStyle={{
                backgroundColor: '#ededed',
                width: '95%',
                height: '35%',
                borderRadius: 6,
              }}
            />
            {discount ? (
              <Discount
                discountAmount={discount}
                containerHeight={30}
                containerWidth={70}
              chooseColor={'red'}
              />
            ) : (
              <Fragment />
            )}
            {offerEnd ? (
              <Text
                text={`encore ${offerEnd} jours`}
                style={{fontSize: 10}}
                colorText="red"
              />
            ) : (
              <Fragment />
            )}
          </View>
        </View>
        <View style={styles.secondChild}>
          <Description
            title={productName}
            description={productDescription}
            distance={6}
            distant
            titleStyle={{fontSize: 15}}
            titleColor={'black'}
          />
        </View>
      </View>
      <View style={thirdChild}>
        {isNew ? <Square text="New"  /> : <Fragment />}
        <TouchableOpacity
          onPress={likeProduct}
          style={styles.heartContainerStyle(liked)}>
          <Icon
            name="heart"
            size={18}
            color={liked ? '#d91125' : '#c7c7c7'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    borderColor: '#EDEDED',
    borderWidth: 1,
    flexDirection: 'column',
    margin: 6,
  },
  firstChild: {
    flexDirection: 'row',
    height: '60%',
  },
  secondChild: {
    justifyContent: 'center',
    height: '40%',
  },

  imageContainer: {
    width: '54%',
    justifyContent: 'center',
  },
  heartContainerStyle: liked => ({
    width: HEART_CONTAINER_SIZE,
    height: HEART_CONTAINER_SIZE,
    borderRadius: HEART_CONTAINER_SIZE,
    backgroundColor: liked ? '#edb7b7' : '#f0eded',
    justifyContent: 'center',
    alignItems: 'center',
  }),
});

export default Product;
