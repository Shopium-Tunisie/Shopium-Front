/* eslint-disable prettier/prettier */
import React from 'react';
import {
  useWindowDimensions,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
} from 'react-native';

const URL="https://www.elegantthemes.com/blog/wp-content/uploads/2019/10/loading-screen-featured-image.jpg";
const Loader = ({visible = false}) => {
  const {width, height} = useWindowDimensions();
  return (
    visible && (
      <View style={[style.container, {height, width}]}>
        <View style={style.loader}>
            <Image source={{uri:URL}} />
          <ActivityIndicator size="large" color={'blue'} animating hidesWhenStopped />
          <Text style={{marginLeft: 10, fontSize: 16, color:"black"}}>Loading...</Text>
        </View>
      </View>
    )
  );
};

const style = StyleSheet.create({
  loader: {
    height: 100,
    backgroundColor: 'white',
    marginHorizontal: 50,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    paddingHorizontal: 20,
  },
  container: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
});

export default Loader;
