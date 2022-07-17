/* eslint-disable prettier/prettier */
import React,{useContext, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '../../components/Button';
import {Image} from '../../components/Image';
import {Text} from '../../components/Text';
import {lorem} from '../../tools/helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
const image = 'https://i.ibb.co/1XbHTbT/Artboard-3.png';
import AuthContext from '../../tools/AuthContext';
import axios from 'axios';
import { API_BASE_URL as URL } from '../../config/urls';

const Parrainage = ({navigation},porps) => {
        const {userToken,userId} = useContext(AuthContext);
                const [me,setMe] = useState();
        const data = async()=>{
            try {
              const id = await AsyncStorage.getItem('userId');
              console.log({useid:id});
              const user = await axios.post(`${URL}/user/getMe`,{id:id});
              console.log({user:user.data.user.codeParrainage});
              setMe(user.data.user.codeParrainage);
              console.log(me);
            } catch (error) {
              console.log(error);
            }
          };
        useEffect( () => {
          data();
          console.log({me:me});
        }, [me]);
  return (
    <View style={styles.container}>
      <Image
        containerStyle={styles.image}
        imageSource={image}
        resizeMode="contain"
      />
      <Text
        text={lorem}
        style={{fontSize: 16}}
        colorText="grey"
        containerStyle={{marginBottom: 30}}
      />
      <View style={styles.textContainer}>
        <Text
          text="Code parrain ou code promo"
          colorText="red"
          style={{fontSize: 22}}
          weight="bold"
        />
        <Text
          text={me}
          colorText="black"
          style = {{ fontSize : 30 }}
          weight="bold"
        />
      </View>
      <Button
        onPress={()=>navigation.navigate('ami',{code:me})}
        style={{alignSelf: 'center', height: 44, marginTop: 100}}
        text="Parrainer"
        theTextColor="white"
        textStyle={{fontSize: 20}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height: '32%',
    width: '100%',
    marginTop: 50,
    marginBottom: 16,
  },
  textContainer: {
    height: '20%',
    width: '90%',
    borderWidth: 1,
    borderRadius: 6,
    alignSelf: 'center',
    borderColor: '#d4d4d4',
    justifyContent: 'space-around',
  },
});
export default Parrainage;
