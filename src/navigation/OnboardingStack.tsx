import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from 'src/screens/Welcome';
import Onboarding from 'src/screens/Onboarding';
import Screens from './constants';
import Paywall from 'src/screens/Paywall';

export type OnboardingStackParams = {
  Welcome: undefined;
  Onboarding: undefined;
  Paywall: undefined;
};

const Stack = createNativeStackNavigator<OnboardingStackParams>();

const OnboardingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Screens.Welcome} component={Welcome} />
      <Stack.Screen name={Screens.Onboarding} component={Onboarding} />
      <Stack.Screen name={Screens.Paywall} component={Paywall} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
