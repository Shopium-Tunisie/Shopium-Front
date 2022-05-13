/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text,TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/TabScreens/HomeScreen';
import FavoritScreen from '../../Screens/TabScreens/FavorieScreen';
import FideliteScreen from '../../Screens/TabScreens/FideliteScreen';
import ProfilScreen from '../../Screens/TabScreens/ProfilScreen';
import HomeStack from '../Stack/HomeStack/HomeStack';
import ProfilStack from '../Stack/ProfilStack/ProfilStack';
import Scan from '../../Screens/TabScreens/Scan';
import Icon from 'react-native-vector-icons/AntDesign';
import ButtonTab from '../../components/ButtonTab';
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
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
