/* eslint-disable prettier/prettier */
import {View, Text,Button, ScrollView, StyleSheet, ActivityIndicator, Image, Alert,Animated} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Input } from '../../components/TextInput';
import { Dimensions } from 'react-native';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Swipeable} from 'react-native-gesture-handler';
const URL = "http://192.168.155.145:8000";
const marginBottomItem = 20;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;
const SendInvit = ({route,navigation},props) => {
    const {codee} = route.params;
    console.log(codee);
    const Yscroll = React.useRef(new Animated.Value(0)).current;
    const [data,setData] = useState([]);
    const [codeParrainage,setCode] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const [refreshing, setRefreshing] = useState(true);
let prevOpenedRow;
let row: Array<any> = [];
const getAmi = async () =>{
    try {
        const id = await AsyncStorage.getItem('userId');
            console.log({useid:id});
            const response = await axios.post(`${URL}/user/ami`,{id});
            console.log({response:response.data.data.sendRequest});
            setData(response.data.data);
            setRefreshing(false);
            console.log(data);
            setIsLoading(false);
    } catch (error) {
        console.log(error);
    }
};
const sendRequest = async () =>{
    try {
            const id = await AsyncStorage.getItem('userId');
            console.log({useid:id});
            console.log(codeParrainage);
            const data = await axios.post(`${URL}/user/parrainage`,{codeParrainage,id});
            console.log(data);
            alert('Success',{
                 cancelable: true,
                 onDismiss: () =>
                     Alert.alert(
                    'This alert was dismissed by tapping outside of the alert dialog.'
                    ),
    });
        } catch (error) {
            console.log(error);
        }
    };
    useEffect( () => {
        getAmi();
        setIsLoading(true);
        }, []);

    const renderUser = ({ item, index },onClick) => {
    const scale = Yscroll.interpolate({
      inputRange: [
        -1, 0,
        sizeOfItem * index,
        sizeOfItem * (index + 2),
      ],
      outputRange: [1, 1, 1, 0],
    });
     const closeRow = (index) => {
      console.log('closerow');
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];
    };

    const renderRightActions = (progress, dragX, onClick) => {
      return (
        <View
          style={{
            margin: 0,
            alignContent: 'center',
            justifyContent: 'center',
            width: 70,
          }}>
        </View>
      );
    };
     const renderLeftActions = (progress, dragX, onClick) => {
      return (
        <View
          style={{
            margin: 0,
            alignContent: 'center',
            justifyContent: 'center',
            width: 70,
            height:30
            
          }}>
        </View>
      );
    };
    return (
      <Swipeable
       renderRightActions={(progress, dragX) =>
          renderRightActions(progress, dragX, onClick)
        }
        renderLeftActions={(progress,dragX)=>
          renderLeftActions(progress,dragX,onClick)
        }
        onSwipeableOpen={() => closeRow(index)}
        ref={(ref) => (row[index] = ref)}
        rightOpenValue={-100}
      >
      <Animated.View style={
        [styles.item,
        {
          transform: [{ scale }],
        },
        ]
      }>
      <Image
          style={styles.image}
          source={{ uri: 'http://cdn.onlinewebfonts.com/svg/img_504605.png' }}
          resizeMode="contain"
          contentContainerStyle={{ padding: 20 }}
        />
        <View style={styles.wrapText}>
          <Text style={styles.textItem}>{item.prenom} {item.nom}</Text>
        </View>

      </Animated.View>
      </Swipeable>
    );

  };
   const deleteItem = ({ item, index }) => {
    console.log(item, index);
    let a = data;
    a.splice(index, 1);
    console.log(a);
    setData([...a]);
  };
  return (

        <View style={styles.container}>
            <Text style={styles.text}>
                Inviter Votre Ami avec Code de parrainage
            </Text>
        <Input
        style={styles.input}
            onChangeText={codeParrainage => setCode(codeParrainage)}
            placeholder="code"
            iconName="code"
            label="code"
            value={codeParrainage}
          />
          <ButtonWithLoader
          text={'Envoyer'}
          onPress={()=>sendRequest()}
          />
          {
        isLoading ? <ActivityIndicator /> : (
          <Animated.FlatList
            data={data}
            keyExtractor={item => `key-${item.id}`}
            renderItem={renderUser}
            contentContainerStyle={{ padding: 20 }}
            onScroll={
              Animated.event(
                [{ nativeEvent: { contentOffset: { y: Yscroll } } }],
                { useNativeDriver: true }
              )}


          />
        )
      }
        </View>


  );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',

    },
    input:{
        color:'black',
        borderColor:'black',
        alignContent:'center',
    },
    text:{
        color:'black',
        justifyContent:'center',
        margin:60,
    },
    paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor:'red',
  },
  image: {
    width: 100,
    height: imgHeight,
  },
  wrapText: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },

  item: {
    flexDirection: 'row',
    marginBottom: marginBottomItem,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 30,
    padding: paddingItem,
  },
  textItem:{
      fontSize: 20,
      color:'black',
  },
});
export default SendInvit;
