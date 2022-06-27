/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Button, StyleSheet, View} from 'react-native';
import React,{useState} from 'react';
import { Text } from '../../components/Text';
import { lorem } from '../../tools/helper';
import BarcodeScanner from 'react-native-scan-barcode';
const EmplacementScreen = () => {
  const [scanned,setScanned] = useState(false);
  const [text, setText] = useState('not yet Scanned');
  const [hasPermission,setHasPermission] = useState(null);
  const cameraType = "back";
  const askForPermissionCamera=async ()=>{} 
  const hadleBarCodeScanner = ({type,data})=>{
    setScanned(true);
    setText(data);
    console.log('Type' + type + '\nData' + data);
  };
return (
    <View style={{flex: 1, backgroundColor: 'white', padding:10}}>
      <Text
        text={lorem}
        containerStyle={{padding: 4, marginVertical: 16}}
        colorText="grey"
        style={{fontSize: 18}}
        />
        <BarcodeScanner
        onBarCodeRead={hadleBarCodeScanner}
        style={{ flex: 1 }}
        torchMode={'off'}
        cameraType={cameraType}
        width={300}
        height={300}
        borderRadius
        />

    <Text
        text={text}
        containerStyle={{padding: 4, marginVertical: 16}}
        colorText="grey"
        style={{fontSize: 18}}
        />
        {scanned && <Button title='scan again' onPress={()=>setScanned(false) } color='blue' /> }
    </View>
  );
};

export default EmplacementScreen;
 const styles = StyleSheet.create({
  box: {
    alignItems:'center',
    justifyContent:'center',
    height:300,
    width:300,
    borderRadius:30,
    overflow:'hidden',
  }
 });