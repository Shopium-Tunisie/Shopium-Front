/* eslint-disable prettier/prettier */
import React, {useContext, useState,useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

// import { useNavigation } from "@react-navigation/native";
import {list, deviseList} from '../utils/FakeData';
import DropDown from '../components/DropDown';
import ParametresTouchables from '../components/ParametresTouchables';
import { Button } from '../components/Button';
import { height } from '../utils/Dimension';
import AuthContext from '../tools/AuthContext';
import * as axios from 'axios';

const ParametreScreen = ({navigation,route}) => {
  const [transferMethods, setTransferMethods] = useState(list);
  const [moneyList, setMoneyList] = useState(deviseList);
  const [transferMethod, setTransferMethod] = useState(transferMethods[0]);
  const { user } = route.params;
  const {userToken,userId} = useContext(AuthContext);
        console.log({userToken:userToken});
        console.log({userId:userId});
  const handleToggle = i => {
    let arr = moneyList;
    arr[i].selected = !arr[i].selected;
    setMoneyList([...arr]);
  };

  const handleTransferToggle = i => {
    setTransferMethod(transferMethods[i]);
  };
  const {signOut} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <ParametresTouchables
        text="Informations personnelle"
        secondText="******"
        onPress={() => {
          navigation.navigate('infoPersonel',{user:user});
        }}
      />
      <ParametresTouchables
        text="RIB"
        secondText="******"
        onPress={() => {
          navigation.navigate('RibScreen',{user:user});
        }}
      />
        <ParametresTouchables
        text="Changer le mot de passe"
        secondText="******"
        onPress={() => {
          navigation.navigate('password');
        }}
        />
      <DropDown
        title="Remboursement"
        list={transferMethods}
        setList={i => {
          handleTransferToggle(i);
        }}
        rightText={transferMethod.name}
      />
      <View style={{marginBottom: 12}} />
      <DropDown
        title="Devise"
        list={moneyList}
        multiple
        setList={i => handleToggle(i)}
      />
      <ParametresTouchables
        text="Emplacement"
        onPress={() => {
          navigation.navigate('emplacement');
        }}
      />
      <Button
      title={'LOGOUT'}
     size="medium"
     theTextColor={'white'}
     onPress={()=>signOut()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
export default ParametreScreen;
