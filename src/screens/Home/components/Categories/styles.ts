import {StyleSheet} from 'react-native';
import {scaleHeight, scaleWidth} from 'src/utils/DimensionEditor';

const styles = StyleSheet.create({
  listContainer: {
    gap: scaleWidth(11),
    paddingHorizontal: scaleWidth(24),
  },
  gridItem: {
    height: scaleHeight(158),
    width: scaleWidth(152),
    backgroundColor: 'rgba(244, 246, 246, 1)',
    borderRadius: scaleHeight(12),
    borderWidth: scaleHeight(0.5),
    borderColor: 'rgba(41, 187, 137, 0.18)',
  },
  categoryTitle: {
    paddingTop: scaleHeight(16),
    paddingLeft: scaleWidth(16),
    maxWidth: '90%',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(22),
    fontFamily: 'Rubik-Medium',
  },
});

export default styles;
