import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './styles';
import {BlurView} from '@react-native-community/blur';

interface PriceCheckBoxProps {
  isChecked: boolean;
  onPress: () => void;
  index: number;
}

const PriceCheckBox: React.FC<PriceCheckBoxProps> = ({
  isChecked,
  onPress,
  index,
}) => {
  return (
    <Pressable
      style={isChecked ? styles.selectedContainer : styles.container}
      onPress={onPress}>
      <View
        style={styles.blurContainer}
      />
      <View style={styles.contentContainer}>
        {index === 1 && (
          <View style={styles.saveMoneyContainer}>
            <Text style={styles.saveMoneyText}>Save 50%</Text>
          </View>
        )}
        {isChecked ? (
          <View style={styles.checkedCheckboxContainer} />
        ) : (
          <View style={styles.checkboxContainer} />
        )}
        <View style={styles.infoContainer}>
          <Text style={styles.title}>1 Month</Text>
          <Text style={styles.description}>
            $2.99/month,
            <Text style={styles.renewableText}> auto renewable</Text>
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PriceCheckBox;