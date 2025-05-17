import {StyleSheet} from 'react-native';
import {scaleHeight} from 'src/utils/DimensionEditor';

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingBottom: scaleHeight(120),
  },
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    gap: scaleHeight(12),
  },
  subscriptionContainer: {
    paddingHorizontal: scaleHeight(24),
    gap: 24,
  },
});

const welcomeTextStyles = StyleSheet.create({
  container: {
    gap: scaleHeight(6),
  },
  title: {
    fontSize: scaleHeight(16),
    fontFamily: 'Rubik',
  },
  descText: {
    fontSize: scaleHeight(24),
    fontFamily: 'Rubik-Medium',
  },
});

export {styles, welcomeTextStyles};
