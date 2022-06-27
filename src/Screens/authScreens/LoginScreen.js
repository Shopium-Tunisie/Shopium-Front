/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable no-catch-shadow */
/* eslint-disable no-alert */
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import { Input } from '../../components/Input';
import ButtonWithLoader from '../../components/ButtonWithLoader';

import AuthContext from '../../tools/AuthContext';
import { Formik } from 'formik';
import * as yup from 'yup';
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading,setIsLoading] = useState(false);
  const {signIn} = useContext(AuthContext);

const loginSchema = yup.object().shape({
  email:yup
  .string()
  .email()
  .required('Champ obligatoire'),
  password:yup
  .string()
  .required(' SVP Saisir vos mot de passe'),
});
    const handleSubmit=values=>{
      console.log(values.email,values.password);
      signIn(values.email,values.password);
    };
  return (
    <Formik
    validationSchema={loginSchema}
    initialValues={{ email: '',password:'' }}
     onSubmit={values => signIn(values.email,values.password)} >
     {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Se Connecter</Text>
        <View>
           <View style={{marginTop:20}}/>
          <Input
            placeholder="Email"
            iconName="email"
            value={values.email}
            onChangeText={handleChange('email')}
            keyboardType="email-address"
            error={touched.email && errors.email}
          />
          <View style={{marginTop:20}}/>
          <Input
            placeholder="Password"
            // iconName="lock-outline"
            value={values.password}
            onChangeText={handleChange('password')}
            secure={true}
            password
            error={touched.password && errors.password}
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
          <ButtonWithLoader text={'Se Connecter'} onPress={()=>handleSubmit()} isLoading={isLoading} />
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
         )}
    
    </Formik>
    
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
