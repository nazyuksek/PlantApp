import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';

import OnboardingBackground from 'src/assets/images/OnboardingBackground.png';
import OnboardingPlant from 'src/assets/images/OnboardingPlant.png';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from 'src/components/Button';

const Welcome = () => {
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

  return (
    <ImageBackground
      source={OnboardingBackground}
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Welcome to <Text style={styles.appTitle}>PlantApp</Text>
        </Text>
        <Text style={styles.description}>
          Identify more than 3000+ plants and 88% accuracy.
        </Text>
        <Image source={OnboardingPlant} style={styles.plantImage} />
        <Button onPress={() => {}} title="Get Started" />
        {renderTermsOfUse()}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Welcome;
