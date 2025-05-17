import {StyleSheet} from 'react-native';
import {scaleHeight, scaleWidth} from 'src/utils/DimensionEditor';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    height: scaleHeight(490),
    width: '100%',
  },
  topContentContainer: {
    marginTop: scaleHeight(265),
    paddingHorizontal: scaleWidth(24),
  },
  crossIcon: {
    position: 'absolute',
    top: 0,
    right: scaleWidth(18),
    backgroundColor: 'rgba(44, 55, 50,1)',
    borderRadius: '100%',
  },
  bottomContentContainer: {
    paddingHorizontal: scaleWidth(24),
    backgroundColor: 'rgba(16, 30, 23, 1)',
    flex: 1,
    paddingTop: scaleHeight(24),
    gap: scaleHeight(16),
  },
  title: {
    fontSize: scaleHeight(30),
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Rubik-Bold',
  },
  premiumText: {
    fontFamily: 'Rubik-Light',
  },
  description: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: scaleHeight(17),
    fontFamily: 'Rubik-Light',
  },
  featureBoxList: {
    marginTop: scaleHeight(20),
    paddingLeft: scaleWidth(24),
    gap: scaleWidth(8),
  },
  text: {
    fontFamily: 'Rubik-Light',
    fontSize: scaleHeight(9),
    color: 'rgba(255, 255, 255, 0.52)',
    textAlign: 'center',
  },
  buttons: {
    fontFamily: 'Rubik',
    fontSize: scaleHeight(11),
    color: 'rgba(255, 255, 255, 0.5)',
    textAlign: 'center',
  },
});

export default styles;
