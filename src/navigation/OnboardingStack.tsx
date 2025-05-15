import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from 'src/screens/Welcome';
import Onboarding from 'src/screens/Onboarding';

export type OnboardingStackParams = {
  Welcome: undefined;
  Onboarding: undefined;
};

const Stack = createNativeStackNavigator<OnboardingStackParams>();

const OnboardingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
