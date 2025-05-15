import React from 'react';
import {FlatList, Image, ImageBackground, Text, View} from 'react-native';

import OnboardingBackground from 'src/assets/images/OnboardingBackground.png';
import Underline from 'src/assets/images/Underline.png';
import Onboarding1 from 'src/assets/images/Onboarding1.png';
import Onboarding2Phone from 'src/assets/images/Onboarding2Phone.png';
import Onboarding2Leaves from 'src/assets/images/Onboarding2Leaves.png';
import Onboarding1Plants from 'src/assets/images/Onboarding2Plants.png';

import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from 'src/components/Button';

type OnboardingDataType = {
  titleBeforeUnderlinedText: string;
  underlinedText: string;
  titleAfterUnderlinedText?: string;
  phoneImage: any;
  bgImage?: any;
  topRightImage?: any;
};

const OnboardingData: OnboardingDataType[] = [
  {
    titleBeforeUnderlinedText: 'Take a photo to ',
    underlinedText: 'identify',
    titleAfterUnderlinedText: ' the plant!',
    phoneImage: Onboarding1,
  },
  {
    titleBeforeUnderlinedText: 'Get plant ',
    underlinedText: 'care guides',
    phoneImage: Onboarding2Phone,
    bgImage: Onboarding2Leaves,
    topRightImage: Onboarding1Plants,
  },
];

const Onboarding = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>
            {item.titleBeforeUnderlinedText}
            <View style={styles.underlinedTextContainer}>
              <Text style={styles.underlinedText}>{item.underlinedText}</Text>
              <Image source={Underline} style={styles.underline} />
            </View>
          </Text>
          <Text style={styles.title}>{item.titleAfterUnderlinedText}</Text>
        </View>
        <View style={styles.imagesContainer}>
          <Image source={item.phoneImage} style={styles.phoneImage} />
          <Image source={item.topRightImage} style={styles.topRightImage} />
          <Image source={item.bgImage} style={styles.bgImage} />
        </View>
      </View>
    );
  };

  return (
    <ImageBackground
      source={OnboardingBackground}
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <FlatList
          renderItem={renderItem}
          data={OnboardingData}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={styles.buttonContainer}>
          <Button onPress={() => {}} title="Continue" />
        </View>
        <View style={styles.paginationContainer}></View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Onboarding;
