/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {View as CusView} from 'react-native-animatable';
import {width} from '../../utils/Dimension';
import {useProductsStateValue} from '../../tools/ProductContext';
import Product from '../../components/Product';

const ITEMWIDTH = width * 0.45;
const ITEMHEIGHT = ITEMWIDTH * 1.4;

export const DELAY = 250;

const Favorite = () => {
  const {products} = useProductsStateValue();

  const filteredData = products.filter(item => item.isLiked === true);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: StatusBar.currentHeight,
      }}>
      <FlatList
        data={filteredData}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        numColumns={2}
        key={2}
        renderItem={({item, index}) => {
          return (
            <CusView animation="fadeInUp" delay={DELAY + index * 200}>
              <Product
                {...item}
                style={{height: ITEMHEIGHT, width: ITEMWIDTH}}
              />
            </CusView>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Favorite;
