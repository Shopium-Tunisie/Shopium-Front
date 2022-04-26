/* eslint-disable react-hooks/exhaustive-deps */
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
import React,{useState,useEffect, useReducer, useMemo} from 'react';
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
import ProductsProvider from './src/tools/ProductContext';
import AuthNavigation from './src/routes/authNavigator/authNavigation';
import AuthContext from './src/tools/AuthContext';
import axios from 'axios';
import { data } from './src/utils/FakeData';

const RootStack = createNativeStackNavigator();

const initialState = {
isLoading :true,
isLoggedIn:false,
userToken:null,
userInfo:null,
};
const reducer = (prevState,action)=>{
  switch (action.type){
     case 'RESTORE_TOKEN_SUCCESS':
      return {
        ...prevState,
        userToken:action.token,
        isLoading:false,
        isLoggedIn:true,
      };
    case 'RESTORE_TOKEN_FAILURE':
      return {
        ...prevState,
        isLoading:false,
        isLoggedIn:false,
      };
      case 'SIGN_IN':
        return {
          ...prevState,
          userToken:action.token,
          isLoggedIn:true,
        };
      case 'SIGN_OUT':
        return {
          ...prevState,
          userToken:null,
          isLoggedIn:false,
        };
      case 'SIGN_UP' :
      return {
        ...prevState,
        isLoading:false,
        isLoggedIn:false,
        userInfo:action.id,
      };
  }
};
const App = ({route})=>{

  const [state,dispatch] = useReducer(reducer,initialState);
  console.log('state',state);
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
  useEffect(()=>{

  },[]);
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
      useEffect(()=>{
        const bootstrapAsync = async()=>{
          let userToken;
          let user;
          try {
            userToken = await AsyncStorage.getItem('token');
          } catch (error) {
              console.log('error',error);
              //error fetching token
          }
          if (userToken !== null)
            {dispatch({type:'RESTORE_TOKEN_SUCCESS',token:userToken});}
          else
             {dispatch({type:'RESTORE_TOKEN_FAILURE'});}
        };
        bootstrapAsync();
      },[]);
      const authContext = useMemo(
         ()=>({
            signIn: async (email,password)=>{
               const response = await axios.post('http://192.168.100.230:8000/signin',{email,password});
              console.log('App singIn', response.data);
              if (response.data.success){
                const userInfo = response.data;
                await AsyncStorage.setItem('token',userInfo.token);

                dispatch({type:'SIGN_IN',token:userInfo.token});
              }
            },
            signOut: async ()=>{
              await AsyncStorage.removeItem('token');
               dispatch({type:'SIGN_OUT'});
            },
            signUp: async (nom,prenom,ville,pays,email,password)=>{
              const response =  await axios.post('http://192.168.100.230:8000/create',{nom,prenom,ville,pays,email,password});
              console.log('app sigUp',response.data);
              if (response.data.success){
                const userInfo = response.data.user;
                console.log('user info ',userInfo.id);
                await AsyncStorage.setItem('idUSer',userInfo.id);
                dispatch({type:'SIGN_UP',id:userInfo.id});
              }
            },
            userToken:state.userToken,
      }),
      [state.isLoggedIn, state.userToken ,state.isLoading,state.userInfo],
      );
return (
    isFirstLaunch !== null && (
      <ProductsProvider>
        <AuthContext.Provider value={authContext}>
      <NavigationContainer>
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
              {
              !state.isLoggedIn ? (
                // <RootStack.Screen name="auth" component={AuthNavigation}/>
                  // AuthNavigation(RootStack)
                    <>
                    <RootStack.Screen name="login" component={LoginScreen} />
                    <RootStack.Screen name="signup" component={SignUpScreen} />
                    <RootStack.Screen name="forgotPassword" component={ForgotPassword} />
                    <RootStack.Screen name="verification" component={Verification} />
                    <RootStack.Screen name="resetPassword" component={ResetPassword} />
                    </>
              ) : (
                <RootStack.Screen name="home" component={TabNavigation}/>
              )}
      </RootStack.Navigator>
      </NavigationContainer>
        </AuthContext.Provider>
      </ProductsProvider>
      )
    // <Provider store={store}>
    //   <Route/>
    //   <FlashMessage position={'top'}/>
    // </Provider>
    );
  };
export default App;
