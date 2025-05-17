import React, {useRef, useState} from 'react';
import {FlatList, Image, ImageBackground, Text, View} from 'react-native';

import images from '../../assets/index';

import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from 'src/components/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {OnboardingStackParams} from 'src/navigation/OnboardingStack';
import Screens from 'src/navigation/constants';

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
    phoneImage: images.Onboarding1,
  },
  {
    titleBeforeUnderlinedText: 'Get plant ',
    underlinedText: 'care guides',
    phoneImage: images.Onboarding2Phone,
    bgImage: images.Onboarding2Leaves,
    topRightImage: images.Onboarding2Plants,
  },
];

const Onboarding = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<OnboardingStackParams>>();
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const scrollToIndex = (index: number) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({animated: true, index});
    }
  };

  const handleNext = () => {
    if (currentIndex < OnboardingData.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  const renderItem = ({item}: {item: OnboardingDataType}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>
            <View>
              <Text style={styles.titleBeforeUnderlinedText}>
                {item.titleBeforeUnderlinedText}
              </Text>
            </View>
            <View style={styles.underlinedTextContainer}>
              <Text style={styles.underlinedText}>{item.underlinedText}</Text>
              <Image source={images.Underline} style={styles.underline} />
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

  const onContinueButtonPress = () => {
    if (currentIndex < OnboardingData.length - 1) {
      handleNext();
      return;
    }
    navigation.navigate(Screens.Paywall);
  };

  return (
    <ImageBackground
      source={images.OnboardingBackground}
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <FlatList
          renderItem={renderItem}
          data={OnboardingData}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          scrollEnabled={false}
          ref={flatListRef}
        />
        <View style={styles.buttonContainer}>
          <Button onPress={onContinueButtonPress} title="Continue" />
        </View>
        <View style={styles.paginationContainer}>
          <View
            style={
              currentIndex === 0
                ? styles.selectedPaginationDot
                : styles.paginationDot
            }
          />
          <View
            style={
              currentIndex === 1
                ? styles.selectedPaginationDot
                : styles.paginationDot
            }
          />
          <View
            style={
              currentIndex === 2
                ? styles.selectedPaginationDot
                : styles.paginationDot
            }
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Onboarding;
