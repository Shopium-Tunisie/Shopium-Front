/* eslint-disable prettier/prettier */
import React from 'react';
import TabNavigation from '../../TabNavigation/tabNavigation';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name="home" component={TabNavigation}/>
    </>
  );
}
