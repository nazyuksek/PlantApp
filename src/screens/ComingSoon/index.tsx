import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const ComingSoon = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Sorry to keep you waiting... 😔</Text>
      <Text style={styles.description}>But this feature is coming soon!</Text>
    </SafeAreaView>
  );
};

export default ComingSoon;
