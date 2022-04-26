/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Fragment} from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ScrollView, View, FlatList, Text} from 'react-native';

import {similarProducts as data} from '../../utils/FakeData';
import CompleteFlatList from 'react-native-complete-flatlist';
import {width} from '../../utils/Dimension';
import Product from '../../components/Product';
import { useProductsStateValue } from '../../tools/ProductContext';

const ITEMWIDTH = width * 0.45;
const ITEMHEIGHT = ITEMWIDTH * 1.4;

const Tab = createMaterialTopTabNavigator();

const PourVous = props => {
  return (
    <View style={{flex: 1}}>
      <CompleteFlatList
        data={data}
        showSearch={false}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          alignItems: 'center',
          alignContent: 'space-around',
          backgroundColor: 'white',
          borderWidth: 1,
        }}
        numColumns={2}
        key={2}
        renderItem={({item}) => (
          <Product style={{height: ITEMHEIGHT, width: ITEMWIDTH}} />
        )}
      />
    </View>
  );
};
const Tous = props => {
  const {products} = useProductsStateValue();

  return (
    <View style={{flex: 1}}>
      <CompleteFlatList
        showsVerticalScrollIndicator={false}
        data={products}
        showSearch={false}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          alignItems: 'center',
          alignContent: 'space-around',
          backgroundColor: 'white',
        }}
        numColumns={2}
        key={2}
        renderItem={({item, i}) => (
          <Product
            {...item}
            key={i}
            style={{height: ITEMHEIGHT, width: ITEMWIDTH}}
          />
        )}
      />
    </View>
  );
};
const Bio = () => {
  return (
    <View>
      <Product style={{height: ITEMHEIGHT, width: ITEMWIDTH}} />

    </View>
  );
};
const Beaute = () => {
  return (
    <View>
      <Product style={{height: ITEMHEIGHT, width: ITEMWIDTH}} />

    </View>
  );
};
const TopNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="tous" component={Tous} />
      <Tab.Screen name="Pour vous" component={PourVous} />
      <Tab.Screen name="Bio" component={Bio} />
      <Tab.Screen name="Beauté" component={Beaute} />
    </Tab.Navigator>
  );
};

export default TopNavigation;
