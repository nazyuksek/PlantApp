import Svg, {Path} from 'react-native-svg';
import {IconProp} from './types';
import {scaleHeight, scaleWidth} from 'src/utils/DimensionEditor';

export const Home = ({color, height, width}: IconProp) => (
  <Svg
    width={width || scaleWidth(25)}
    height={height || scaleHeight(25)}
    fill="none"
    viewBox="0 0 25 25">
    <Path
      fill={color || '#28AF6E'}
      d="M6.5 3.042H18.51c-.067-.813-.56-1.256-1.47-1.256H7.961c-.901 0-1.404.443-1.461 1.256Zm-1.934 2.67h15.877c-.132-.878-.588-1.377-1.593-1.377H6.16c-1.006 0-1.461.5-1.594 1.377Zm1.12 16.61h13.629c1.973 0 3.006-.998 3.006-2.901v-9.303c0-1.903-1.033-2.9-3.006-2.9H5.685c-1.982 0-3.006.988-3.006 2.9v9.303c0 1.903 1.024 2.9 3.006 2.9Z"
    />
  </Svg>
);
