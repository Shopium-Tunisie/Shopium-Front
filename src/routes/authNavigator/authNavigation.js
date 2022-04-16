/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginScreen from '../../Screens/authScreens/LoginScreen';
import SignUpScreen from '../../Screens/authScreens/SignUpScreen';
import ForgotPassword from '../../Screens/authScreens/ForgotPassword';
import Verification from '../../Screens/authScreens/Verification';
import ResetPassword from '../../Screens/authScreens/ResetPassword';
export default function authNavigation (Stack) {
  return (
        <>
            <Stack.Screen
                name="login"
                component={LoginScreen}
            />
            <Stack.Screen
                name="signup"
                component={SignUpScreen}
            />
            <Stack.Screen
                name="forgotPassword"
                component={ForgotPassword}
            />
            <Stack.Screen
                name="verification"
                component={Verification}
            />
            <Stack.Screen
                name="resetPassword"
                component={ResetPassword}
            />
        </>
  );
};


