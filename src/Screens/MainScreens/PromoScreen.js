/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  Text,
} from 'react-native';

import {FAKEDATA2} from '../../utils/FakeData';

import { height, width } from '../../utils/Dimension';
import ProductOffer from '../../components/ProductOffer';

const BORDER_VALUE = 30;
const PRODUCT_CONTAINER_HEIGHT = height * 0.72;
const BACK_DROP_HEIGHT = height * 0.2;

const url = 'https://i.ibb.co/8gj73Q9/2BF7X8E.jpg';

const BackDropImage = ({image}) => {
  return (
    <View
      style={{
        height: height * 0.3,
        position: 'absolute',
        borderWidth: 3,
        width ,
      }}>
      <Image
        style={[StyleSheet.absoluteFill]}
        resizeMode="cover"
        source={{uri: image, cache: 'force-cache'}}
      />
    </View>
  );
};

const BackDrop = () => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 1,
        backgroundColor: '#FECB58',
        height: BACK_DROP_HEIGHT,
        width,
        opacity: 0.7,
      }}
    />
  );
};

const Header = (props) => {
  return (
    <View style={styles.header}>
      {/* <AntDesign
        name="left"
        size={22}
        color="black"
        style={{position: 'absolute', left: 10}}
        onPress={props.onPress}
      /> */}
      <Text style={{fontSize: 24, fontWeight: '700', color:'#000000'}}>Lorem</Text>
    </View>
  );
};
const navigationDetail = ({navigation}) => {
  navigation.push('ProductDetail');
};
const ProductsContainer = (props) => {
  return (
    <View style={styles.productsContainer}>
      <FlatList
        data={FAKEDATA2}
        contentContainerStyle={{marginTop: 20}}
        renderItem={({item}) => (
          <ProductOffer
            productImage={item.image}
            discountAmount={item.discountAmount}
            description={item.description}
            productName={item.productName}
            onPress={()=>props.navigation.navigate('ProductDetail',{item})}
          />
        )}
        keyExtractor={item => item.description}
      />
    </View>
  );
};

const PromosScreen = ({navigation}) => {
  const navigateBack = () => {
    navigation.goBack();
  };
  useEffect(() => {
    navigation.getParent().setOptions({
      tabBarVisible: false,
    });
    return () => {
      navigation.getParent().setOptions({
        tabBarVisible: true,
      });
    };
  });
  return (
    <SafeAreaView style={styles.container}>
      <ProductsContainer />
      <BackDropImage image={url} />
      <BackDrop />
      <Header onPress={navigateBack} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4fade',
  },
  productsContainer: {
    height: PRODUCT_CONTAINER_HEIGHT,
    width,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: BORDER_VALUE,
    borderTopLeftRadius: BORDER_VALUE,
    zIndex: 1,
  },
  header: {
    width,
    flexDirection: 'row',
    top: BACK_DROP_HEIGHT / 2 - 20,
    alignItems: 'center',
    justifyContent: 'center',
    color:'black',
  },
});

export default PromosScreen;
