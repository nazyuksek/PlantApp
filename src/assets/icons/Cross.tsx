import Svg, {Path} from 'react-native-svg';
import {IconProp} from './types';
import {scaleHeight, scaleWidth} from 'src/utils/DimensionEditor';

export const Cross = ({color, height, width}: IconProp) => (
  <Svg
    width={width || scaleWidth(24)}
    height={height || scaleHeight(24)}
    viewBox="0 0 24 24"
    fill="none">
    <Path
      fill={color || '#fff'}
      d="M8.201 16.278a.645.645 0 0 0 .889.005l2.91-2.91 2.905 2.91c.24.24.65.24.889-.005a.64.64 0 0 0 .005-.888l-2.905-2.91 2.905-2.906a.635.635 0 0 0-.005-.888.64.64 0 0 0-.889-.005L12 11.59 9.09 8.68a.645.645 0 0 0-.889.005.643.643 0 0 0-.005.883l2.91 2.91-2.91 2.916c-.23.229-.239.644.005.883Z"
    />
  </Svg>
);
