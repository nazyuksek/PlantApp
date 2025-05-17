import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import Screens from './constants';

type MainStackNavigationParams = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<MainStackNavigationParams>();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.Home}
        component={TabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
