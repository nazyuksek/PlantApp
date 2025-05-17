import React, {forwardRef, useMemo} from 'react';
import {Dimensions, View} from 'react-native';
import {WebView} from 'react-native-webview';
import BottomSheet from '@gorhom/bottom-sheet';
import styles from './styles';

type WebViewBottomSheetProps = {
  uri: string | null;
};

const {height} = Dimensions.get('window');

const WebViewBottomSheet = forwardRef<BottomSheet, WebViewBottomSheetProps>(
  ({uri}, ref) => {
    const snapPoints = useMemo(() => [height * 0.8, height], [height]);
    return (
      <BottomSheet ref={ref} snapPoints={snapPoints} enablePanDownToClose>
        <View style={styles.container}>
          {uri && (
            <WebView
              source={{uri}}
              style={styles.webView}
              startInLoadingState
            />
          )}
        </View>
      </BottomSheet>
    );
  },
);

export default WebViewBottomSheet;
