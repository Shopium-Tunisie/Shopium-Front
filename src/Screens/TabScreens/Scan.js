/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Text, StyleSheet, View,ScrollView, Dimensions, FlatList, SafeAreaView, ActivityIndicator, StatusBar, TouchableOpacity} from 'react-native';
import React,{useState,useEffect, useContext,useCallback} from 'react';
import BarcodeScanner from 'react-native-scan-barcode';
import Barcode from 'react-native-barcode-builder';
import axios from 'axios';
import AuthContext from '../../tools/AuthContext';
import { Input } from '../../components/Input';
import { Overlay} from "react-native-elements";
import { Button } from '../../components/Button';
import {API_BASE_URL as URL } from '../../config/urls';
const Scan = (props,{route})=>{
  const [scanned,setScanned] = useState(false);
    const [visible,setVisible] = useState(true);
  const [text, setText] = useState('b');
  const [format, setFormat] = useState('CODE128');
  const [dataC,setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [user,setUser] = useState({});
  const [nom,setNom] = useState('');
    const [refreshing, setRefreshing] = useState(true);
  const cameraType = 'back';
  const {userToken,userId} = useContext(AuthContext);
    console.log({userId:userId});
const toggleOverlay = () => {
  setVisible(!visible);
};

const loadData = ()=>{
  console.log({userId1:userId});
  axios.post(`${URL}/cart/getByUserId`,{userId:userId})
             .then((res)=>{
              setData(res.data.carte);
              console.log(res.data.carte);
              setRefreshing(false);
              });
};
useEffect(()=>{
  setLoading(true);
  loadData();
},[]);
  const hadleBarCodeScanner = async({type,data})=>{
    try {
      setScanned(true);
      setText(data);
      console.log('before add');
      await axios.post(`${URL}/cart/add`,{userId:userId,data:data,nom:nom});
      await axios.post(`${URL}/cart/getByUserId`,{userId})
             .then((res)=>{
              setData(res.data.carte);
              console.log({CARD:res.data.carte});
              setRefreshing(false);
              setScanned(false)
              });
      console.log('Type' + type + '\nData' + data);
      console.log(dataC);
    } catch (error) {
      console.log({error:error});
    }
  };
  return (
    <SafeAreaView style={styles.container}>
       <Text style={{fontSize: 26,color:'black',margin:20,fontWeight:"bold",marginBottom:20}}>
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
              <View style={{backgroundColor:'white'}}>
                <Input placeholder={'Saisie votre magasin'} inputTextColor={'black'} placeholderTextColor={'grey'} onChangeText={(nom)=>setNom(nom)} value={nom}/>
              </View>
            </TouchableOpacity>
          )
          :
         (
                <Button text="Scanner Votre Carte " theTextColor={"white"}  onPress={() => setScanned(true)} size={'large'} style={{height:50}} />
           )
          }
          <ScrollView style={{marginTop:50}}>
          {
            dataC.map( item =>
          // <Overlay isVisible={visible} onBackdropPress={toggleOverlay} >
                 
              < View style={{backgroundColor:'white' ,borderRadius:10,borderWidth:1,justifyContent:'center',borderColor:'black'}}>
                <View style={{padding:5,alignItems:'center'}} >
              <Text key={`key- ${item._id}`} style={{color:'red',position:'relative' , justifyContent:'center',fontSize:18,fontWeight:'bold'}} >{item.nom}</Text>
               </View>
              <TouchableOpacity onPress={toggleOverlay} key={item.data}>
              <Barcode
                format={format}
                value={item.data}
                text={item.data}
                style={{ marginBottom: 30,marginTop:10 }}
                key={item.data}
                maxWidth={Dimensions.get('window').width / 2}
                 />
              </TouchableOpacity>
                 <View style={{marginBottom:15,marginTop:10}}/>
                </View>

              )}

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
