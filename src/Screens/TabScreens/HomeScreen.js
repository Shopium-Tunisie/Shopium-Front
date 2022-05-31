/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React,{Fragment, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Offre from '../../components/Offre';
import TopNavigation from '../../routes/TabNavigation/TopNavigation';
const HomeScreen = ({navigation})=> {
    const [promoMessage, setPromoMessage] = useState(true);
return (
    <SafeAreaView style={styles.container}>
            <View style={styles.navbar}>
                <Icon name="menu-outline" style={styles.menu_icon}size={30}  />
                <Image source={require('../../assets/images/logoHome.png')} resizeMode="contain" style={styles.logo} />
                <Icon name="notifications" style={styles.notification} size={30} />
            </View>
            <View>
                        <Offre
                            navigation={navigation}
                            setPromoMessage={setPromoMessage}
                        />
            </View>
                    <View style={styles.tabs}>
                    <TopNavigation />
                </View>
    </SafeAreaView>
    );
    };
    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:'#FFFFFF',
            paddingTop:20,
        },
        navbar:{
            flexDirection:'row',
            paddingHorizontal:15,
            paddingVertical:10,
            justifyContent:'space-between',
            alignItems:'center',
        },
        menu_icon:{
            width:50,
            color:'black',
        },
        title:{
            fontSize:26,
            fontWeight:'bold',
            color:'#000000',
        },
        notification:{
            width:50,
            color:'black',
        },
        logo:{
            width:172,
            height:36,

        },
        tabs: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            
        },

    });
export default HomeScreen;
