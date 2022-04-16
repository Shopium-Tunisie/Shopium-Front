/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet,Image, StatusBar} from 'react-native';
import React,{useEffect} from 'react';
import logo from '../../assets/images/logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
const   SplashScreen = (props)=> {

  // const detectionLogin = async()=>{
  //   // const token  = await AsyncStorage.getItem('token');
  //   //   if (token) {props.navigation.navigate('home');}
  //   //   else {
  //       props.navigation.navigate('login');
  //     // }
  // };
  // useEffect(()=>{
  //   detectionLogin();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[]);

  return (
    <View style={styles.root}>
            <StatusBar hidden={true}/>
      <Image source={logo}/>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EA3B3B',
  },
});
export default SplashScreen;
