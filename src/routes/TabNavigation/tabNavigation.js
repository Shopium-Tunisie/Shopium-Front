/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text,TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoritScreen from '../../Screens/TabScreens/FavorieScreen';
import FideliteScreen from '../../Screens/TabScreens/FideliteScreen';
import HomeStack from '../Stack/HomeStack/HomeStack';
import ProfilStack from '../Stack/ProfilStack/ProfilStack';
import Scan from '../../Screens/TabScreens/Scan';
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
    // tabBarOptions={{
    //   showLabel:false,
    //   style:{
    //     position:'absolute',
    //     bottom:25,
    //     left:20,
    //     right:20,
    //     elevation:0,
    //     backgroundColor:'white',
    //     borderRadius:15,
    //     height:90,
    //     ...styles.shadow,
    //   },
    // }}
    screenOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
          let iconName;
          if (route.name == 'home1'){
            iconName = 'home-outline';
          } else if (route.name == 'fidelite'){
            iconName = 'card-outline';
          } else if (route.name == 'favorite'){
            iconName = 'heart-outline';
          } else if (route.name == 'profile') {
            iconName = 'person-circle-outline';
          } else if (route.name == 'scan') {
            iconName = 'camera';
          }
          return <Ionicons name={iconName} size={25} color="red"/>;
        },headerShown:false,
    })}
    >
      <Tab.Screen name="home1" component={HomeStack} />
      <Tab.Screen name="fidelite" component={FideliteScreen} />
      <Tab.Screen name="scan" component={Scan} />
      <Tab.Screen name="favorite" component={FavoritScreen} />
      <Tab.Screen name="profile" component={ProfilStack} />
    </Tab.Navigator>
  );
};
export default TabNavigation;
const styles = StyleSheet.create({
  shadow:{
    shadowColor:'#7F5DF0',
    shadowOffset:{
      width:0,
      height:10,
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5,
  },
});
