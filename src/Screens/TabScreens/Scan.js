/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Button,Text, StyleSheet, View,ScrollView, Dimensions, FlatList, SafeAreaView, ActivityIndicator, StatusBar, TouchableOpacity} from 'react-native';
import React,{useState,useEffect, useContext,useCallback} from 'react';
import BarcodeScanner from 'react-native-scan-barcode';
import Barcode from 'react-native-barcode-builder';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../tools/AuthContext';
const Scan = (props,{route})=>{
  const [scanned,setScanned] = useState(false);
    const [visible,setVisible] = useState(false);
  const [text, setText] = useState('b');
  const [format, setFormat] = useState('CODE128');
  const [dataC,setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [user,setUser] = useState({});
    const [refreshing, setRefreshing] = useState(true);
  const cameraType = 'back';
  const {userToken,userId} = useContext(AuthContext);
    console.log({userId:userId});
const toggleOverlay = () => {
  setVisible(!visible);
};
const loadData = ()=>{
  console.log({userId1:userId});
  axios.post('http://192.168.64.48:8000/cart/getByUserId',{userId:userId})
             .then((res)=>{
              setData(res.data.carte);
              console.log(res.data.carte);
              setRefreshing(false);
              });
};
// const get = ()=>{
//   axios.get('http://192.168.4.230:8000/cart/all')
//              .then((res)=>{
//               setData(res.data.cart);
//               console.log(res.data.cart);
//               });
// };
useEffect(()=>{
  setLoading(true);
  loadData();
},[]);
  const hadleBarCodeScanner = async({type,data})=>{
    try {
      setScanned(false);
      setText(data);
      console.log('before add');
      await axios.post('http://192.168.64.48:8000/cart/add',{userId:userId,data:data});
      await axios.post('http://192.168.64.48:8000/cart/getByUserId',{userId})
             .then((res)=>{
              setData(res.data.carte);
              console.log({CARD:res.data.carte});
              setRefreshing(false);
              });
      console.log('Type' + type + '\nData' + data);
      console.log(dataC);
    } catch (error) {
      console.log({error:error});
    }
  };
  return (
    <SafeAreaView style={styles.container}>
       <Text style={{fontSize: 18,color:'black',margin:20}}>
         Scanner Votre Carte de Fidélité
       </Text>
        { scanned ? (
            <TouchableOpacity onPress={()=>toggleOverlay }>
              <BarcodeScanner style={styles.box}
              onBarCodeRead={hadleBarCodeScanner}
              torchMode={'off'}
              cameraType={cameraType}
              width={200}
              height={200}
              borderRadius={'50%'}
              />
            </TouchableOpacity>
          )
          :
         ( <Button title="scan again" onPress={() => setScanned(true)} color="blue" /> )
          }
          <ScrollView>
          {
            dataC.map( item =>
              <Barcode
                format={format}
                value={item.data}
                text={item.data}
                style={{ marginBottom: 40 }}
                key={item._id}
              maxWidth={Dimensions.get('window').width / 2}
              />)
          }
          </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems:'center',
    // justifyContent:'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  box: {
    alignItems:'center',
    justifyContent:'center',
    height:200,
    width:200,
    borderRadius:30,
    overflow:'hidden',
    color:'red',
  },
  button: {
    color:'red',
    height:50,
    width:50,

  },
});
export default Scan;
