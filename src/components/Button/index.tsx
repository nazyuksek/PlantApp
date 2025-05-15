import React from 'react';
import {Pressable, Text, ViewStyle} from 'react-native';
import {scaleHeight, scaleWidth} from 'src/utils/DimensionEditor';
import styles from './styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  titleColor?: string;
  style?: ViewStyle;
}

const DEFAULT_BUTTON_BACKGROUND_COLOR = 'rgba(40, 175, 110, 1)';
const DEFAULT_BUTTON_TEXT_COLOR = 'rgba(255, 255, 255, 1)';

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  backgroundColor = DEFAULT_BUTTON_BACKGROUND_COLOR,
  titleColor = DEFAULT_BUTTON_TEXT_COLOR,
  style,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, style, {backgroundColor}]}>
      <Text style={[styles.text, {color: titleColor}]}>{title}</Text>
    </Pressable>
  );
};

export default Button;
