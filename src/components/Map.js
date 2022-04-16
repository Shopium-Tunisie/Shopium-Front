/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';


const Map = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
       latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    />
  );
};
const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
});
export default Map;
