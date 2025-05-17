import React from 'react';
import {Image, TextInput, View} from 'react-native';
import Icon from 'src/components/Icon';
import {scaleHeight, scaleWidth} from 'src/utils/DimensionEditor';
import styles from './styles';
import images from '../../../../assets/index';

interface PlainSearchBarProps {
  placeholder: string;
}

const PlainSearchBar: React.FC<PlainSearchBarProps> = ({placeholder}) => (
  <View style={styles.plainSearchBarContainer}>
    <Icon name="Search" height={scaleHeight(24)} width={scaleWidth(24)} />
    <TextInput
      style={styles.input}
      placeholderTextColor="grey"
      placeholder={placeholder}
    />
  </View>
);

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Image source={images.RightDirectionLeaf} />
      <Image source={images.LeftDirectionLeaf} />
      <View style={styles.searchBarParentContainer}>
        <PlainSearchBar placeholder="Search For Plants" />
      </View>
    </View>
  );
};

export default SearchBar;
