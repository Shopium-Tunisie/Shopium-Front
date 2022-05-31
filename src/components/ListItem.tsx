/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

interface ListItemProps{
   data: any
}
const ListItem :React.FC<ListItemProps> = ({data}) => {
    const translateX = useSharedValue(0)
  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      
      onActive:(event)=> {
          translateX.value=event.translationX
      },
      onEnd:()=> {
      },
    });
    const rStyle=useAnimatedStyle(()=>({
      transform:[{
        translateX:translateX.value
      }]
    }))
  
  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={panGesture}>
      <Animated.View style={[styles.ami,rStyle]}>
      <Text style={{fontSize:16}} >{data.nom} {data.prenom}</Text>
      </Animated.View>
    </PanGestureHandler>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    width:'100%',
    alignItems:'center'
  },
  
ami:{
  width:'90%',
  height:70,
  backgroundColor:'red',
  marginVertical:10,
  justifyContent:'center',
  paddingLeft:20,
  shadowOpacity:0.08,
  shadowOffset:{
    width:0,
    height:20,
  },
  shadowRadius:10,
  elevation:5,

  }

});
