import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import FeatureBoxBackground from 'src/assets/images/FeatureBoxBackground.png';
import styles from './styles';
import Icon from 'src/components/Icon';
import {scaleWidth} from 'src/utils/DimensionEditor';
import {IconKeys} from 'src/assets/icons';

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
      source={FeatureBoxBackground}
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
