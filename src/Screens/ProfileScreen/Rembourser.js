/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import React, { useState } from "react";
import { View, StatusBar, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import { Button } from "../../components/Button";
import { Image } from "../../components/Image";
import { Text } from "../../components/Text";
import { textOptions } from "../../utils/FakeData";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const Rembourser = ({ navigation }) => {
  const [text, setText] = useState(textOptions[0].text);
  const [secondIndex, setSecondIndex] = useState(false);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          flexWrap: "wrap",
          height: 200,
          marginVertical: 60,
        }}
      >
        <Swiper
          loop={false}
          onIndexChanged={(index) => {
            setSecondIndex(index === 2);
            setText(textOptions[index].text);
          }}
          // showsButtons={true}
          showsPagination={true}
          paginationStyle={{ bottom: -60 }}
        >
          <Image
            imageSource="https://i.ibb.co/1XbHTbT/Artboard-3.png"
            resizeMode="contain"
          />

          <Image
            imageSource="https://i.ibb.co/FzmLW5p/Artboard-1.png"
            resizeMode="contain"
          />

          <Image
            imageSource="https://i.ibb.co/rQDq08b/Artboard-2.png"
            resizeMode="contain"
          />
        </Swiper>
      </View>

      <Text
        text={text}
        style={{
          marginBottom: 30,
          paddingHorizontal: 6,
          fontSize: 16,
          alignSelf: "center",
          marginTop: 20,
        }}
        colorText="grey"
      />
      {secondIndex && (
        <View
          style={{
            height: "16%",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Button
            textStyle={{ fontSize: 17 }}
            theTextColor="white"
            text="Photographier le ticket"
            style={{ height: 45 }}
          />
          <Button
            textStyle={{ fontSize: 17 }}
            theTextColor="red"
            color="white"
            text="Importer depuis la galerie"
            style={{ height: 45, borderWidth: 1, borderColor: "red" }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: screenWidth,
    width: screenWidth,
    backgroundColor: "white",
  },
});

export default Rembourser;
