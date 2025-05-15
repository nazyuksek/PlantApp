import {StyleSheet} from 'react-native';
import {scaleHeight, scaleWidth} from 'src/utils/DimensionEditor';

const styles = StyleSheet.create({
  button: {
    paddingVertical: scaleHeight(12),
    borderRadius: scaleWidth(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: scaleHeight(16),
    fontWeight: 700,
    lineHeight: scaleHeight(24),
  },
});

export default styles;
