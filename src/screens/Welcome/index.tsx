import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';

import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from 'src/components/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {OnboardingStackParams} from 'src/navigation/OnboardingStack';
import images from '../../assets/index';

const Welcome = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<OnboardingStackParams>>();

  const renderTermsOfUse = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.termsOfUseText}>
          By tapping next, you are agreeing to PlantID
        </Text>
        <Text style={styles.termsOfUseText}>
          <Text style={styles.link} onPress={() => {}}>
            Terms of Use
          </Text>{' '}
          &{' '}
          <Text style={styles.link} onPress={() => {}}>
            Privacy Policy
          </Text>
          .
        </Text>
      </View>
    );
  };

  const onGetStartedButtonPress = () => {
    navigation.navigate('Onboarding');
  };

  return (
    <ImageBackground
      source={images.OnboardingBackground}
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Welcome to <Text style={styles.appTitle}>PlantApp</Text>
        </Text>
        <Text style={styles.description}>
          Identify more than 3000+ plants and 88% accuracy.
        </Text>
        <Image source={images.OnboardingPlant} style={styles.plantImage} />
        <Button onPress={onGetStartedButtonPress} title="Get Started" />
        {renderTermsOfUse()}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Welcome;
