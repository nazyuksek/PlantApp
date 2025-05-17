import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import styles from './styles';
import Icon from 'src/components/Icon';
import {scaleWidth} from 'src/utils/DimensionEditor';
import {IconKeys} from 'src/assets/icons';
import images from '../../../../assets/index';

interface FeatureBoxProps {
  title: string;
  description: string;
  iconName: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({
  title,
  description,
  iconName,
}) => {
  return (
    <ImageBackground
      source={images.FeatureBoxBackground}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Icon
          name={iconName as IconKeys}
          width={scaleWidth(36)}
          height={scaleWidth(36)}
        />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default FeatureBox;
