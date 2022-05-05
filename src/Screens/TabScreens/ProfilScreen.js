/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet, ScrollView, Modal, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconFont5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconMaterialComm from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderUserProfil from '../../components/HeaderUserProfil';
import Description from '../../components/Descreption';
import ProfilBottomBtn from '../../components/ProfilBottomBtn';
import SheetButton from '../../components/SheetButton';
import { height } from '../../utils/Dimension';
import AuthContext from '../../tools/AuthContext';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ProfilScreen =  ({navigation,route}) => {
    const {userToken} = useContext(AuthContext);
    console.log(userToken);
    const [user,setUser] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
    const functionCombined = (x) => {
        setModalVisible(!modalVisible);
        navigation.navigate(x);
    };
    const functionCombinedSecond = () => {
        setModalVisible(!modalVisible);
    };
    const { data, error, loading } = useState('');
        useEffect(()=>{
            const userInfo = async()=>{
                 let userInf;
                 try {
                     const token = await AsyncStorage.getItem('token');
                      console.log(token);
                      const response = await axios.post('http://192.168.1.4:8000/user/me',{token});
                    //   console.log(response.data.user);
                      if (!response){
                          console.log('error');
                      } else {
                          userInf = response.data.user;
                            setUser(userInf);
                          console.log(userInf);
                      }
                 } catch (error1) {
                    console.log(error1);
                 }
                //  console.log('user', response);
                //  setUser(response);
             };
             userInfo();
        },[]);
  return (
       <ScrollView
       bounces={false}
       showsVerticalScrollIndicator={false}
       style={{ backgroundColor: 'white' }}
    >
    <View style={styles.container}>
                    <Fragment>
                        <View >
                            <HeaderUserProfil
                                onPress={() => navigation.navigate('parametre',{user:user})}
                                email={user.email}
                                nom={user.nom}
                                prenom={user.prenom}
                            />
                        </View>
                        <View style={[styles.secondChild]}>
                            <View
                                style={{
                                    flex: 0.9,
                                    marginVertical: 6,
                                    marginHorizontal: 6,
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-evenly',
                                    fontSize:23,
                                    fontWeight:'600',
                                }}
                            >
                                <View style={styles.iconStyle}>
                                    <IconFont5
                                        name="hand-holding-usd"
                                        size={50}
                                        color="orange"
                                    />
                                    <Description
                                        title={'130dt'}
                                        titleColor="black"
                                        description={'Remboursement'}
                                        descriptionColor="grey"
                                        distant
                                        distance={6}
                                        titleStyle={{fontSize:27,fontWeight:'900'}}
                                    />
                                </View>
                                <View style={styles.iconStyle}>
                                    <Icon
                                        name="shopping-bag"
                                        size={50}
                                        color="red"
                                    />
                                    <Description
                                        title={'16'}
                                        titleColor="black"
                                        titleStyle={{fontSize:27,fontWeight:'900'}}
                                        description={'achat'}
                                        descriptionColor="grey"
                                        distant
                                        distance={6}
                                    />
                                </View>
                                <View style={styles.iconStyle}>
                                    <IconFont
                                        name="thumbs-o-up"
                                        size={50}
                                        color="cadetblue"
                                    />
                                    <Description
                                        title={'5'}
                                        titleColor="black"
                                        description={'Avis'}
                                        descriptionColor="grey"
                                        distant
                                        distance={6}
                                        titleStyle={{fontSize:27,fontWeight:'900'}}
                                    />
                                </View>
                                <View style={[styles.iconStyle,{fontSize:40,fontWeight:'400'}]}>
                                    <IconFont5
                                        name="toolbox"
                                        size={50}
                                        color="pink"
                                    />
                                    <Description
                                        title={'30dt'}
                                        titleColor="black"
                                        description={'cagnotte'}
                                        descriptionColor="grey"
                                        distant
                                        distance={6}
                                        titleStyle={{fontSize:27,fontWeight:'900'}}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.thirdChild}>
                            <ProfilBottomBtn
                                icon={require('../../assets/images/password.png')}
                                title="Saisir un code"
                                description="Lorem ispsps"
                                onPress={() => {
                                    navigation.navigate('EnterCode');
                                }}
                            />
                            <ProfilBottomBtn
                                icon={require('../../assets/images/addUser.png')}
                                title="Parrainer avec un ami"
                                description="Lorem ispsps"
                                onPress={() => {
                                    navigation.navigate('Parrainer');
                                }}
                            />

                            <ProfilBottomBtn
                                icon={require('../../assets/images/refund.png')}
                                title="Demande de remboursement"
                                description="Lorem ispsps"
                                onPress={() => {
                                    navigation.navigate('Rembourser');
                                }}
                            />
                        </View>

                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() =>
                                console.log('Modal has been closed.')
                            }
                        >
                            <TouchableOpacity
                                activeOpacity={1}
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    backgroundColor: 'transparent',
                                }}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <View
                                    style={{
                                        width: '100%',
                                        position: 'absolute',
                                        bottom: 0,
                                        backgroundColor: '#e64747',
                                        borderTopEndRadius: 26,
                                        borderTopLeftRadius: 26,
                                        padding: 0,
                                    }}
                                >
                                    <View style={{ marginBottom: 5 }}>
                                        <SheetButton
                                            text="Paramètres avancés"
                                            onPress={() =>
                                                functionCombined('Parametres')
                                            }
                                            innerIcon={() => (
                                                <Icon
                                                    name="settings"
                                                    size={24}
                                                    color="black"
                                                />
                                            )}
                                        />
                                        <SheetButton
                                            onPress={() =>
                                                functionCombined('ChangePass')
                                            }
                                            text="Changer le mot de passe"
                                            innerIcon={() => (
                                                <Icon
                                                    name="key-change"
                                                    size={24}
                                                    color="black"
                                                />
                                            )}
                                        />
                                        <SheetButton
                                            onPress={() =>
                                                functionCombinedSecond()
                                            }
                                            text="Déconnectez-vous"
                                            innerIcon={() => (
                                                <Icon
                                                    name="sign-out"
                                                    size={24}
                                                    color="black"
                                                />
                                            )}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </Modal>
                    </Fragment>

                    {/* <View
                        style={{
                            flex: 1,
                            marginTop: height / 2,
                        }}
                    >
                        <ActivityIndicator size="large" />
                    </View> */}

    </View>
    </ScrollView>
  );
};

export default ProfilScreen;
const styles = StyleSheet.create({
  container: {
      backgroundColor: 'white',
  },
  iconStyle: {
    width: 159,
    height: 137,
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: '#EDEDED',
    alignItems: 'center',
    marginVertical: 4,
    borderRadius:10,
  },
  firstChild: {
    backgroundColor: '#e64747',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 4,
  },
  secondChild: {
    backgroundColor: 'white',
  },
  thirdChild: {
    flexDirection: 'column',
  },
});
