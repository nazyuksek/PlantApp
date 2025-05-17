import {Dimensions} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

/**
 * A custom class implemented for responsive designs.
 * Takes 375x812 screen (given in Figma) as base, and calculates width and height for given number for current screen
 */
class DimensionEditor {
  protected SCALE_FACTOR_HORIZONTAL: number;
  protected SCALE_FACTOR_VERTICAL: number;

  constructor(screenWidth: number, screenHeight: number) {
    this.SCALE_FACTOR_HORIZONTAL = screenWidth / 375;
    this.SCALE_FACTOR_VERTICAL = screenHeight / 812;
  }

  scaleWidth = (width: number) => {
    return width * this.SCALE_FACTOR_HORIZONTAL;
  };

  scaleHeight = (height: number) => {
    return height * this.SCALE_FACTOR_VERTICAL;
  };
}

const PlantAppDimensionEditor = new DimensionEditor(
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
);

export const scaleWidth = PlantAppDimensionEditor.scaleWidth;
export const scaleHeight = PlantAppDimensionEditor.scaleHeight;

export {SCREEN_HEIGHT, SCREEN_WIDTH, PlantAppDimensionEditor};
