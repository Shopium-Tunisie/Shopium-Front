/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Keyboard, KeyboardAvoidingView, StyleSheet, Dimensions, Alert} from 'react-native';
import React, { useContext, useState,useEffect } from 'react';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { height, width} from '../../utils/Dimension';
import { Formik } from 'formik';
import { Input } from '../../components/Input';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';
import axios from 'axios';
const URL = "http://192.168.155.145:8000";
import AuthContext from '../../tools/AuthContext';
export const screenWidth = Math.round(Dimensions.get('window').width);
export const screenHeight = Math.round(Dimensions.get('window').height);
const InfoPersonel = ({navigation,route}) => {
    const {userToken,userId} = useContext(AuthContext);
    const { user } = route.params;
    const getDetails = (type)=>{
        if (route.params){
            switch (type){
                case 'nom':
                return user.nom;
                 case 'prenom':
                return user.prenom;
                 case 'ville':
                return user.ville;
                 case 'pays':
                return user.pays;
                 case 'email':
                return user.email;
            }
        }
        return '';
    };
    const [nom,setNom] = useState(getDetails('nom'));
    const [prenom,setPrenom] = useState(getDetails('prenom'));
    const [ville,setVille] = useState(getDetails('ville'));
    const [pays,setPays] = useState(getDetails('pays'));
    console.log(user._id);
    const UpdateUsers = {
        id:userId,
        nom:nom,
        prenom:prenom,
        ville:ville,
        pays:pays,
    };
    console.log({id:UpdateUsers.id});
    console.log({UpdateUsers:UpdateUsers});
    const updateUser = async ()=>{
        try {
            const updateProfile = await axios.put(`${URL}/user/update`,{id:userId,nom:UpdateUsers.nom,prenom:prenom,ville:ville,pays:pays});
            if (updateProfile){
                console.log(updateProfile.data);
                alert('Success',{
                    cancelable: true,
                    onDismiss: () =>
                    Alert.alert(
                    'This alert was dismissed by tapping outside of the alert dialog.'
                    ),
                });
                navigation.navigate('profile',{user:user});
            } else {
                console.log('error');
            }
        } catch (error) {
            console.log({error:error});
        }
    };
    const loadData = async ()=>{
  try {
  const response = await axios.post(`${URL}/user/getMe`,{id:userId});
        console.log({resUpdateUser:response.data.user});
        setNom(response.data.user.nom);
        setPrenom(response.data.user.prenom);
        setVille(response.data.user.ville);
        setPays(response.data.user.pays);
  } catch (error) {
    console.log({error});
  }
};
    useEffect(() => {
        loadData();
    }, [])
    return (
    <ScrollView style={{backgroundColor:'#EFEDEC'}}
    onPress={()=>{Keyboard.dismiss();}}>
      <KeyboardAvoidingView style={styles.container} />
        <Text text={'Modifier Votre Profile'} colorText={"black"} style={styles.title} />
        <View style={{backgroundColor:'#EFEDEC',padding:15}}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',

                                    width: '95%',
                                    alignSelf: 'center',
                                }}
                            >
                                <View>
                                    <Input
                                        size="normal"
                                        onChangeText={(nom)=>setNom(nom)
                                        }
                                        value={nom}
                                        borderColor="black"
                                        label="Nom"
                                        labelColor={'red'}
                                        labelContainerStyle={{
                                            alignSelf: 'flex-start',
                                        }}
                                        style={{ color: 'black' }}
                                    />
                                </View>
                                <View>
                                    <Input
                                        size="normal"
                            
                                        value={prenom}
                                        onChangeText={(prenom)=>setPrenom(prenom)
                                        }
                                        containerStyle={{ alignSelf: 'center' }}
                                        borderColor="black"
                                        label="Prenom"
                                           labelColor={'red'}
                                        labelContainerStyle={{
                                            alignSelf: 'flex-start',
                                        }}
                                        style={{ color: 'black' }}
                                    />

                                </View>
                            </View>
                            <Input
                                size="large"
                               onChangeText={(ville)=>setVille(ville)
                                        }
                                borderColor="black"
                                value={ville}
                                label="Pays"
                                labelColor={'red'}
                                labelContainerStyle={styles.labelStyle}
                                style={{ color: 'black' }}
                            />
                            <Input
                                size="large"
                                onChangeText={(pays)=>setPays(pays)
                                         }
                                value={pays}
                                borderColor="black"
                                label="pays"
                                labelColor={'red'}
                                labelContainerStyle={styles.labelStyle}
                                style={{ color: 'black' }}
                            />
                            <Input
                                size="large"
                                keyboardType="email-address"
                                value={user.email}
                                borderColor="black"
                                label="Email"
                                labelColor={'red'}
                                labelContainerStyle={styles.labelStyle}
                                style={{ color: 'black' }}
                            />
                            <View style={styles.buttonContainer}>
                                <Button
                                    theTextColor="white"
                                    text="Submit"
                                    size="large"
                                    style={styles.button}
                                    onPress={()=>updateUser()}
                                />
                                <View style={{marginTop:10}}>
                                 <Button
                                    theTextColor="white"
                                    text="Profile"
                                    size="large"
                                    style={styles.button}
                                    onPress={()=>navigation.push('profile1',{user:user})}
                                />
                                </View>
                            </View>
                              <View style={{marginTop:130 ,position:'relative'}} />
        </View>
      </ScrollView>
  );
};

export default InfoPersonel;
const styles = StyleSheet.create({
  container: {
        height: screenHeight * 0.11,
        backgroundColor: 'EFEDEC',
        flex:1,
        borderRadius:20,
    },
    button: {
        height: height * 0.08,
    },
    buttonContainer: {
        height: height / 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorStyle: {
        width: '94%',
        alignItems: 'flex-start',
        alignSelf: 'center',
    },
    labelStyle: {
        alignSelf: 'flex-start',
        marginLeft: '2.5%',
    },
    title:{
       fontSize: 30,
       lineHeight: 30,
       fontWeight: '700',
       textTransform: 'capitalize',
       fontStyle: 'normal',
       alignItems: 'center',
       textAlign: 'center',
       marginTop: -50,
    }
});
