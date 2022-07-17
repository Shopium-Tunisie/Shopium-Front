/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import React, { useEffect, useState,useRef } from "react";
import { View,Text, FlatList, Animated,StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import {Alert} from "react-native";
import Swiper from "react-native-swiper";
import { Button } from "../../components/Button";
import { Image } from "../../components/Image";
import { Textt } from "../../components/Text";
import { textOptions } from "../../utils/FakeData";
import * as ImagePicker from "react-native-image-picker";
import { Modal } from "react-native-paper";
const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

/* toggle includeExtra */
const includeExtra = true;

// const ticketDetail=({name,date,time,total})=>{
//    return(
         
//         <Card style={{flex:1}} >
//         <Card.Content>
//             <Title style={{color:"black",fontSize:18}}>{name}</Title>
//         </Card.Content>
//        <Card.Content>
//         <Paragraph style={{color:"black",fontSize:18}}>date :{date}</Paragraph>
//         <Paragraph style={{color:"black",fontSize:18}}>date :{time}</Paragraph>
//         <Paragraph style={{color:"black",fontSize:18}}>total :{total}</Paragraph>
//         </Card.Content>
//       </Card>
//     )
// }
// const renderItem = ({item})=>{
//   <ticketDetail
//     name={item.name}
//     date={item.date}
//     time={item.time}
//     total={item.total}
//   />
// }
const Message = ({message},props) => {
  const opacity = useRef(new Animated.Value(0))
    .current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(2000),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      props.onHide();
    });
  }, []);

  return (
    <Animated.View
      style={{
        opacity,
        transform: [
          {
            translateY: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [-20, 0],
            }),
          },
        ],
        margin: 10,
        marginBottom: 5,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 6,
      }}
    > <Text>Vérifier Votre Produit</Text>
      <Text>{message}</Text>
    </Animated.View>
  );
};

