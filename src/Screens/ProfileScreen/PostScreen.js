/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View} from 'react-native';
import {lorem} from '../../tools/helper';
import ModalView from '../../components/ModelView';
import RibBox from '../../components/RibBox';
import {Text} from '../../components/Text';

const PosteScreen = () => {
  const [visibleOverLay, setVisibleOverLay] = useState(false);

  const [checked, setChecked] = useState(false);

  const toggleCheckBox = () => {
    setChecked(!checked);
  };
  const handleToggle = () => {
    setVisibleOverLay(!visibleOverLay);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white', padding:10}}>
      <Text
        text={lorem}
        containerStyle={{padding: 4, marginVertical: 16}}
        colorText="grey"
        style={{fontSize: 18}}
      />
      <ModalView
        visible={visibleOverLay}
        handleToggle={handleToggle}
        checked={checked}
        toggleChecked={toggleCheckBox}
      />
      <RibBox onPress={handleToggle} />
    </View>
  );
};

export default PosteScreen;

