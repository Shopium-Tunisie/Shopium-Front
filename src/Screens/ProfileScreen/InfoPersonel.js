/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Keyboard, KeyboardAvoidingView, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { height} from '../../utils/Dimension';
import { Formik } from 'formik';
import { Input } from '../../components/Input';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';
export const screenWidth = Math.round(Dimensions.get('window').width);
export const screenHeight = Math.round(Dimensions.get('window').height);
const InfoPersonel = () => {
  return (
    <TouchableWithoutFeedback
    onPress={()=>{Keyboard.dismiss();}}>
      <KeyboardAvoidingView style={styles.container} />
      <Formik>
        <View>
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
                                        // onChangeText={props.handleChange(
                                        //     'firstName'
                                        // )}
                                        value={'farouk'}
                                        autoFocus
                                        // onBlur={props.handleBlur('firstName')}
                                        borderColor="black"
                                        label="Nom"
                                        labelContainerStyle={{
                                            alignSelf: 'flex-start',
                                        }}
                                        style={{ color: 'black' }}
                                    />
                                            <Text
                                                text={'first name error'}
                                                colorText="signUpErr"
                                                style={{ fontSize: 11 }}
                                                containerStyle={{
                                                    alignItems: 'flex-start',
                                                }}
                                            />
                                </View>
                                <View>
                                    <Input
                                        size="normal"
                                        // onChangeText={props.handleChange(
                                        //     'lastName'
                                        // )}
                                        value={'gouadria'}
                                        containerStyle={{ alignSelf: 'center' }}
                                        borderColor="black"
                                        label="Prenom"
                                        labelContainerStyle={{
                                            alignSelf: 'flex-start',
                                        }}
                                        style={{ color: 'black' }}
                                    />
                                            <Text
                                                text={'last name text'}
                                                colorText="signUpErr"
                                                style={{ fontSize: 11 }}
                                                containerStyle={{
                                                    alignItems: 'flex-start',
                                                }}
                                            />

                                </View>
                            </View>
                            <Input
                                size="large"
                                // onChangeText={props.handleChange('country')}
                                borderColor="black"
                                value={'tunisie'}
                                label="Pays"
                                labelContainerStyle={styles.labelStyle}
                                style={{ color: 'black' }}
                            />
                                <Text
                                    text={'country text'}
                                    containerStyle={styles.errorStyle}
                                    style={{ fontSize: 10 }}
                                    colorText="signUpErr"
                                />

                            <Input
                                size="large"
                                // onChangeText={props.handleChange('city')}
                                value={'sousse'}
                                borderColor="black"
                                label="Ville"
                                labelContainerStyle={styles.labelStyle}
                                style={{ color: 'black' }}
                            />

                                <Text
                                    text={'city text'}
                                    colorText="signUpErr"
                                    style={{ fontSize: 11 }}
                                    containerStyle={styles.errorStyle}
                                />

                            <Input
                                size="large"
                                // onChangeText={props.handleChange('email')}
                                keyboardType="email-address"
                                value={'gouadriaafar@gmail.Com'}
                                borderColor="black"
                                label="Email"
                                labelContainerStyle={styles.labelStyle}
                                style={{ color: 'black' }}
                            />

                                <Text
                                    text={'email text'}
                                    colorText="signUpErr"
                                    style={{ fontSize: 11 }}
                                    containerStyle={styles.errorStyle}
                                />

                            <View style={styles.buttonContainer}>
                                <Button
                                    theTextColor="white"
                                    text="Submit"
                                    size="large"
                                    style={styles.button}
                                    onPress={console.log('update')}
                                />
                            </View>
                        </View>
      </Formik>

      </TouchableWithoutFeedback>
  );
};

export default InfoPersonel;
const styles = StyleSheet.create({
  container: {
        height: screenHeight,
        width: screenWidth,
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
