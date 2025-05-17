import {StyleSheet} from 'react-native';
import {scaleHeight, scaleWidth} from 'src/utils/DimensionEditor';

const styles = StyleSheet.create({
  plainSearchBarContainer: {
    backgroundColor: 'white',
    borderRadius: scaleHeight(12),
    borderColor: 'rgba(60,60,67,.25)',
    borderWidth: 1,
    paddingHorizontal: scaleWidth(18),
    paddingVertical: scaleHeight(10),
    flexDirection: 'row',
    gap: 4,
  },
  input: {
    width: '100%',
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  searchBarParentContainer: {
    top: 0,
    paddingHorizontal: scaleWidth(24),
    position: 'absolute',
    width: '100%',
    paddingTop: 16,
  },
});

export default styles;
