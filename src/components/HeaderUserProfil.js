/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text,StyleSheet, Image, ScrollView, TouchableOpacity, Platform, Alert} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {height, width} from '../utils/Dimension';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import ActionSheet from 'react-native-actionsheet';
// import {launchImageLibrary,launchCamera} from 'react-native-image-picker';
// import ImagePicker from 'react-native-image-crop-picker';
const IMAGESIZE = width * 0.26;
import { LogBox } from 'react-native';
import { androidCameraPermission } from '../utils/permissions';
import axios from 'axios';
import AuthContext from '../tools/AuthContext';
import ImageCropPicker from 'react-native-image-crop-picker';
// import ImagePicker from 'react-native-image-picker';
/* toggle includeExtra */
// import * as ImagePicker from 'react-native-image-picker';

const HeaderUserProfil = ({onPress,email,nom,prenom,photo}) => {
const {userToken, userId} = useContext(AuthContext);
console.log({userId: userId});
console.log({photo:photo});
    const [photoo,setPhoto] = useState(photo);
    console.log({photoo:photoo});
    const onSelectImage = async () => {
     const permissionStatus = await androidCameraPermission();
     if (permissionStatus || Platform.OS === 'ios') {
       Alert.alert(
         'Profile Picture',
         'Choose an option',
         [
           { text: 'Camera', onPress:  onCamera },
           { text: 'Gallery', onPress: onGallery },
           { text: 'Cancel', onPress: () => { } },
         ]
       );
     }
   };

    const onCamera = async () => {
      await ImageCropPicker.openCamera({
        compressImageMaxWidth: 300,
        compressImageMaxheight: 400,
        cropping: true,
      }).then(image => {
        console.log(image);
        setPhoto(image.path);
      });
    };

    const onGallery = async() => {
      try {
       await ImageCropPicker.openPicker({
          compressImageMaxWidth: 300,
          compressImageMaxheight: 400,
          cropping: true,
        }).then(image => {
          console.log('selected Image', image);
          console.log({filename:image.path});
          setPhoto(image.path);
        });
      } catch (error) {
      console.log({error:error});
      }
    };
  //   const imageUpload = async (imagePath) => {
  //  const formData = new FormData();
  //  formData.append('file',{
  //    uri:imagePath.path,
  //    type:imagePath.mime,
  //    name:imagePath.path,
  //  });
  //  console.log({formData:JSON.stringify(formData)});
  //   try {
  //     let res = await axios.put('http://192.168.4.48:8000/user/b',{id:userId,photo:formData});
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log({error});
  //   }
  // };
  // const openGallery=async()=>{
  //   try {
      
  //     const response = await ImagePicker.launchImageLibrary(options);
  //     console.log(response.assets[0].uri);
  //     const formData = new FormData();

  //     formData.append('photo' ,{
  //       uri:response.assets[0].uri,
  //       type:response.assets[0].type,
  //       name:response.assets[0].fileName,
  //     });
  //     const data = formData._parts[0];
  //       setPhoto(data)
  //         let res = await axios.put('http://192.168.201.48:8000/user/b',{id:userId,photo:data});
  //         if (!res){
  //           res.status(400).json({success:false,message:'error'});
  //         } else {
  //           res.status(200).json({success:true,message:'success',user:res});
  //         }
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   //   if (responseJson.status === 200) {
  //   //     // eslint-disable-next-line no-alert
  //   //     alert('Upload Successful');
  //   //   } else {
  //   //   //if no file selected the show alert
  //   //   alert('Please Select File first');
  //   // }
  // }
    useEffect(() => {
      LogBox.ignoreLogs(['Animated: `useNativeDriver`']);

  }, []);
//   const takePhotoFromCamera = async ()=>{
// try {
//   const image = await launchCamera(optionsCam);
//    setPhoto(image.assets[0].uri);
//    const formData = new FormData();
//    formData.append('file',{
//      uri:image.assets[0].uri,
//      type:image.assets[0].type,
//      name:image.assets[0].fileName,
//    });
//    console.log({formData:JSON.stringify(formData)});
// } catch (error) {
//   console.log({error:error});
// }
//   };
//   const takePhotoFromGallery = async()=>{
//     try {
//       const image = await launchImageLibrary(options);
//       setPhoto(image.assets[0].uri);
//        const formData = new FormData();
//         formData.append('file',{
//         uri:image.assets[0].uri,
//         type:image.assets[0].type,
//         name:image.assets[0].fileName,
//    });
//    console.log(formData[0].uri);
//     } catch (error) {
//         console.log({error:error});
//     }
//     //     ImagePicker.openPicker({
//       //   width: 200,
//       //   height: 200,
//       //   cropping: true
//       // }).then(image => {
//         //   console.log(image.path);
//         //   setPhoto(image.path);
//         // });
//   };
  return (
    <ScrollView>
      <View style={Styles.container}>
          <Icon style={{position:'absolute', paddingLeft:'90%' }} color="#ffffff" name="dots-vertical" size={30}
          onPress={onPress} />
        <View style={Styles.image}>
        <TouchableOpacity onPress={onSelectImage}>
          <View style={Styles.press} >
           <IconMat onPress={onSelectImage} name ="mode-edit" color={'black'} size={25} />
          </View>
        </TouchableOpacity >
        {/* <TouchableOpacity
        style={Styles.btnStyle}
        activeOpacity={0.8}
        onPress={onSelectImage}
      >
        <Text style={Styles.textStyle}>select your image</Text>

      </TouchableOpacity> */}
            <Image source={{uri:photoo}}  style={{height:92,width:92,borderRadius:80}}  resizeMode="cover" resizeMethod="scale"/>
        </View>
        <View>
          <Text style={{marginHorizontal:width / 10,fontSize:17,fontWeight:'bold'}}> {nom} {prenom} </Text>
          <Text style={{marginHorizontal:width / 19,fontSize:17,fontWeight:'400'}}> {email} </Text>
          </View>
        </View>
        {/* <ActionSheet
        ref={actionsheet}
        title={'choose from  : '}
        options={BUTTONS}
        cancelButtonIndex={2}
        useNativeDriver={true}
        onPress={(index)=>{
          switch (index){
            case 0:
              takePhotoFromCamera();
            break;
            case 1:
              takePhotoFromGallery();
            break;
            default:
            break;
          }
        }}

        /> */}
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
    marginTop:39,
    // borderColor: '#FFF',
    borderRadius: 85,

    height: 91,
    marginBottom: 15,
    width: 90,
    },
    press:{
      borderRadius:100,
      backgroundColor:'white',
      height:30,
      width:30,
      position:'absolute',
      marginTop:60,
      marginLeft:30,
      padding:2.5,
    },
     btnStyle: {
    backgroundColor: 'blue',
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 16,
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
