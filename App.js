/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createAppContainer, createSwitchNavigator, SwitchRouter} from 'react-navigation';
import ForgotPassword from './src/Screens/authScreens/ForgotPassword';
import LoginScreen from './src/Screens/authScreens/LoginScreen';
import ResetPassword from './src/Screens/authScreens/ResetPassword';
import SignUpScreen from './src/Screens/authScreens/SignUpScreen';
import Verification from './src/Screens/authScreens/Verification';
import SplashScreen from './src/Screens/MainScreens/SplashScreen';
import FavorieScreen from './src/Screens/TabScreens/FavorieScreen';
import FideliteScreen from './src/Screens/TabScreens/FideliteScreen';
import HomeScreen from './src/Screens/TabScreens/HomeScreen';
import ProfilScreen from './src/Screens/TabScreens/ProfilScreen';
import { NavigationContainer } from '@react-navigation/native';
import React,{useState,useEffect} from 'react';
import OnboardingScreen from './src/Screens/authScreens/OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TabNavigation from './src/routes/TabNavigation/tabNavigation';
import HomeStack from './src/routes/Stack/HomeStack/HomeStack';
import Route from './src/routes/Route';
import FlashMessage from 'react-native-flash-message';
import { View } from 'react-native';
// import { Provider } from 'react-redux';
// import store from './src/Redux/store';
import { getUserData } from './src/utils/utils';
import {saveUserData} from './src/Redux/actions/auth';
import Notification from './src/Screens/MainScreens/Notification';
import ProductDetail from './src/Screens/MainScreens/ProductDetail';
import PromosScreen from './src/Screens/MainScreens/PromoScreen';
import ProductReview from './src/Screens/MainScreens/ProductReview';
const RootStack = createNativeStackNavigator();

  const App = ({route})=>{
    const [showSplashScreen, setShowSplashScreen] = useState(true);
    const [isFirstLaunch,setIsFirstLaunch] = useState(null);
     useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);
  }, [showSplashScreen]);
  useEffect(() => {
    const appData = AsyncStorage.getItem('isFirstLaunch');
    console.log(appData);
    if (appData == null) {
      setIsFirstLaunch(true);
      console.log(isFirstLaunch);
      AsyncStorage.setItem('isFirstLaunch', 'false');
    } else {
      setIsFirstLaunch(false);
    }
    // AsyncStorage.removeItem('isAppFirstLaunched');
  }, [isFirstLaunch]);
//   useEffect(()=>{
//   (async()=>{
//     const userData = await getUserData();
//     console.log(userData);
//     console.log('user data App.js',userData);
//     if (!!userData){
//       saveUserData(userData);
//     }
//   })();
// },[]);
    return (
    isFirstLaunch !== null && (
      <NavigationContainer screenOptions={{}}>
      <RootStack.Navigator  screenOptions={{headerShown: false}}>
          {showSplashScreen ? (
            <RootStack.Screen
              name="Splash"
              component={SplashScreen}
              options={{headerShown: false}}
            />
          ) : null}
            {isFirstLaunch && (
              <RootStack.Screen name="onBoarding" component={OnboardingScreen}/>
              )}
       <RootStack.Screen name="home" component={TabNavigation}/>
      </RootStack.Navigator>
      </NavigationContainer>
      )
    // <Provider store={store}>
    //   <Route/>
    //   <FlashMessage position={'top'}/>
    // </Provider>
    );
  };
export default App;
