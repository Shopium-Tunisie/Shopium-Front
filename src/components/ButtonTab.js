/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, TouchableOpacity,Animated, TouchableHighlight} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
const ButtonTab = () => {
    const buttonSize = new Animated.Value(1);
      const mode = new Animated.Value(0);
    const sizeStyle = {transform:[{scale:{buttonSize}}]};
    const rotation = mode.interpolate({
        inputRange:[0,1],
        outputRange:['0deg','45deg'],
    });
    const handlePress = ()=>{
        Animated.sequence([
            Animated.timing(buttonSize,{
                toValue:0.5,
                duration:200,
            }),
            Animated.timing(buttonSize,{
                toValue:1,
            }),
            Animated.timing(mode,{
                toValue:mode._value === 0 ? 1 : 0,
            }),
        ]).start();
    };
  return (
    <View style={{position : 'absolute', alignItems:'center'}}>
      <Animated.View style={[styles.button,sizeStyle]}>
            <TouchableHighlight onPress={()=>handlePress} underlayColor="#7F58FF">
                <Animated.View style={{transform:[{rotate:rotation}]}}>
                    <Icon name="plus" size={25} color={'#FFF'}/>
                </Animated.View>
            </TouchableHighlight>
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
    button: {
        backgroundColor:'red',
        alignItems: 'center',
        justifyContent: 'center',
        width: 72,
        height: 72,
        borderRadius: 36,
        position: 'absolute',
        top: -60,
        shadowColor: '#7F58FF',
        shadowRadius: 5,
        shadowoffset:{height: 10 },
        shadowopacity: 0.3,
        borderwidth: 3,
        borderColor: '#FFF',
    },
});
export default ButtonTab;
