import React from 'react';
import {FlatList, ImageBackground, Text} from 'react-native';
import {scaleHeight, scaleWidth} from 'src/utils/DimensionEditor';
import styles from './styles';
import {Category} from 'src/models/Category';
import {capitalizeFirstChar, removeDash} from 'src/utils/Helper';

interface CategoriesProps {
  categoriesData?: Category[];
}

interface GridItemProps {
  category: Category;
}

const GridItem: React.FC<GridItemProps> = ({category}) => {
  const formattedCategoryName = capitalizeFirstChar(removeDash(category.name));
  return (
    <ImageBackground
      imageStyle={{borderRadius: scaleHeight(12)}}
      src={category.image.url}
      style={styles.gridItem}>
      <Text style={styles.categoryTitle}>{formattedCategoryName}</Text>
    </ImageBackground>
  );
};

const Categories: React.FC<CategoriesProps> = ({categoriesData}) => {
  return (
    <FlatList
      nestedScrollEnabled
      scrollEnabled={false}
      keyExtractor={(_, index) => index.toString()}
      data={categoriesData}
      numColumns={2}
      columnWrapperStyle={{
        gap: scaleWidth(11),
      }}
      contentContainerStyle={styles.listContainer}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <GridItem category={item} />}
    />
  );
};

export default Categories;
