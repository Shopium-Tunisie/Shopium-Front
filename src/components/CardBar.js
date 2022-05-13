/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import BarcodeScanner from 'react-native-scan-barcode';
const CardBar = (props) => {
  const [visible, setVisible] = useState(false);
  const [scanned,setScanned] = useState(false);
  const [format, setFormat] = useState('CODE128');
  const [loading,setLoading] = useState(false);
  const toggleOverlay = () => {
    setVisible(true);
  };
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <TouchableOpacity onPress={toggleOverlay} style={styles.button}>
                <BarcodeScanner onBarCodeRead={props.onBarCodeRead}
                value={props.value} width={200} height={200}  />
                <Text style={{marginTop:4,fontSize:16}}>{props.value}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    height:200,width:200
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});
export default CardBar;
