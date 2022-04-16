/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import {TouchableOpacity} from 'react-native-gesture-handler';
import { Text } from './Text';
import DropDownItem from './DropDownItem';

const DropDown = ({title, list, rightText, multiple, setList}) => {
  const navigation = useNavigation();
  const [listOpen, setListOpen] = useState(false);

  let listStyle = {
    borderColor: '#EDEDED',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  };
  let containerStyle = {
    width: '94%',
    borderWidth: listOpen ? 1 : 0,
    borderColor: listOpen ? '#EDEDED' : null,
    borderRadius: listOpen ? 6 : null,
  };
  const headerStyle = {
    borderWidth: listOpen ? null : 1,
    borderBottomWidth: listOpen ? 0 : null,
    borderBottomRightRadius: listOpen ? 20 : 6,
    borderBottomLeftRadius: listOpen ? 20 : 6,
    borderColor: '#EDEDED',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderRadius: 6,
    paddingVertical: 17,
  };
  const handleClickOutside = () => {
    setListOpen(false);
  };
  const toggleList = () => {
    setListOpen(!listOpen);
  };
  return (
    <View style={containerStyle}>
      <TouchableOpacity style={headerStyle} onPress={toggleList}>
        <Text text={title} weight="bold" colorText={'black'} />
        {listOpen ? (
          <Icon name="chevron-up" size={16} color="#AFB7BD" />
        ) : (
          <Text text={rightText} colorText="grey" />
        )}
      </TouchableOpacity>
      {listOpen &&
        list &&
        list.map((el, i) => (
          <View style={listStyle} key={el.id}>
            {multiple ? (
              <DropDownItem
                text={el.name}
                checked={el.selected}
                onPress={() => {
                  setList(i);
                }}
              />
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setList(i);
                  setListOpen(false);
                  navigation.navigate(el.navigation);
                }}
                style={{width: 320}}>
                <Text text={el.name} colorText={'black'} />
              </TouchableOpacity>
            )}
          </View>
        ))}
    </View>
  );
};

export default DropDown;
