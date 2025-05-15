import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';
import {scaleHeight, scaleWidth} from 'src/utils/DimensionEditor';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    paddingHorizontal: scaleWidth(24),
    paddingTop: scaleHeight(12),
    flex: 1,
  },
  title: {
    fontSize: scaleHeight(28),
    fontFamily: 'Rubik-Regular',
    color: colors.MainColor,
  },
  appTitle: {
    fontSize: scaleHeight(28),
    fontFamily: 'Rubik-Medium',
    color: colors.MainColor,
  },
  description: {
    fontSize: scaleHeight(16),
    fontFamily: 'Rubik-Regular',
    color: 'rgba(19, 35, 27, 0.7)',
    marginTop: scaleHeight(8),
  },
  plantImage: {
    height: scaleHeight(499),
    width: '100%',
    marginTop: scaleHeight(24),
  },
  termsOfUseContainer: {
    paddingHorizontal: 20,
    marginTop: scaleHeight(17),
  },
  termsOfUseText: {
    textAlign: 'center',
    color: 'rgba(89, 113, 101, 0.7)',
    fontSize: scaleHeight(11),
    fontFamily: 'Rubik-Regular',
  },
  link: {
    textDecorationLine: 'underline',
    color: 'rgba(89, 113, 101, 0.7)',
  },
});

export default styles;
