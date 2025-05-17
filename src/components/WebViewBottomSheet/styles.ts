import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height * 0.8,
  },
  webView: {
    flex: 1,
  },
});

export default styles;
