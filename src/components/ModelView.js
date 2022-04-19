/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CheckBox, Overlay, Rating} from 'react-native-elements';
import Icon from 'react-native-vector-icons/EvilIcons';
import {Button} from './Button';
import {Input} from './Input';
import {Text} from './Text';
const ModalView = ({visible, handleToggle, toggleChecked, checked}) => {
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
          text="Modifier Votre RIB"
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
          style={{
            backgroundColor: '#F2F2F2',
            justifyContent: 'flex-start',
          }}
        />
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
          color='white'
          size="medium"
          text="Annuler"
          textStyle={{fontSize: 16, color:'#ED5351',fontWeight:'bold' }}
          style={{height: '50%', alignSelf: 'center',borderRadius:26,borderWidth:1,borderColor:'#ED5351'}}
          
        />
        <Button
          size="medium"
          text="Enregistrer"
          theTextColor="white"
          textStyle={{fontSize: 15}}
          style={{height: '50%', alignSelf: 'center'}}
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
