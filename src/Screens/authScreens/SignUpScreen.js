/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React, { useContext, useState } from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import AuthContext from "../../tools/AuthContext";
import { showSuccess } from '../../tools/helperFunction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessage} from "react-native-flash-message";
import axios from 'axios';
const SignUpScreen = ({route,navigation})=> {
    const [nom,setNom] = useState(null);
    const [prenom, setPreNom] = useState(null);
    const [pays, setPays] = useState(null);
    const [ville, setVille] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
     const [isLoading,setIsLoading] = useState(false);
     const {signUp} = useContext(AuthContext);

// onClickSignup = async ()=>{
//   if (email === '' && password === '' && nom === '' && preNom === '' && pays === '' && ville === ''){
//         ToastAndroid.show('Please fill in your credential',ToastAndroid.SHORT);
//   }
  let user = {
      nom:nom,
      prenom:prenom,
      ville:ville,
      pays:pays,
      email:email,
      password:password,
  };
 const onClickSignup = async() => {
 try {
    await signUp(nom,prenom,ville,pays,email,password);
    const idUser = await AsyncStorage.getItem('idUSer');
    console.log(idUser);
    const id = idUser;
     const profile = await axios.post('http://192.168.105.230:8000/user/getMe',{id});
     console.log(profile.data);
     const userProfile=profile.data;
     showMessage({
        type:'success',
        message:`Bienvenu ${userProfile.nom} ,Verifier votre compte`,
        backgroundColor:'green',
        position:'top',
      });
    navigation.navigate(('verification'),{profile:userProfile});
 } catch (error) {
     console.log(error);
 }
};
  return (
    <SafeAreaView style={styles.root}>
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Créer un compte</Text>
             <View style={{marginTop:30}}/>
              <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',

                                    width: '100%',
                                    alignSelf: 'center',
                                }}
                            >
                                <View>
                                    <Input
                                        size="normal"
                                        onChangeText={(nom)=>setNom(nom)}
                                        value={nom}
                                        autoFocus
                                        // onBlur={props.handleBlur('firstName')}
                                        borderColor="white"
                                        placeholder={"Nom"}
                                        labelContainerStyle={{
                                            alignSelf: 'flex-start',
                                        }}
                                        style={{ color: 'black' }}
                                    />
                                          {/* verification input value */}
                                            {/* <Text
                                                text={'first name error'}
                                                colorText="signUpErr"
                                                style={{ fontSize: 11 }}
                                                containerStyle={{
                                                    alignItems: 'flex-start',
                                                }}
                                            /> */}
                                </View>
                                <View style={{marginLeft:10}}>
                                    <Input
                                        size="normal"
                                        onChangeText={prenom=>setPreNom(prenom)}
                                        value={prenom}
                                        containerStyle={{ alignSelf: 'center' }}
                                        borderColor="white"
                                            placeholder={"Prenom"}
                                        labelContainerStyle={{
                                            alignSelf: 'flex-start',
                                        }}
                                        style={{ color: 'black' }}
                                    />
                                            {/* <Text
                                                text={'last name text'}
                                                colorText="signUpErr"
                                                style={{ fontSize: 11 }}
                                                containerStyle={{
                                                    alignItems: 'flex-start',
                                                }}
                                            /> */}

                                </View>
                            </View>
            {/* <View Style={[styles.user]}>
                <Input placeholder="nom" iconName="email-outline" value={nom} onChangeText={nom=>setNom(nom)}/>
                 <Input placeholder="prenom" iconName="email-outline" value={prenom} onChangeText={prenom=>setPreNom(prenom)}/>
                </View> */}
            <View>
                  <Input placeholder="pays" iconName="email-outline" value={pays} onChangeText={pays=>setPays(pays)} />
                   <Input placeholder="ville" iconName="email-outline"value={ville} onChangeText={ville=>setVille(ville)}/>
                    <Input placeholder="Email" iconName="email-outline"value={email} onChangeText={email=>setEmail(email)}/>
                    <Input placeholder="mot de passe" iconName="lock-outline"value={password} onChangeText={password=>setPassword(password)}/>
                   <Input placeholder="confirmer mot de passe" iconName="lock-outline"/>
                   <View style={{marginTop:30}}/>
                  <ButtonWithLoader text={'Crée Un Compte'} onPress={()=>onClickSignup()} isLoading={isLoading}/>
                  <View style={{marginTop:30}}>
                  <Text  onPress={() => navigation.navigate('login')} style={{color:'#ffffff',fontSize:16, fontStyle:'normal',fontWeight:'400',alignItems:'center',lineHeight:18, textAlign:'center'}}>Vous avez déja un compte ? Connectez-vous</Text>
                  </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    root:{
        backgroundColor:'#FFA0F2',
        flex:1,
    },
    container:{
        paddingTop:30,
        paddingHorizontal:20,
    },
    title:{
        color:'white',
        fontSize:30,
        lineHeight:35,
        fontWeight:'700',
        textTransform:'capitalize',
        fontStyle:'normal',
    },
    user:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#ffffff',
    },
});

export default SignUpScreen;
