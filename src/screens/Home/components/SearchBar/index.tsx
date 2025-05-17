import React from 'react';
import {Image, TextInput, View} from 'react-native';
import Icon from 'src/components/Icon';
import {scaleHeight, scaleWidth} from 'src/utils/DimensionEditor';
import styles from './styles';
import images from '../../../../assets/index';
import {useAppDispatch} from 'src/hooks/useRedux';
import {setQuery} from 'src/store/plantsSlice';

interface PlainSearchBarProps {
  placeholder: string;
}

const PlainSearchBar: React.FC<PlainSearchBarProps> = ({placeholder}) => {
  const dispatch = useAppDispatch();

  const onChange = (text: string) => {
    dispatch(setQuery(text));
  };
  return (
    <View style={styles.plainSearchBarContainer}>
      <Icon name="Search" height={scaleHeight(24)} width={scaleWidth(24)} />
      <TextInput
        style={styles.input}
        placeholderTextColor="grey"
        placeholder={placeholder}
        onChangeText={onChange}
      />
    </View>
  );
};
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
