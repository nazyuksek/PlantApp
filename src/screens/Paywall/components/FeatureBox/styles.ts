import {StyleSheet} from 'react-native';
import {scaleHeight, scaleWidth} from 'src/utils/DimensionEditor';

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: 'contain',
    overflow: 'hidden',
    borderRadius: scaleWidth(14),
  },
  container: {
    paddingLeft: scaleWidth(16),
    width: scaleWidth(156),
    paddingVertical: scaleHeight(16),
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontFamily: 'Rubik-Medium',
    fontSize: scaleWidth(20),
    color: 'rgba(255, 255, 255, 1)',
  },
  description: {
    fontFamily: 'Rubik',
    fontSize: scaleWidth(13),
    color: 'rrgba(255, 255, 255, 0.7)',
    marginTop: scaleHeight(4),
  },
});

export default styles;
