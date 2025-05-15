import {Dimensions, StyleSheet} from 'react-native';
import colors from 'src/constants/colors';
import {scaleHeight, scaleWidth} from 'src/utils/DimensionEditor';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    paddingTop: scaleHeight(12),
    flex: 1,
  },
  titleWrapper: {
    marginTop: scaleHeight(24),
    justifyContent: 'center',
  },
  title: {
    fontSize: scaleHeight(28),
    fontFamily: 'Rubik-Medium',
    color: colors.MainColor,
  },
  underlinedTextContainer: {},
  underlinedText: {
    fontSize: scaleHeight(28),
    fontFamily: 'Rubik-Bold',
    color: colors.MainColor,
    textAlign: 'center',
  },
  underline: {
    position: 'absolute',
    bottom: scaleHeight(-24),
    left: 0,
    right: 0,
    width: '100%',
    resizeMode: 'contain',
  },
  phoneImage: {
    width: scaleWidth(261),
    height: scaleHeight(540),
    position: 'absolute',
    top: scaleHeight(56),
  },
  itemContainer: {
    width: Dimensions.get('window').width,
    paddingHorizontal: scaleWidth(24),
  },
  imagesContainer: {
    width: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    paddingHorizontal: scaleWidth(24),
  },
  topRightImage: {
    width: scaleWidth(150),
    height: scaleHeight(170),
    position: 'absolute',
    right: scaleWidth(-16),
  },
  bgImage: {
    height: scaleHeight(325),
    width: Dimensions.get('window').width,
    zIndex: -1,
  },
  paginationContainer: {
    height: 20,
    width: 20,
    backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: scaleHeight(30),
  },
});

export default styles;