const Rembourser = ({ navigation }) => {
  const [text, setText] = useState(textOptions[0].text);
  const [secondIndex, setSecondIndex] = useState(false);
  const [imageSource, setImageSource] = useState({});
  const [ticket,setTicket]=useState([]);
  const [messages, setMessages] = useState([]);
  const[visible,setVisible]=useState(false)
    
const onClose = () => {
    setVisible(!visible);
  }
  const onButtonClick = () => {
    Modal.alert('Title', 'alert content', [
      { text: 'Cancel', onPress: () => console.log('cancel'), style: 'cancel' },
      { text: 'OK', onPress: () => console.log('ok') },
    ])
  }

  // Launch Camera
  const cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchCamera(options, (res) => {
      console.log('Response = ', res.assets);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        const uri = res.assets[0].uri;
        console.log({uri});
        const type = res.assets[0].type;
        const name = res.assets[0].fileName;
        console.log({source:uri});
        console.log('response', JSON.stringify(res));
        setImageSource({
          uri:uri,
          type:type,
          name:name,
        });
        let newFile = {
          uri,
          type,
          name,
        };
        console.log({newFile});
        handleUpload(newFile);
      }
    });
  };
  const imageGalleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (res) => {
      console.log('Response = ', res.assets);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        const uri = res.assets[0].uri;
        console.log({uri});
        const type = res.assets[0].type;
        const name = res.assets[0].fileName;
        console.log({source:uri});
        console.log('response', JSON.stringify(res));
        setImageSource({
          uri:uri,
          type:type,
          name:name,
        });
        let newFile = {
          uri,
          type,
          name,
        };
        console.log({newFile});
        handleUpload(newFile);
      }
    });
  };

  useEffect(() => {
    return () => {
console.log(imageSource);
    };
  }, [imageSource]);

  const getimagee = async (photo)=>{
      console.log({photo:photo});
    try {
      var formdata = new FormData();
       formdata.append("txt", photo);
      console.log(formdata._parts[0]);
  var requestOptions =  {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  await fetch("http://37.59.33.135:5000/do", requestOptions)
    .then(response => response.json())
    .then(result => Alert.alert("Merci de Scanner Votre Ticket",` Magasin :${result.name} \n nombre de produits: ${result.products.length}\n Date:${result.date} `))
    .then(resul=>setTicket(resul))
    .catch(error => console.log({errorAPI: error}));
    } catch (error) {
    }
  };

  const handleUpload = async(image)=>{
    try {
      const data = new FormData();
      data.append('file',image);
      data.append('upload_preset','shopium');
      data.append('cloud_name','frouga');
      data.append('api_key','197193114972462');
  console.log({data});
  var requestOptions = {
    method: "POST",
    body: data,
    headers:{
      'Accept':'application/json',
      'Content-Type':'multipart/form-data',
    },
  };
      await fetch("https://api.cloudinary.com/v1_1/frouga/image/upload",requestOptions).
      then(res=>res.json())
      .then(res=> getimagee( res.url))
      .catch(error=>console.log({errorUpload:error}));
    } catch (error) {
    }
   
  };

  return (
    // <View
    //   style={[
    //     styles.flex,
    //     styles.centerContainer,
    //     { backgroundColor: "black" }
    //   ]}
    // >
    //   <Text style={[styles.title, { color: 'white' }]}>
    //     Simple Image Picker
    //   </Text>
    //   <TouchableOpacity
    //     onPress={selectImage}
    //     style={[
    //       styles.selectButtonContainer,
    //       { backgroundColor: "black" }
    //     ]}
    //   >
    //     <Text style={styles.selectButtonTitle}>Pick an image</Text>
    //   </TouchableOpacity>
    // </View>

        <View style={styles.container}>
          {/* <View style={{backgroundColor:'red'}}>
         <FlatList
          data={ticket}
          showsVerticalScrollIndicator={false}
          renderItem ={renderItem}
          keyExtractor={item=>`key-${item.name}`}
           contentContainerStyle={{ padding: 20 }}
         />
          </View> */}
          
          <TouchableOpacity onPress={cameraLaunch} style={styles.button}  >
              <Text style={styles.buttonText}>Launch Camera Directly</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={imageGalleryLaunch} style={styles.button}  >
              <Text style={styles.buttonText}>Launch Image Gallery Directly</Text>
          </TouchableOpacity>
        </View>

  );
 };

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    maxHeight: 50,
    backgroundColor: 'red',
    borderColor: "white",
    borderWidth: 5,
  },
  photo:{
     width: 200,
  height: 200,
  borderRadius: 8,
  },
   ImagePickerButton:{
  borderWidth: 1,
  borderRadius: 8,
  borderColor: "#CCCCCC",
  padding: 8 ,
  marginTop: 16,
   },
   flex: {
    flex: 1,
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
  },
   capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  // add below
  selectButtonContainer: {
    margin: 20,
    borderRadius: 5,
  },
  selectButtonTitle: {
    padding: 10,
    fontSize: 18,
  },container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom:12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
});

export default Rembourser;
// interface Action {
//   title: string;
//   type: 'capture' | 'library';
//   options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions;
// }

// const actions: Action[] = [
//   {
//     title: 'Take Image',
//     type: 'capture',
//     options: {
//       saveToPhotos: true,
//       mediaType: 'photo',
//       includeBase64: false,
//       includeExtra,
//     },
//   },
//   {
//     title: 'Select Image',
//     type: 'library',
//     options: {
//       maxHeight: 200,
//       maxWidth: 200,
//       selectionLimit: 0,
//       mediaType: 'photo',
//       includeBase64: false,
//       includeExtra,
//     },
//   },
//   {
//     title: 'Take Video',
//     type: 'capture',
//     options: {
//       saveToPhotos: true,
//       mediaType: 'video',
//       includeExtra,
//     },
//   },
//   {
//     title: 'Select Video',
//     type: 'library',
//     options: {
//       selectionLimit: 0,
//       mediaType: 'video',
//       includeExtra,
//     },
//   },
//   {
//     title: `Select Image or Video\n(mixed)`,
//     type: 'library',
//     options: {
//       selectionLimit: 0,
//       mediaType: 'mixed',
//       includeExtra,
//     },
//   },
// ];
