/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable no-catch-shadow */
/* eslint-disable no-alert */
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {Input} from '../../components/TextInput';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import Validations from '../../utils/Validations';
import { showError, showSuccess } from '../../tools/helperFunction';
// import actions from '../../Redux/actions';
import TabNavigation from '../../routes/TabNavigation/tabNavigation';
import AuthContext from '../../tools/AuthContext';


const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading,setIsLoading] = useState(false);
  const {signIn} = useContext(AuthContext);

  //   const updateState = (data) => setState(() => ({ ...state, ...data }));
  const isValidData = ()=>{
    const error = Validations({email,password});
    if (error){
      showError(error);
      return false;
    }
    return true;
  };

  // const handleSubmit = async () => {
  //   try {
  //       const ckeckValid = isValidData();
  //       if (ckeckValid){
  //         setIsLoading(true);
  //               const res = await actions.login({
  //                 email,
  //                 password,
  //               });
  //               if (res){
  //                 showSuccess('login Successfully');
  //                 console.log('res ===>>>>>',res);
  //                   setIsLoading(false);
  //               } else {
  //                  console.log('error raised');
  //             showError(error);
  //             setIsLoading(false);
  //               }
  //               // await props.navigation.navigate('home')
  //         }
  //       } catch ( error ) {
  //         console.log(error)
  //   }
  // };
  const onLogin = async () => {
        const checkValid = isValidData();
        if (checkValid) {
             setIsLoading(true);
          try {
                // const res = await actions.login({
                //     email,
                //     password,
                // });
                  console.log('res==>>>>>', res);
                  setIsLoading(false);
                  showSuccess('login successfully');
                  await navigation.navigate('home');
            } catch (error) {
                console.log('error raised');
                showError(error.message);
                setIsLoading(false);

            }

            // navigation.navigate('Signup')
        }
    };
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Se Connecter</Text>
        {/* <Text style={{margin: 20, textAlign: 'center'}}>{message}</Text> */}
        <View>
          <Input
            placeholder="Email"
            iconName="email"
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
          />
          <Input
            placeholder="Password"
            // iconName="lock-outline"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secure={true}
          />
          <Text onPress={()=>navigation.navigate('forgotPassword')}
            style={{
              textAlign: 'right',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 18,
              fontSize: 16,
              marginBottom: 40,
            }}>
            Mot de passe oublié ?
          </Text>
           {/* <Button title="Se Connecter" onPress={handleSubmit} /> */}
          <ButtonWithLoader text={'Se Connecter'} onPress={()=>signIn(email,password)} isLoading={isLoading} />
          <Text
            onPress={() => navigation.navigate('signup')}
            style={{
              color: '#ffffff',
              fontSize: 16,
              fontStyle: 'normal',
              fontWeight: '400',
              alignItems: 'center',
              lineHeight: 18,
              textAlign: 'center',
              marginTop: 30,
            }}>
            Vous n’avez pas encore un compte ? Créer un compte
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FF6B6B',
    flex: 1,
  },
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    color: 'white',
    fontSize: 30,
    lineHeight: 35,
    fontWeight: '700',
    textTransform: 'capitalize',
    fontStyle: 'normal',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 40,
  },
});
export default LoginScreen;

// const {data} = await axios.post('http://192.168.78.82:8000/signin',{...user});
// console.log('token : ',data.token);
// let token = data.token;
// if (token != null){
//     await AsyncStorage.setItem('token',token);
//     console.log(token);
// } else {
//          console.log(error?.response?.data);
//         }
//   await props.navigation.replace('home');
//   return {data};
