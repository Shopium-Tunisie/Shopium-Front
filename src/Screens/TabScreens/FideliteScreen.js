/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import RemboursementList from '../FideliteScreen/Remboursement';
const Stack = createStackNavigator();
const FideliteScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RemboursementList"
        component={RemboursementList}
        options={() => {
          return {
            headerShown: true,
            headerTitle: 'Mes remboursement',
            headerStyle: {
              backgroundColor: '#fff',
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

export default FideliteScreen;
