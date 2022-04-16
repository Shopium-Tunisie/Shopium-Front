/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../../Screens/TabScreens/HomeScreen';
import PromoScreen from '../../../Screens/MainScreens/PromoScreen';
import ProductDetail from '../../../Screens/MainScreens/ProductDetail';
import ProductReview from '../../../Screens/MainScreens/ProductReview';
import Notification from '../../../Screens/MainScreens/Notification';
import Icon from 'react-native-vector-icons/Ionicons';
const Stack =  createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerStyle: {elevation: 0, shadowOpacity: 0}}}>
      <Stack.Screen
        name="HomePage"
        component={HomeScreen}
        options={({_, navigation}) => {
          return {
            headerShown: false,
            headerRight: () => (
              <Icon
                name="ios-notifications"
                size={30}
                color="black"
                onPress={() => {
                  navigation.navigate('Notifications');
                }}
              />
            ),
            headerRightContainerStyle: {marginRight: 14},
            headerTitleAlign: 'center',
          };
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notification}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: '#fff',
            height: 90,
            borderWidth: 0,
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ReviewScreen"
        component={ProductReview}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Review',
        }}
      />
      <Stack.Screen
        name="PromosScreen"
        component={PromoScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({route}) => {
          return {
            headerTitle: route.params.productName,
            headerShown: true,
            headerStyle: {
              backgroundColor: 'white',
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleAlign: 'center',
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
