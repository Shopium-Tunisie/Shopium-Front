/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import React, { useContext, useState } from 'react';
import {StyleSheet, View} from 'react-native';
import {CheckBox, Overlay, Rating} from 'react-native-elements';
import Icon from 'react-native-vector-icons/EvilIcons';
import AuthContext from '../tools/AuthContext';
import {Button} from './Button';
import {Input} from './Input';
import {Text} from './Text';

const ModalView = ({visible, handleToggle, toggleChecked, checked,navigation}) => {
  const {userToken, userId} = useContext(AuthContext);
  const [numero,setNumero] = useState(null);
  const [nom, setNom] = useState(null);
  const [banque, setBanque] = useState(null);
  const [date, setDate] = useState(null);
  const [cvv, setCvv] = useState(null);
console.log({userId: userId});
console.log({userToken: userToken});
  const loadData = async ()=>{
     console.log({ID:userId});
    try {
    const response = await axios.post('http://192.168.64.48:8000/rib/ribbyuser',{userId});
          console.log({res:response.data.ripUser});
    } catch (error) {
      console.log({error});
    }
};
  const AddRib = async()=>{
    try {
      const addRib = await axios.post('http://192.168.64.48:8000/rib/add',{userId:userId,numero:numero,key:cvv,nom:nom,banque:banque,expDate:date});
      if (!addRib){
      } else {
        console.log(addRib.data);
      }
      await loadData();
      navigation.goBack();
    } catch (error) {
    console.log(error);
    }
  };
  return (
    <Overlay
      isVisible={visible}
      overlayStyle={{
        height: 400,
        width: 310,
        borderRadius: 6,
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          height: '100%',
        }}>
        <Icon
          name="close"
          size={24}
          color="black"
          onPress={handleToggle}
          style={{position: 'absolute', right: 4, top: 8}}
        />
        <Text
          text="Ajouter Votre RIB"
          weight="bold"
          colorText={'black'}
          style={{fontSize: 22}}
          containerStyle={{
            width: '70%',
            alignSelf: 'center',
            marginBottom: 10,
          }}
        />

        <Input
          placeholder="RIB"
          inputTextColor="black"
          placeholderTextColor='red'
           borderColor={"black"}
          style={{
            backgroundColor: '#F2F2F2',
            justifyContent: 'flex-start',
          }}
          
         onChangeText={(numero)=>setNumero(numero)}
        />
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <View style={{width:'30%'}}>
         <Input
          placeholder="Banque"
           borderColor={"black"}
           placeholderTextColor='red'
          inputTextColor="black"
          style={{
            backgroundColor: '#F2F2F2',
            justifyContent: 'flex-start',
          }}
          
         onChangeText={(banque)=>setBanque(banque)}
        />
         </View>
         <View style={{width:'70%'}}>
        <Input
          placeholder="Nom"
           borderColor={"black"}
           placeholderTextColor='red'
          inputTextColor="black"
          style={{
            backgroundColor: '#F2F2F2',
            justifyContent: 'flex-start',
          }}
          
         onChangeText={(nom)=>setNom(nom)}
        />
         </View>
        </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <View style={{width:'70%'}}>
         <Input
          placeholder="Exp Date"
           placeholderTextColor='red'
          inputTextColor="black"
           borderColor={"black"}
          style={{
            backgroundColor: '#F2F2F2',
            justifyContent: 'flex-start',
           
          }}
          
         onChangeText={(date)=>setDate(date)}
        />
         </View>
         <View style={{width:'30%'}}>
        <Input
          placeholder="CVV"
           borderColor={"black"}
           placeholderTextColor='red'
          inputTextColor="black"
          style={{
            backgroundColor: '#F2F2F2',
            justifyContent: 'flex-start',
          }}
          
         onChangeText={(cvv)=>setCvv(cvv)}
        />
         </View>
        </View>
          <Text text="Utiliser ce RIB" style={[styles.text,{fontSize: 16}]} colorText={'black'} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: 10,
          }}>
          <CheckBox
            center
            title="Oui"
            textStyle={{fontSize:18}}
            checkedIcon="circle"
            checkedColor="#ED5351"
            size={28}
            checked={checked}
            uncheckedIcon="circle-o"
            containerStyle={{
              backgroundColor: 'white',
              width: '29%',
              borderWidth: 0,
            }}
            onPress={toggleChecked}
          />
          <CheckBox
            center
            title="Non"
             textStyle={{fontSize:18}}
            checkedIcon="circle"
            checkedColor="#ED5351"
            size={28}
            checked={!checked}
            uncheckedIcon="circle-o"
            containerStyle={{
              backgroundColor: 'white',
              width: '29%',
              borderWidth: 0,
            }}
            onPress={toggleChecked}
          />
        </View>
       <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
         <Button
          color="white"
          size="medium"
          text="Annuler"
          textStyle={{fontSize: 16, color:'#ED5351',fontWeight:'bold' }}
          style={{height: '50%', alignSelf: 'center',borderRadius:26,borderWidth:1,borderColor:'#ED5351'}}
          onPress={()=>navigation.goBack()}

        />
        <Button
          size="medium"
          text="Enregistrer"
          theTextColor="white"
          textStyle={{fontSize: 15}}
          style={{height: '50%', alignSelf: 'center'}}
           onPress={AddRib}
        />
        </View>
      </View>
    </Overlay>
  );
};

export default ModalView;
const styles = StyleSheet.create({
    text:{
        fontWeight:'bold',
    },
});
