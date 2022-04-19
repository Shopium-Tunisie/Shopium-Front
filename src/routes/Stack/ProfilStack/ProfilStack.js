/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfilScreen from '../../../Screens/TabScreens/ProfilScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Parametre from '../../../Screens/ParametreScreen';
import ParametreScreen from '../../../Screens/ParametreScreen';
import passwordScreen from '../../../Screens/ProfileScreen/passwordScreen';
import InfoPersonel from '../../../Screens/ProfileScreen/InfoPersonel';
import PasswordScreen from '../../../Screens/ProfileScreen/passwordScreen';
import EmplacementScreen from '../../../Screens/ProfileScreen/EmplacementScreen';
import RibScreen from '../../../Screens/ProfileScreen/RibScreen';
import PayPalScreen from '../../../Screens/ProfileScreen/PaypalScreen';
import PosteScreen from '../../../Screens/ProfileScreen/PostScreen';
import CodeScreen from '../../../Screens/ProfileScreen/CodeScreen';
import Parrainage from '../../../Screens/ProfileScreen/Parrainage';
import Rembourser from '../../../Screens/ProfileScreen/Rembourser';
const Stack = createStackNavigator();
const ProfilStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerStyle: {elevation: 0, shadowOpacity: 0}}}>
      <Stack.Screen
        name="profile1"
        component={ProfilScreen}
        options={({_, navigation}) => {
          return {
            headerShown: false,
            headerRightContainerStyle: {marginRight: 14},
            headerTitleAlign: 'center',
          };
        }}
      />
      <Stack.Screen name="parametre" component={ParametreScreen}/>
      <Stack.Screen name="infoPersonel" component={InfoPersonel}/>
      <Stack.Screen name="password" component={PasswordScreen}/>
       <Stack.Screen name="RibScreen" component={RibScreen}/>
       <Stack.Screen name="PayPalScreen" component={PayPalScreen}/>
       <Stack.Screen name="PosteScreen" component={PosteScreen}/>
       <Stack.Screen name="emplacement" component={EmplacementScreen}/>
       <Stack.Screen name="EnterCode" component={CodeScreen}/>
       <Stack.Screen name="Parrainer" component={Parrainage}/>
       <Stack.Screen name="Rembourser" component={Rembourser}/>
    </Stack.Navigator>
  );
};

export default ProfilStack;
