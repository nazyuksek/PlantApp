import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from '../screens/Welcome';

export type RootStackParamList = {};

const RootStack = () => {
  return (
    <NavigationContainer>
      <Welcome />
    </NavigationContainer>
  );
};

export default RootStack;
