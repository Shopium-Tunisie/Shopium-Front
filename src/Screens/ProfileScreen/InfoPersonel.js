/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Keyboard, KeyboardAvoidingView, StyleSheet, Dimensions} from 'react-native';
import React, { useState } from 'react';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { height, width} from '../../utils/Dimension';
import { Formik } from 'formik';
import { Input } from '../../components/Input';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';
import axios from 'axios';
export const screenWidth = Math.round(Dimensions.get('window').width);
export const screenHeight = Math.round(Dimensions.get('window').height);
const InfoPersonel = ({navigation,route}) => {
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
        id:user._id,
        nom:nom,
        prenom:prenom,
        ville:ville,
        pays:pays,
    };
      console.log({id:UpdateUsers.id});
    console.log({UpdateUsers:UpdateUsers});
    const updateUser = async ()=>{
        try {
            const updateProfile = await axios.put('http://192.168.4.230:8000/user/update',{id:UpdateUsers.id,nom:UpdateUsers.nom,prenom:prenom,ville:ville,pays:pays});
            if (updateProfile){
                // const id = updateProfile.data.id;
                // const user1 = await axios.get('http://192.168.105.230:8000/user/getMe',{id});
                // console.log({user:user1});
                console.log(updateProfile.data);
               
            } else {
                console.log('error');
            }
        } catch (error) {
            console.log({error:error});
        }
    };
  return (
    <ScrollView style={{backgroundColor:'white'}}
    onPress={()=>{Keyboard.dismiss();}}>
      <KeyboardAvoidingView style={styles.container} />
        <View style={{backgroundColor:'#ffffff'}}>
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
                                        // autoFocus
                                        // onBlur={props.handleBlur('firstName')}
                                        borderColor="black"
                                        label="Nom"
                                        labelColor={'red'}
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
                                <View>
                                    <Input
                                        size="normal"
                                        // onChangeText={props.handleChange(
                                        //     'lastName'
                                        // )}
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
                                {/* <Text
                                    text={'country text'}
                                    containerStyle={styles.errorStyle}
                                    style={{ fontSize: 10 }}
                                    colorText="signUpErr"
                                /> */}

                            <Input
                                size="large"
                                // onChangeText={props.handleChange('city')}
                                onChangeText={(pays)=>setPays(pays)
                                         }
                                value={pays}
                                borderColor="black"
                                label="pays"
                                labelColor={'red'}
                                labelContainerStyle={styles.labelStyle}
                                style={{ color: 'black' }}
                            />

                                {/* <Text
                                    text={'city text'}
                                    colorText="signUpErr"
                                    style={{ fontSize: 11 }}
                                    containerStyle={styles.errorStyle}
                                /> */}

                            <Input
                                size="large"
                                // onChangeText={props.handleChange('email')}
                                keyboardType="email-address"
                                value={user.email}
                                borderColor="black"
                                label="Email"
                                labelColor={'red'}
                                labelContainerStyle={styles.labelStyle}
                                style={{ color: 'black' }}
                            />

                                {/* <Text
                                    text={'email text'}
                                    colorText="signUpErr"
                                    style={{ fontSize: 11 }}
                                    containerStyle={styles.errorStyle}
                                /> */}

                            <View style={styles.buttonContainer}>
                                <Button
                                    theTextColor="white"
                                    text="Submit"
                                    size="large"
                                    style={styles.button}
                                    onPress={()=>updateUser()}
                                />
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
        backgroundColor: 'white',
        flexDirection: 'column',
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
});
