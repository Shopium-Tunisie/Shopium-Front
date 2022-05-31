/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View,Text, Animated,Image, ActivityIndicator, Button, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import {Swipeable} from "react-native-gesture-handler";
const marginBottomItem = 20;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;
const Notification = (props) => {
  let prevOpenedRow;
  let row:Array< any >= [];
  const [data,setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const Yscroll = React.useRef(new Animated.Value(0)).current;
  const getAmi = async () =>{
    try {
        const id = await AsyncStorage.getItem('userId');
            console.log({useid:id});
            const response = await axios.post('http://192.168.63.48:8000/user/requestfriend',{id});
            console.log({response:response.data});
            setData(response.data.data);
            console.log(data);
              setIsloading(false);
    } catch (error) {
        console.log(error);
    }
};

const acceptAmi = async()=>{
  try {
    const id = await AsyncStorage.getItem('userId');
    console.log({id});
    const response = await axios.post('http://192.168.64.48:8000/user/accept',{id:id});
      console.log(response);
  } catch (error) {
      console.log(error);
  }
};

    useEffect(() => {
      setIsloading(true);
       getAmi();
        console.log(data);
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
          <Button color="red" onPress={()=>console.log("refuser")} title="DELETE" />
        </View>
      );
    };
     const renderLeftActions = (progress, dragX, onClick) => {
      return (
        <TouchableOpacity onPress={()=>acceptAmi()}>
        <View
          style={{
            marginTop:50,
            alignContent: 'center',
            justifyContent: 'center',
            width: 70,
          }}>
          <Button  color="green" onPress={()=>acceptAmi} title="ACCEPT" />
        </View>
        </TouchableOpacity>
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
          <Text style={styles.text}>{item.prenom} {item.nom}</Text>
        </View>
      </Animated.View>
      </Swipeable>
    );

  };

  return (
    <View style={{flex:1}}>
      <Text
      text={'Consulter Votre Invitation'}
      style={styles.text}
      colorText={'black'}
      />
     {
        isLoading ? <Text style={{color:"black",fontSize:28,fontWeight:'bold',justifyContent:'center',alignItems:'center', marginLeft:'20%',marginTop:'30%'}}> aucune Invitation </Text> : (
          <Animated.FlatList
            data={data}
            keyExtractor={item => `key-${item.id}`}
            renderItem={renderUser}
            contentContainerStyle={{
              padding: 20,
            }}
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
 image: {
    width: 100,
    height: imgHeight,
  },
  wrapText: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  text : {
    color:"black",
    fontSize:20
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
  container: {
    flex: 1,
  },
      paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor:'red',
  },
});
export default Notification;
