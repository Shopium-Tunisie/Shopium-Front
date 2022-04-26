/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, Dimensions, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import React,{useRef, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('window');
const slides = [
    {
    id: 1,
    title: 'screen1',
    descreption:
      'Nulla incididunt aliqua cillum nisi id do deserunt consequat.',
    image: require('../../assets/images/screen1.png'),
  },
  {
    id: 2,
    title: 'screen2',
    descreption:
      'Nulla incididunt aliqua cillum nisi id do deserunt consequat.',
    image: require('../../assets/images/screen2.png'),
  },
  {
    id: 3,
    title: 'screen3',
    descreption:
      'Nulla incididunt aliqua cillum nisi id do deserunt consequat.',
    image: require('../../assets/images/screen3.png'),
  },
];
const Slide = ({item})=>{
    return (
        <View style={{alignItems:'center'}}>
            <Text style={styles.title} >{item.title}</Text>
            <Image source={item.image} style={{height: '70%',width,resizeMode:'contain',alignItems:'center',maxWidth:'95%',marginTop:30}} />
            <Text style={styles.subtitle}>{item.descreption}</Text>
        </View>
    );
};
const OnboardingScreen = ({navigation})=>{
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef(null);
    const Footer = ()=>{
        return (
            <View style={{
            height: height * 0.25,
            justifyContent:'space-between',
            paddingHorizontal:20,
            }}>
                <View style={{flexDirection:'row',justifyContent:'center', marginTop:20}} >
                    {slides.map((_,id)=>(
                        <View key={id} style={[styles.indicator, currentSlideIndex == id && {
                            backgroundColor:'#FECB58',width:25,
                        }]}/>
                    ))}
                </View>
                <View style={{marginBottom:20}}>
                    {
                        currentSlideIndex == slides.length - 1 ?
                        <View style={{height:50 }} >
                        <TouchableOpacity style={{alignItems:'center'}} onPress={()=>navigation.replace('login')} >
                            <Text style={{fontSize:16,fontWeight:'400', color:'white',backgroundColor:'#ED5351' ,borderRadius:22.5 ,width:130, height:45 , padding:10, paddingLeft:30  }}>Continuer</Text>
                        </TouchableOpacity>
                    </View> :
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={skip} >
                            <Text style={{fontSize:20,fontWeight:'bold', color:'black'}}>SKIP</Text>
                        </TouchableOpacity>
                        <View style={{marginLeft:'75%'}} />
                        <TouchableOpacity onPress={goNextSlide}>
                            <Text style={{fontSize:20,fontWeight:'bold', color:'black'}}>NEXT</Text>
                        </TouchableOpacity>
                    </View>
                    }
                </View>
            </View>
        );
    };
    const updateCurrentSlideIndex = e =>{
         const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
        console.log(contentOffsetX);
    };
    const goNextSlide = ()=>{
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slides.length){
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({offset});
            setCurrentSlideIndex(nextSlideIndex);
        }
    };
    const skip = () =>{
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current?.scrollToOffset({offset});
        setCurrentSlideIndex(lastSlideIndex);
    };
    return (
        <SafeAreaView style={styles.root}>
        <StatusBar backgroundColor={'#ffffff'}/>
        <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
            data={slides}
            contentContainerStyle={{height:height * 0.75}}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=> <Slide item={item}/>}
        />
        <Footer />
    </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    root:{
        flex: 1,
        backgroundColor: '#ffffff',
    },
    title:{
        color:'#000000',
        fontSize:35,
        fontWeight:'bold',
        marginTop:54,
        textAlign:'center',

    },
    subtitle:{
        color:'#000000',
        fontSize:16,
        fontWeight:'400',
        textAlign:'center',
        maxWidth:'70%',
        lineHeight:23,
    },
    indicator:{
    height:2.5,
    width:10,
    backgroundColor:'#000000',
    marginHorizontal:3,
    borderRadius:2,
    },
});
export default  OnboardingScreen;