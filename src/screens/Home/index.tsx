import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {scaleHeight} from 'src/utils/DimensionEditor';
import {styles, welcomeTextStyles} from './styles';
import SearchBar from './components/SearchBar';
import Subscription from './components/Subscription';
import QuestionsList from './components/QuestionsList';
import Categories from './components/Categories';
import {useGetCategoriesQuery} from 'src/services/categoriesApi';
import {useGetQuestionsQuery} from 'src/services/questionsApi';
import {getTimeBasedEmojiAndTitle} from 'src/utils/Helper';
import {useAppSelector} from 'src/hooks/useRedux';

const WelcomeText = () => (
  <View style={welcomeTextStyles.container}>
    <Text style={welcomeTextStyles.title}>Hi, plant lover!</Text>
    <Text style={welcomeTextStyles.descText}>
      {getTimeBasedEmojiAndTitle()}
    </Text>
  </View>
);

const Home = () => {
  const {
    data: categoriesData,
    error: categoriesError,
    isLoading: isCategoriesLoading,
  } = useGetCategoriesQuery();
  const {
    data: questionsData,
    error: questionsError,
    isLoading: isQuestionsLoading,
  } = useGetQuestionsQuery();

  const plantQuery = useAppSelector(state => state.plants.query);

  const filteredCategories = categoriesData?.data.filter(category =>
    category.name.toLowerCase().startsWith(plantQuery.toLowerCase()),
  );

  return (
    <ScrollView
      bounces={false}
      nestedScrollEnabled
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
      showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.safeArea}>
        <View style={{paddingHorizontal: scaleHeight(24)}}>
          <WelcomeText />
        </View>
        <SearchBar />
        <View style={styles.subscriptionContainer}>
          <Subscription onPress={() => {}} />
        </View>
        <QuestionsList questionsData={questionsData} />
        <Categories
          categoriesData={
            !plantQuery ? categoriesData?.data : filteredCategories
          }
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
