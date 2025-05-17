import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';
import OnboardingStack from './OnboardingStack';
import {useAppSelector} from 'src/hooks/useRedux';

const RootStack = () => {
  const hasOnboarded = useAppSelector(state => state.onboarding.hasOnboarded);
  return (
    <NavigationContainer>
      {hasOnboarded ? <MainStack /> : <OnboardingStack />}
    </NavigationContainer>
  );
};

export default RootStack;
