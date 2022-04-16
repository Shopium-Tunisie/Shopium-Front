/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfilScreen from '../../../Screens/TabScreens/ProfilScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Parametre from '../../../Screens/ParametreScreen';
import ParametreScreen from '../../../Screens/ParametreScreen';
import RipScreen from '../../../Screens/ProfileScreen/RipScreen';
import passwordScreen from '../../../Screens/ProfileScreen/passwordScreen';
import InfoPersonel from '../../../Screens/ProfileScreen/InfoPersonel';
import PasswordScreen from '../../../Screens/ProfileScreen/passwordScreen';
import EmplacementScreen from '../../../Screens/ProfileScreen/EmplacementScreen';
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
       <Stack.Screen name="rip" component={RipScreen}/>
       <Stack.Screen name="emplacement" component={EmplacementScreen}/>
    </Stack.Navigator>
  );
};

export default ProfilStack;
