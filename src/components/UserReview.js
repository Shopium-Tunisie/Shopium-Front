/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Rating} from 'react-native-elements';
import {Image} from './Image';
import {Text} from './Text';

const UserReview = ({image, userName, ratingValue, date, reviewText}) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstChild}>
        <Image
          containerHeight={54}
          containerWidth={54}
          imageSource={image}
          rounded
        />

        <View style={styles.nameAndStars}>
          <Text
            text={userName}
            weight="bold"
            colorText={'black'}
            style={{fontSize: 18, textAlign: 'left'}}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Rating
              style={{marginRight: 8}}
              readonly
              ratingCount={5}
              startingValue={ratingValue}
              imageSize={15}
              ratingColor="#FBBB00"
              tintColor="white"
            />
            <Text text={ratingValue} colorText={'black'} />
          </View>
        </View>
        <View style={{height: '100%', justifyContent: 'center'}}>
          <Text text={date} colorText={'grey'} />
        </View>
      </View>
      <View style={styles.secondChild}>
        <Text
          text={reviewText}
          colorText="grey"
          style={{fontSize: 15, textAlign: 'justify'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 115,
    borderColor: '#EDEDED',
    borderWidth: 1,
    borderRadius: 6,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginHorizontal: 6,
    paddingHorizontal: 6,
    paddingVertical: 6,
    alignSelf: 'center',
  },
  firstChild: {
    flexDirection: 'row',
    height: '57%',
    justifyContent: 'space-between',

    alignItems: 'center',
  },
  secondChild: {
    height: '43%',
    paddingVertical: 4,
  },

  nameAndStars: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '56%',
    height: '100%',
  },
});

export default UserReview;
