import {BlurView} from '@react-native-community/blur';
import React, {useRef, useState} from 'react';
import {FlatList, ImageBackground, Pressable, Text, View} from 'react-native';
import styles from './styles';
import {Question} from 'src/models/Question';
import type BottomSheet from '@gorhom/bottom-sheet';
import WebViewBottomSheet from 'src/components/WebViewBottomSheet';

interface QuestionsListProps {
  questionsData?: Question[];
}

interface QuestionItemProps {
  item: Question;
  onPress: () => void;
}

const QuestionItem: React.FC<QuestionItemProps> = ({item, onPress}) => (
  <Pressable onPress={onPress} style={styles.container}>
    <ImageBackground src={item.image_uri} style={styles.itemContainer}>
      <BlurView
        style={styles.blurContainer}
        blurType="dark"
        blurAmount={4}
        reducedTransparencyFallbackColor="white"
      />
      <View style={styles.textContainer}>
        <Text style={styles.question}>{item.title}</Text>
      </View>
    </ImageBackground>
  </Pressable>
);

const QuestionsList: React.FC<QuestionsListProps> = ({questionsData}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [selectedUri, setSelectedUri] = useState<string | null>(null);

  const handleOpenSheet = (uri: string) => {
    setSelectedUri(uri);
    bottomSheetRef.current?.snapToIndex(0);
  };

  return (
    <>
      <FlatList
        nestedScrollEnabled
        data={questionsData}
        keyExtractor={(_, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentStyle}
        renderItem={({item}) => (
          <QuestionItem
            item={item}
            onPress={() => {
              handleOpenSheet(item.uri);
            }}
          />
        )}
      />
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
        }}>
        <WebViewBottomSheet ref={bottomSheetRef} uri={selectedUri} />
      </View>
    </>
  );
};

export default QuestionsList;
