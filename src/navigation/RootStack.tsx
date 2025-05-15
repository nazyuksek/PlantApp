import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import OnboardingStack from './OnboardingStack';

const RootStack = () => {
  return (
    <NavigationContainer>
      <OnboardingStack />
    </NavigationContainer>
  );
};

export default RootStack;
