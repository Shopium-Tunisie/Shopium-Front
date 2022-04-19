/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import {View,  StyleSheet, Keyboard, FlatList} from 'react-native';
import React, { useState } from 'react';
import UserReview from '../../components/UserReview';
import { Overlay, Rating } from 'react-native-elements';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/EvilIcons';
import ProductSwiper from '../../components/ProductSwiper';
import { FAKEDATA } from '../../utils/FakeData';
import IconFeather from 'react-native-vector-icons/Feather';
import { Text } from '../../components/Text';

const images = {
  first:
    'https://i.pinimg.com/564x/ae/df/d4/aedfd4e71da073d74401c7a52e7bd206.jpg',
  second:
    'https://i.pinimg.com/564x/64/8d/ac/648dac47b1c6379c15408c14845477bd.jpg',
  third:
    'https://i.pinimg.com/564x/62/18/50/6218505ed343a0cb4ea9a339205f97f7.jpg',
};
const renderItem = ({ item }) => (
  <UserReview
    date={item.reviewDate}
    ratingValue={item.userReviewStars}
    image={item.userImage}
    reviewText={item.userReviewText}
    userName={item.userName}
  />
);
const OverLay = ({ setVisibleOverLay, visibleOverLay, setComment }) => (
  <Overlay
    isVisible={visibleOverLay}
    overlayStyle={{
      height: 300,
      width: 310,
      borderRadius: 6,
    }}
  >
    <View
      style={{
        justifyContent: 'space-around',
        height: '100%',
      }}
    >
      <Icon
        name="close"
        size={24}
        color="black"
        onPress={() => {
          setVisibleOverLay(!visibleOverLay);
        }}
        style={{ position: 'absolute', right: 0, top: 14 }}
      />
      <Text
        text="Merci a donner votre avis"
        weight="bold"
        colorText={'black'}
        style={{ fontSize: 22}}
        containerStyle={{
          width: '70%',
          alignSelf: 'center',
          marginBottom: 10,
        }}
      />
      <Rating
        imageSize={28}
        onFinishRating={(rating) => {
          setRating(rating);
        }}
      />
      <Input
        placeholder="Ecrit quelque chose"
        inputTextColor="black"
        type="multi"
        style={{
          backgroundColor: '#F2F2F2',
          justifyContent: 'flex-start',
        }}
        maxLength={120}
        height={90}
        multiLine
        onChangeText={(text) => {
          setComment(text);
        }}
      />
      <Button
        size="medium"
        text="Partager"
        theTextColor="white"
        textStyle={{ fontSize: 16 }}
        style={{ height: '16%', alignSelf: 'center' }}
      />
    </View>
  </Overlay>
);
const ProductReview = ({route,navigation}) => {
  const [visibleOverLay, setVisibleOverLay] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  return (
    <View style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <ProductSwiper images={images} />
      <View style={styles.icon}>
        <IconFeather
          name="edit"
          size={24}
          color="white"
          onPress={() => {
            setVisibleOverLay(!visibleOverLay);
          }}
        />
      </View>
         <Overlay
        isVisible={visibleOverLay}
        onBackdropPress={Keyboard.dismiss}
        overlayStyle={{
          height: 300,
          width: 310,
          borderRadius: 6,
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View
            style={{
              justifyContent: 'space-around',
              height: '100%',
            }}
          >
            <Icon
              name="close"
              size={24}
              color="black"
              onPress={() => {
                setVisibleOverLay(!visibleOverLay);
              }}
              style={{ position: 'absolute', right: 0, top: 14 }}
            />
            <Text
              text="Merci a donner votre avis"
              weight="bold"
              style={[styles.text,{ fontSize: 22,color:'black' }]}
              containerStyle={{
                width: '70%',
                alignSelf: 'center',
                marginBottom: 10,
              }}
            />
            <Rating
              imageSize={28}
              onFinishRating={(rating) => {
                setRating(rating);
              }}
            />
            <Input
              autoFocus={true}
              placeholder="Ecrit quelque chose"
              inputTextColor="black"
              type="multi"
              style={{
                backgroundColor: '#F2F2F2',
                justifyContent: 'flex-start',
              }}
              maxLength={120}
              height={80}
              multiLine
              onChangeText={(text) => {
                setComment(text);
              }}
            />
            <Button
              size="medium"
              text="Partager"
              theTextColor="white"
              textStyle={{ fontSize: 16 }}
              style={{ height: '16%', alignSelf: 'center' }}
              onPress={()=>navigation.goBack()}
            />
          </View>
        </TouchableWithoutFeedback>
      </Overlay>
      <FlatList
        data={FAKEDATA}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.postID.toString()}
        style={{ marginTop: 40 }}
      />
    </View>
  );
};

export default ProductReview;
const styles = StyleSheet.create({
  icon: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: '#ED5351',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 25,
    right: 25,
    zIndex: 1,
  },
  text:{
    textAlign:'center',
    textShadowColor:'red',
    color:'black',
  },
});
