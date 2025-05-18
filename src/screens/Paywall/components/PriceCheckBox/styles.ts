import {StyleSheet} from 'react-native';
import {scaleHeight, scaleWidth} from 'src/utils/DimensionEditor';

const styles = StyleSheet.create({
  container: {
    borderWidth: scaleHeight(0.5),
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: scaleWidth(14),
  },
  selectedContainer: {
    borderWidth: scaleHeight(1.5),
    borderColor: 'rgba(40, 175, 110, 1)',
    borderRadius: scaleWidth(14),
  },
  blurView: {},
  title: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Rubik-Medium',
    fontSize: scaleHeight(16),
  },
  description: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontFamily: 'Rubik-Light',
    marginTop: scaleHeight(1),
  },
  renewableText: {
    fontFamily: 'Rubik',
  },
  blurContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: scaleHeight(60),
    borderRadius: scaleWidth(14),
    backgroundColor: 'rgba(26, 36, 32,1)'
  },
  contentContainer: {
    paddingVertical: scaleHeight(13),
    paddingHorizontal: scaleHeight(16),
    flexDirection: 'row',
    gap: scaleWidth(12),
    alignItems: 'center',
  },
  checkboxContainer: {
    width: scaleWidth(24),
    height: scaleWidth(24),
    backgroundColor: 'rgba(44, 55, 50, 1)',
    borderRadius: '100%',
  },
  checkedCheckboxContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: scaleWidth(24),
    height: scaleWidth(24),
    borderRadius: '100%',
    borderWidth: scaleWidth(8),
    borderColor: 'rgba(40, 175, 110, 1)',
  },
  infoContainer: {},
  saveMoneyContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(40, 175, 110, 1)',
    borderTopRightRadius: scaleWidth(14),
    borderBottomLeftRadius: scaleWidth(20),
    paddingVertical: scaleHeight(4),
    paddingHorizontal: scaleWidth(12),
  },
  saveMoneyText: {
    fontFamily: 'Rubik-Medium',
    fontSize: scaleHeight(12),
    color: 'rgba(255, 255, 255, 1)',
    lineHeight: scaleHeight(18),
  },
});

export default styles;
