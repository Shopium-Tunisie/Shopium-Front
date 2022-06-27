/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Fragment, useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';


import {Rating} from 'react-native-elements';
import AlignedText from '../../components/AlignedTexts';
import { Button } from '../../components/Button';
import Map from '../../components/Map';
import Product from '../../components/Product';
import ProductSwiper from '../../components/ProductSwiper';
import { Text } from '../../components/Text';
import { height, width } from '../../utils/Dimension';
import { data, similarProducts } from '../../utils/FakeData';
import * as axios from 'axios';
const MAPHEIGHT = height * 0.2;
const URL = "http://192.168.155.145:8000";
const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore';
const images = {
  first:
    'https://i.pinimg.com/564x/ae/df/d4/aedfd4e71da073d74401c7a52e7bd206.jpg',
  second:
    'https://i.pinimg.com/564x/64/8d/ac/648dac47b1c6379c15408c14845477bd.jpg',
  third:
    'https://i.pinimg.com/564x/62/18/50/6218505ed343a0cb4ea9a339205f97f7.jpg',
};

const ITEMWIDTH = width * 0.4;
const ITEMHEIGHT = ITEMWIDTH * 1.5;

const ProductInfo = ({route, navigation}) => {
  let prod = route.params;
  console.log({prodd:prod});
  useEffect(() => {
    navigation.getParent().setOptions({
      tabBarVisible: false,
    });
    return () => {
      navigation.getParent().setOptions({
        tabBarVisible: true,
      });
    };
  }, [navigation]);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          text={route.params.productName}
          weight="bold"
          style={{fontSize: 16}}
        />
      </View>
      <Text
        text="Disponible"
        colorText="green"
        style={{
          fontSize: 14,
          alignSelf: 'flex-start',
          paddingHorizontal: 4,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Rating
          imageSize={16}
          style={{
            flexDirection: 'row-reverse',
            width: '24%',
          }}
          readonly
          startingValue={route.params.rating}
        />
        <Button
          size="small"
          style={{height: 30}}
          text="Review"
          theTextColor="white"
          color="dark"
          onPress={() => {
            navigation.navigate('ReviewScreen');
          }}
        />
      </View>
    </View>
  );
};
let res ;
const ProductDetail = ({navigation, route}) => {
  const [product,setProduct] = useState(route.params.product);
  const [offer,setOffer] = useState({});
  useEffect(() => {
    const loadoffer = async()=>{
      const data = await axios.post(`${URL}/api/products/getofferByproduct`,{id:route.params.id});
        console.log({data:data.data});
        setOffer(data.data);
        res =  data.data;
        console.log({res})
        return res;
    };
    let x=loadoffer();
  },[route.params.id]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.swiperView}>
            <ProductSwiper images={route.params.productImage} />
          </View>
          <View style={styles.firstChild}>
            <ProductInfo route={route} navigation={navigation} />
          </View>
          <View style={styles.secondChild}>
            <AlignedText
              title="En savoir Plus"
              description={offer.description}
              titleSize={16}
              descriptionSize={14}
              bottomMargin={8}
            />
            <AlignedText
              title="Condition de L'offre"
              description={offer.condition}
              titleSize={16}
              descriptionSize={14}
            />
          </View>
          <View style={styles.mapView}>
            <Map />
          </View>
          <Text
            text="Produit similaire"
            weight="bold"
            colorText="black"
            style={{
              fontSize: 16,
              alignSelf: 'flex-start',
              paddingLeft: 8,
              marginTop: 8,
            }}
          />
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          snapToInterval={ITEMWIDTH}
          pagingEnabled
          decelerationRate="fast">
          {similarProducts.map(el => (
            <Product
              key={el.id}
              style={{height: ITEMHEIGHT, width: ITEMWIDTH}}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  swiperView: {
    width: '100%',
    alignSelf: 'center',
  },
  firstChild: {
    marginTop: 30,
    paddingHorizontal: 10,
  },
  secondChild: {
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  mapView: {
    height: MAPHEIGHT,
  },
  similarProductView: {
    width: '95%',
    alignSelf: 'center',
  },
});
export default ProductDetail;
