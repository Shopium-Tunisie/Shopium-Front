/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, FlatList} from 'react-native';

import {View as AnimatedView} from 'react-native-animatable';

import {height, width} from '../../utils/Dimension';
import { Button } from '../../components/Button';
import { DELAY } from '../TabScreens/Favorite';
import RemboursementGadget from '../../components/RemboursementGadge';

const buttonList = [
  {name: 'Touts', id: 1},
  {name: 'En cours', id: 2},
  {name: 'Accepté', id: 3},
  {name: 'Refusé', id: 5},
];
const SPACING = width * 0.09;
const BUTTONHEIGHT = height * 0.05;
const LISTHEADERHEIGHT = BUTTONHEIGHT + 10;

const DATA = [
  {
    item: 'Cereale Nesquik',
    state: 'En cours',
    amount: '30 dt',
    date: '12/3/2020',
    text: 'Vous avez un remboursement de',
    type: 'Alimentaion',
  },
  {
    item: 'Chocolat',
    state: 'Refusé',
    amount: '30 dt',
    date: '12/3/2020',
    text: 'Vous avez un remboursement de',
    type: 'Alimentaion',
  },
  {
    item: 'Eau minerale',
    state: 'Accepté',
    amount: '2 dt',
    date: '12/3/2020',
    text: 'Vous avez un remboursement de',
    type: 'Alimentaion',
  },
  {
    item: 'Eau minerales',
    state: 'Accepté',
    amount: '2 dt',
    date: '12/3/2020',
    text: 'Vous avez un remboursement de',
    type: 'Alimentaion',
  },
  {
    item: 'boissons',
    state: 'En cours',
    amount: '1 dt',
    date: '12/3/2020',
    text: 'Vous avez un remboursement de',
    type: 'Alimentaion',
  },
  {
    item: 'Coffee',
    state: 'En cours',
    amount: '1 dt',
    date: '12/3/2020',
    text: 'Vous avez un remboursement de',
    type: 'Alimentaion',
  },
];

const RemboursementList = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        alignItems: 'center',
        flexGrow: 1,
        paddingTop: 12,
      }}>
      <List />
    </View>
  );
};

const List = () => {
  const [selectedButton, setSelectedButton] = useState('Touts');

  const handleToggle = item => {
    setSelectedButton(item.name);
  };
  const filteredData = DATA.filter(el => el.state === selectedButton);

  return (
    <FlatList
      data={selectedButton === 'Touts' ? DATA : filteredData}
      keyExtractor={item => String(item.item)}
      scrollEventThrottle={16}
      contentContainerStyle={{alignItems: 'center'}}
      bounces={false}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => {
        return (
          <AnimatedView animation="fadeInUp" delay={DELAY + index * 200}>
            <RemboursementGadget key={index} data={item} />
          </AnimatedView>
        );
      }}
      ListHeaderComponent={() => (
        <RenderListHeader
          selectedButton={selectedButton}
          handleToggle={handleToggle}
        />
      )}
    />
  );
};

const RenderListHeader = ({selectedButton, handleToggle}) => {
  return (
    <View style={{height: LISTHEADERHEIGHT}}>
      <FlatList
        data={buttonList}
        horizontal
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        snapToAlignment="end"
        scrollEventThrottle={16}
        contentContainerStyle={{alignItems: 'center', paddingLeft: 6}}
        keyExtractor={item => String(item.id)}
        renderItem={({item, index}) => {
          return (
            <Button
              text={item.name}
              color={selectedButton === item.name ? 'default' : 'white'}
              theTextColor={selectedButton === item.name ? 'white' : 'red'}
              style={{
                borderWidth: 1,
                borderColor:
                  selectedButton === item.name ? 'transparent' : 'red',
                marginHorizontal: 4,
                paddingHorizontal: 10,
                width: width / 3,
                height: BUTTONHEIGHT,
              }}
              textStyle={{
                fontSize: 14,
                justifyContent: 'center',
                fontWeight: selectedButton === item.name ? 'bold' : 'normal',
              }}
              onPress={() => {
                handleToggle(item);
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default RemboursementList;
