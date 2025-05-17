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
  titleBeforeUnderlinedText: {
    fontSize: scaleHeight(28),
    fontFamily: 'Rubik-Medium',
    color: colors.MainColor,
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
    flex: 1,
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
    alignSelf: 'center',
    marginTop: scaleHeight(30),
    flexDirection: 'row',
    gap: scaleWidth(8),
    alignItems: 'center',
  },
  selectedPaginationDot: {
    width: scaleWidth(10),
    height: scaleHeight(10),
    backgroundColor: 'rgba(19, 35, 27, 1)',
    borderRadius: '100%',
  },
  paginationDot: {
    width: scaleWidth(6),
    height: scaleHeight(6),
    backgroundColor: 'rgba(19, 35, 27, 0.25)',
    borderRadius: '100%',
  },
});

export default styles;
