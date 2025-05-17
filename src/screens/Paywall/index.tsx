import React, {useState} from 'react';
import {FlatList, ImageBackground, Pressable, Text, View} from 'react-native';
import styles from './styles';
import PaywallBackground from 'src/assets/images/PaywallBackground.png';
import FeatureBox from './components/FeatureBox';
import PriceCheckBox from './components/PriceCheckBox';
import Button from 'src/components/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Cross} from 'src/assets/icons/Cross';
import {scaleHeight} from 'src/utils/DimensionEditor';
import {completeOnboarding} from 'src/store/onboardingSlice';
import {useAppDispatch} from 'src/hooks/useRedux';

interface FeatureBoxDataType {
  title: string;
  description: string;
  iconName: string;
}

const FeatureBoxData: FeatureBoxDataType[] = [
  {
    title: 'Unlimited',
    description: 'Plant Identify',
    iconName: 'Scanner',
  },
  {
    title: 'Faster',
    description: 'Process',
    iconName: 'Speedometer',
  },
  {
    title: 'Detailed',
    description: 'Plant Care',
    iconName: 'Scanner',
  },
];

const Paywall = () => {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();

  const [selectedCheckboxId, setSelectedCheckboxId] = useState<number | null>(
    null,
  );

  const onCrossButtonPress = () => {
    dispatch(completeOnboarding());
  };

  return (
    <View style={[styles.container]}>
      <ImageBackground
        source={PaywallBackground}
        style={styles.backgroundImage}>
        <Pressable
          style={[styles.crossIcon, {top: insets.top + scaleHeight(8)}]}
          hitSlop={{top: 4, bottom: 4, left: 4, right: 4}}
          onPress={onCrossButtonPress}>
          <Cross />
        </Pressable>
        <View style={styles.topContentContainer}>
          <Text style={styles.title}>
            PlantApp <Text style={styles.premiumText}>Premium</Text>
          </Text>
          <Text style={styles.description}>Access All Features</Text>
        </View>
        <FlatList
          horizontal
          renderItem={({item}) => (
            <FeatureBox
              title={item.title}
              description={item.description}
              iconName={item.iconName}
            />
          )}
          data={FeatureBoxData}
          contentContainerStyle={styles.featureBoxList}
          showsHorizontalScrollIndicator={false}
        />
      </ImageBackground>
      <View
        style={[styles.bottomContentContainer, {paddingBottom: insets.bottom}]}>
        <PriceCheckBox
          index={0}
          isChecked={selectedCheckboxId === 0}
          onPress={() => {
            setSelectedCheckboxId(0);
          }}
        />
        <PriceCheckBox
          index={1}
          isChecked={selectedCheckboxId === 1}
          onPress={() => {
            setSelectedCheckboxId(1);
          }}
        />
        <Button title="Try free for 3 days" onPress={() => {}} />
        <Text style={styles.text}>
          After the 3-day free trial period you’ll be charged ₺274.99 per year
          unless you cancel before the trial expires. Yearly Subscription is
          Auto-Renewable
        </Text>
        <Text style={styles.buttons}>Terms • Privacy • Restore</Text>
      </View>
    </View>
  );
};

export default Paywall;
