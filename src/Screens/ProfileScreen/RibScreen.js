/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {lorem} from '../../tools/helper';
import ModalView from '../../components/ModelView';
import RibBox from '../../components/RibBox';
// import {Text} from '../../components/Text';
import LinearGradient from "react-native-linear-gradient";
import IconFeather from 'react-native-vector-icons/Feather';
import axios from 'axios';
import AuthContext from '../../tools/AuthContext';
import {Text}from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
const RibScreen = ({navigation}) => {
  const [visibleOverLay, setVisibleOverLay] = useState(false);
  const [data,setData] = useState([]);
  const [details, setDetails] = useState([]);
  const [user,setUser] = useState();
const [checked, setChecked] = useState(false);
  const {userId} = useContext(AuthContext);
   console.log({ID:userId});
    const [refreshing, setRefreshing] = useState(true);
      const [loading,setLoading] = useState(false);
  const toggleCheckBox = () => {
    setChecked(!checked);
  };
  const handleToggle = () => {
    setVisibleOverLay(!visibleOverLay);
  };
  const loadData = async ()=>{
     console.log({ID:userId});
    try {
    const response = await axios.post('http://192.168.64.48:8000/rib/ribbyuser',{userId});
          console.log({res:response.data.ripUser});
           setData(response.data.ripUser);
           setLoading(false);
    } catch (error) {
      console.log({error});
    }
};
  const loadDataUser = async ()=>{
     console.log({ID:userId});
    try {
    const response = await axios.post('http://192.168.64.48:8000/user/getme',{id:userId});
           setUser(response.data.user);
           setLoading(false);
           console.log({user});
    } catch (error) {
      console.log({error});
    }
};
useEffect(() => {
  loadData();
  loadDataUser();
  // console.log({data1:data.data});
  setLoading(!loading);
  console.log(user);
}, []);
const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => setDetails(item)}>

        <View style={[styles.card, {backgroundColor:"#8961EE"}]}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{width:'40%'}}>
          <Text style={{fontSize: 28, fontWeight: 'bold', color: '#fff'}}>
            {item.banque}
          </Text>
            </View>
            <View style={{width:'35%'}}>
           <Image
              source={require('../../assets/images/visa.png')}
              style={{height: 60, width: 110, resizeMode: 'contain'}}
            />
            </View>
          </View>
          <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              color: '#fff',
              marginVertical: 25,
            }}>
            {item.numero}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 22, fontWeight: 'bold', color: '#fff'}}>
              {item.nom}
            </Text>
            <Text style={{fontSize: 22, fontWeight: 'bold', color: '#fff'}}>
              {item.expDate}
            </Text>
           
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  // return (
  //   <SafeAreaView style={{flex: 1, backgroundColor: 'grey', padding:10}}>
  //     
      
  //     <ModalView
  //       visible={visibleOverLay}
  //       handleToggle={handleToggle}
  //       checked={checked}
  //       toggleChecked={toggleCheckBox}
  //       />
  //   <View style={styles.icon}>
  //       <IconFeather
  //         name="plus"
  //         size={24}
  //         color="white"
  //         onPress={() => {
  //           setVisibleOverLay(!visibleOverLay);
  //         }}
  //       />
  //   </View>
  //   </SafeAreaView>



  // );
   return (
    <View style={styles.conatiner}>
      <View >
        <FlatList
          horizontal
          data={data}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={{ padding: 17 }}
        />
      </View>
<ModalView
        visible={visibleOverLay}
        handleToggle={handleToggle}
        checked={checked}
        toggleChecked={toggleCheckBox}
        navigation={navigation}
        />
      <View style={{paddingHorizontal: 30}}>
        <Text style={styles.textLabel}>Card Number</Text>
        <View style={styles.textView}>
          <Text style={styles.text}>{details.numero}</Text>
        </View>
        <Text style={styles.textLabel}>Nom</Text>
        <View style={styles.textView}>
          <Text style={styles.text}>{details.nom}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{width:'40%'}}>
            <Text style={styles.textLabel}>Expiry date</Text>
            <View style={[styles.textView]}>
              <Text style={styles.text}>{details.expDate}</Text>
            </View>
          </View>
          <View style={{width:'45%'}}>
            <Text style={styles.textLabel}>CVV</Text>
            <View style={[styles.textView]}>
              <Text style={styles.text}>{details.key}</Text>
            </View>
          </View>
        </View>
      <View style={styles.icon}>
      <IconFeather
        name="plus"
        size={24}
        color="white"
        onPress={() => {
          setVisibleOverLay(!visibleOverLay);
        }}
      />
  </View>
    <TouchableOpacity style={[styles.textView, {backgroundColor:'#EE2A90', alignItems:'center', marginVertical:30}]}>
        <Text style={[styles.text, {color:'#fff'}]}>Modifier</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: '#ED5351',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
    right: 15,
    zIndex: 2,
  },
   header: {
    paddingTop: 50,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
conatiner: {
    flex: 1,
    backgroundColor: '#FBFBFB',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color:"black"
  },
  card: {
    width: 380,
    height: 220,
    borderRadius: 20,
    padding: 20,
     marginRight:20,
    marginHorizontal:-10,
  },
  textLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ccc',
  },
  textView: {
    width: '100%',
    height: 50,
    backgroundColor:'#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    borderRadius: 10,
    marginVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#000'

  },
});
export default RibScreen;
