import React from 'react';
import {Pressable, Text, View} from 'react-native';
import Icon from 'src/components/Icon';
import {scaleHeight, scaleWidth} from 'src/utils/DimensionEditor';
import styles from './styles';

interface SubscriptionProps {
  onPress: () => void;
}

interface LetterWithBadge {
  notificationCount?: number;
}

const LetterWithBadge: React.FC<LetterWithBadge> = ({
  notificationCount = 1,
}) => (
  <View>
    <Icon name="Letter" width={scaleWidth(32)} height={scaleHeight(24)} />
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{notificationCount}</Text>
    </View>
  </View>
);

const Subscription: React.FC<SubscriptionProps> = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <LetterWithBadge />
        <View>
          <Text style={styles.title}>FREE Premium Available</Text>
          <Text style={styles.desc}>Tap to upgrade your account!</Text>
        </View>
        <View style={styles.spacer} />
        <Icon
          name="ChevronLeft"
          height={scaleHeight(24)}
          width={scaleWidth(24)}
        />
      </View>
    </Pressable>
  );
};

export default Subscription;
