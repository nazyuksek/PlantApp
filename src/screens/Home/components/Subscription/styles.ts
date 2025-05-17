import {StyleSheet} from 'react-native';
import {scaleHeight, scaleWidth} from 'src/utils/DimensionEditor';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24201A',
    borderRadius: scaleHeight(12),
    paddingVertical: scaleHeight(13),
    paddingHorizontal: scaleWidth(20),
    width: '100%',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Rubik-Bold',
    fontSize: scaleHeight(16),
    color: 'white',
  },
  desc: {
    fontFamily: 'Rubik',
    fontSize: scaleHeight(13),
    color: 'white',
  },
  spacer: {
    flex: 1,
  },
  badge: {
    top: -scaleHeight(6),
    right: -scaleWidth(4),
    position: 'absolute',
    backgroundColor: '#E82C13',
    borderRadius: '100%',
    height: scaleHeight(15),
    width: scaleWidth(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: scaleHeight(8),
    fontWeight: '600',
    color: 'white',
  },
});

export default styles;
