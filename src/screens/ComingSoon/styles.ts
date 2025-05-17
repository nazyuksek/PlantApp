import {StyleSheet} from 'react-native';
import {scaleHeight} from 'src/utils/DimensionEditor';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Rubik',
    fontSize: scaleHeight(16),
    textAlign: 'center',
  },
  description: {
    fontFamily: 'Rubik-Bold',
    fontSize: scaleHeight(24),
    marginTop: scaleHeight(8),
    textAlign: 'center',
    color: 'rgba(40, 175, 110, 1)',
  },
});

export default styles;
