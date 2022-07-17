/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, SafeAreaView, ScrollView, StyleSheet, Keyboard} from 'react-native';
import React, { useContext, useState } from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import AuthContext from '../../tools/AuthContext';
import { showSuccess } from '../../tools/helperFunction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessage} from 'react-native-flash-message';

import  * as axios from 'axios';
import Loader from '../../components/Loader';
import {Formik} from 'formik';
import * as yup from 'yup';
import { API_BASE_URL  as URL} from '../../config/urls';
const SignUpScreen = ({route,navigation})=> {
    const [nom,setNom] = useState(null);
    const [prenom, setPreNom] = useState(null);
    const [pays, setPays] = useState(null);
    const [ville, setVille] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
     const [isLoading,setIsLoading] = useState(false);
     const {signUp} = useContext(AuthContext);
    const [errors,setErrors] = useState({});
    const [inputs, setInputs] = React.useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
    ville:'',
    pays:'',
  });
  const SignUpSchema = yup.object().shape({
  email:yup
  .string()
  .email()
  .required('Champ obligatoire'),
  password:yup
  .string()
  .required(' SVP Saisir vos mot de passe')
  .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
    nom:yup
    .string()
    .required('champ obligatoire'),
     prenom:yup
    .string()
    .required('champ obligatoire'),
     pays:yup
    .string()
    .required('champ obligatoire'),
     ville:yup
    .string()
    .required('champ obligatoire'),
});

 const onClickSignup = async() => {
 try {
    setIsLoading(true);
    setTimeout(async function() {
        setIsLoading(false);
        await signUp(nom,prenom,ville,pays,email,password);
        const idUser = await AsyncStorage.getItem('userId');
        console.log({idUser});
        const id = idUser;
         const profile = await axios.post(`${URL}/user/getMe`,{id:idUser});
         console.log({profile:profile.data});
             const userProfile = profile.data;
             showMessage({
                type:'success',
                message:`Bienvenu ${userProfile.nom} ,Verifier votre compte`,
                backgroundColor:'green',
                position:'top',
              });
            navigation.navigate(('verification'),{profile:idUser});
    }, 3000, );
 } catch (error) {
     console.log(error);
 }
};
const validation = ()=>{
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.email){
        handlerError('saisie votre Email','email');
        valid = false;
    } else if (inputs.email.match(/\S+@\S+.\S+/)){
        handlerError('Svp saisie un Email Valide ', 'email');
         valid = false;
        }
    if (!inputs.nom){
        handlerError('saisie votre nom','nom');
        valid = false;
    }
    if (!inputs.prenom){
        handlerError('saisie votre prenom','prenom');
    valid = false;
    }
    if (!inputs.ville){
        handlerError('saisie votre ville','ville');
    valid = false;
    }
    if (!inputs.pays){
        handlerError('saisie votre pays','pays');
    valid = false;
    }
    if (!inputs.password){
        handlerError('saisie votre password','password');
    valid = false;
    } else if (inputs.password.length < 6){
        handlerError('minimum mot de passe est 6 L', 'password');
    valid = false;
}
    if (valid){
    onClickSignup();
    }
};
 const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
const handlerError = (errorMessage,input)=>{
    setErrors((prevState)=>({...prevState,[input]:errorMessage}));
};
const handleSubmit=values=>{
      console.log(email,password,nom,prenom,ville);
      signUp(nom,prenom,ville,pays,email,password);
    };
  return (
    // <Formik
    // validationSchema={SignUpSchema}
    // initialValues={{ email: '',password:'',pays:'',ville:'',nom:'',prenom:'' }}
    //  onSubmit={values => signUp(values.nom,values.prenom,values.ville,values.pays,values.email,values.password)} >
    //      {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
    <SafeAreaView style={styles.root}>
        <Loader visible={isLoading}/>
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Créer un compte</Text>
             <View style={{marginTop:30}}/>
              <View
             style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            alignSelf: 'center',
        }}>
                                <View>
                                    <Input
                                        size="normal"
                                        onChangeText={(nom)=>setNom(nom)}
                                        value={nom}
                                        autoFocus
                                        borderColor="white"
                                        placeholder={'Nom'}
                                        labelContainerStyle={{
                                            alignSelf: 'flex-start',
                                            right:10,
                                        }}
                                            error={errors.nom}
                                            onFocus={()=>{
                                            handlerError(null,'nom');
                                                }}
                                                icon={'email-outline'}
                                    />
                                </View>
                                <View style={{marginLeft:6}}>
                                    <Input
                                        size="normal"
                                        onChangeText={(prenom)=>setPreNom(prenom)}
                                        value={prenom}
                                        containerStyle={{ alignSelf: 'center' }}
                                        borderColor="white"
                                            placeholder={'Prenom'}
                                        labelContainerStyle={{
                                            alignSelf: 'flex-start',
                                        }}
                                        // style={{ color: 'black' }}
                                         error={errors.prenom}
                                        onFocus={()=>{
                                         handlerError(null,'prenom');
                                                }}
                                      icon={'email-outline'}

                                    />
                                </View>
                            </View>
            <View>
                  <Input placeholder="pays"
                   icon="email-outline"
                    value={pays}
                       onChangeText={(pays)=>setPays(pays)}
                      error={errors.pays}
                     onFocus={()=>{
                        handlerError(null,'pays');
                     }} />
                   <Input placeholder="ville"
                    icon="email-outline"
                    value={ville}
                       onChangeText={(ville)=>setVille(ville)}
                      error={errors.ville}
                     onFocus={()=>{
                        handlerError(null,'ville');
                     }}/>
                    <Input
                     placeholder="Email"
                     icon="email-outline"
                     value={email}
                      onChangeText={(email)=>setEmail(email)}
                     error={errors.email}
                     onFocus={()=>{
                        handlerError(null,'email');
                     }}

                     />
                    <Input placeholder="mot de passe"
                     icon="lock-outline"
                     value={password}
                     onChangeText={(password)=>setPassword(password)}
                      error={errors.password}
                      password
                     onFocus={()=>{
                        handlerError(null,'password');
                    }}
                     />
                   <View style={{marginTop:30}}/>
                  <ButtonWithLoader text={'Crée Un Compte'} onPress={()=>onClickSignup()} isLoading={isLoading}/>
                  <View style={{marginTop:30}}>
                  <Text  onPress={() => navigation.navigate('login')} style={{color:'#ffffff',fontSize:16, fontStyle:'normal',fontWeight:'400',alignItems:'center',lineHeight:18, textAlign:'center'}}>Vous avez déja un compte ? Connectez-vous</Text>
                  </View>
            </View>
        </ScrollView>
    </SafeAreaView>
    // )}
    // </Formik>
  );
};

export default SignUpScreen;

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

