/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Modal, TouchableWithoutFeedback, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {Fragment, useState} from 'react';
import {height, width} from '../utils/Dimension';
import {MaterialCommunityIcons, MaterialIcons} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Description from './Descreption';
const IMAGESIZE = width * 0.26;
const HeaderUserProfil = ({onPress,email,nom,prenom}) => {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const chooseImage = fn => {
    toggleOverlay();
    fn();
  };
  return (
    <ScrollView>
      <View style={Styles.container}>
        <TouchableOpacity>
          <Icon style={{position:'absolute', paddingLeft:'55%' }} color="#ffffff" name="dots-vertical" size={30}
          onPress={onPress} />
        <View style={Styles.image}>
            <Image source={require('../assets/images/avatar.jpg')} style={{height:90,width:90,borderRadius:80}} />
        </View>
        </TouchableOpacity>
        <View>
          <Text style={{marginHorizontal:width / 10,fontSize:17,fontWeight:'bold'}}> {nom} {prenom} </Text>
          <Text style={{marginHorizontal:width / 19,fontSize:17,fontWeight:'400'}}> {email} </Text>
          </View>
        </View>
    </ScrollView>
  );
};
export default HeaderUserProfil;
const Styles = StyleSheet.create({
  container:{
    padding:10,
    backgroundColor:'#ED5353',
    width:'100%',
    height:height / 4,
    alignItems:'center',
  },
    image:{
    alignItems:'center',
    backgroundColor:'white',
    marginTop:40,
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 100,
    marginBottom: 15,
    width: 100,
    padding:5,
    },
});
      // <View>
      //   <View
      //     style={{
      //       width,
      //       alignItems: 'center',
      //       justifyContent: 'center',
      //       paddingTop: 40,
      //     }}>
      //     <View
      //       style={{
      //         height: IMAGESIZE + 6,
      //         width: IMAGESIZE + 6,
      //         backgroundColor: '#f0ebeb',
      //         alignItems: 'center',
      //         justifyContent: 'center',
      //         borderRadius: (IMAGESIZE + 6) / 2,
      //       }}>
      //       {!isSelected ? (
      //         <MaterialIcons
      //           name="add-a-photo"
      //           size={IMAGESIZE / 2}
      //           color="gray"
      //           onPress={toggleOverlay}
      //         />
      //       ) : (
      //         <TouchableWithoutFeedback onPress={toggleOverlay}>
      //           <View>
      //             <Image
      //               rounded={true}
      //               containerHeight={IMAGESIZE}
      //               containerWidth={IMAGESIZE}
      //               imageSource={image}
      //             />
      //           </View>
      //         </TouchableWithoutFeedback>
      //       )}
      //       <MaterialCommunityIcons
      //         onPress={toggleOverlay}
      //         name="pencil"
      //         size={26}
      //         color="#e64747"
      //         style={{
      //           width: 30,
      //           height: 30,
      //           backgroundColor: '#f0ebeb',
      //           borderRadius: 15,
      //           position: 'absolute',
      //           right: 0,
      //           bottom: 0,
      //         }}
      //       />
      //     </View>
      //     <Description
      //       // title={`${me.firstName} ${me.lastName}`}
      //       title="gouadria farouk"
      //       titleColor="white"
      //       description="gouadriafar@gmail.com"
      //       descriptionColor="white"
      //       distance={5}
      //       titleStyle={{fontSize: 18}}
      //       descriptionStyle={{fontSize: 15}}
      //       distant
      //     />
      //     <MaterialCommunityIcons
      //       name="dots-vertical"
      //       size={30}
      //       color="#f0ebeb"
      //       onPress={() => {
      //         onPress();
      //       }}
      //       style={{position: 'absolute', right: 5}}
      //     />
      //   </View>
      //   <Modal
      //     animationType="slide"
      //     transparent={true}
      //     visible={visible}
      //     onRequestClose={() => console.log('Modal has been closed.')}>
      //     <TouchableWithoutFeedback onPress={toggleOverlay}>
      //       <View
      //         style={{
      //           flex: 1,
      //           flexDirection: 'column',
      //           justifyContent: 'center',
      //           alignSelf: 'center',
      //         }}>
      //         {/* <TouchableWithoutFeedback
      //           onPress={() => {
      //             chooseImage(pickFromCamera);
      //           }}>
      //           <View
      //             style={{
      //               backgroundColor: '#ED5351',
      //               height: height * 0.06,
      //               width: width * 0.9,
      //               justifyContent: 'center',
      //               alignItems: 'center',
      //               marginBottom: 1,
      //               borderRadius: 8,
      //             }}>
      //             <Text
      //               style={{
      //                 color: '#fff',
      //                 justifyContent: 'center',
      //               }}>
      //               camera
      //             </Text>
      //           </View>
      //         </TouchableWithoutFeedback> */}
      //         {/* <TouchableWithoutFeedback
      //           onPress={() => {
      //             chooseImage(pickImage);
      //           }}>
      //           <View
      //             style={{
      //               backgroundColor: '#ED5351',
      //               height: height * 0.06,
      //               width: width * 0.9,
      //               justifyContent: 'center',
      //               alignItems: 'center',
      //               borderRadius: 8,
      //             }}>
      //             <Text
      //               style={{
      //                 color: '#fff',
      //                 justifyContent: 'center',
      //               }}>
      //               gallery
      //             </Text>
      //           </View>
      //         </TouchableWithoutFeedback> */}
      //       </View>
      //     </TouchableWithoutFeedback>
      //   </Modal>
      // </View>
