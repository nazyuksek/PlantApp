import {StyleSheet} from 'react-native';
import {scaleHeight, scaleWidth} from 'src/utils/DimensionEditor';

const styles = StyleSheet.create({
  container: {
    borderRadius: scaleWidth(12),
    overflow: 'hidden',
  },
  contentStyle: {
    paddingLeft: scaleWidth(24),
    gap: 10,
  },
  title: {
    fontFamily: 'Rubik-Medium',
    fontSize: scaleHeight(15),
    lineHeight: 20,
  },
  itemContainer: {
    width: scaleWidth(240),
    height: scaleHeight(164),
    borderRadius: scaleWidth(12),
  },
  blurContainer: {
    height: scaleHeight(64),
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    borderBottomRightRadius: scaleWidth(12),
    borderBottomLeftRadius: scaleWidth(12),
  },
  textContainer: {
    marginTop: scaleHeight(100),
    paddingVertical: scaleHeight(11),
    paddingHorizontal: scaleHeight(13),
    width: scaleWidth(240),
    height: scaleHeight(164),
  },
  question: {
    color: 'white',
    fontSize: scaleHeight(15),
    lineHeight: scaleHeight(20),
    fontFamily: 'Rubik',
  },
});

export default styles;
