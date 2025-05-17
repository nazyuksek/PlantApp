import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';
import {IconProp} from './types';

export const Letter = ({height, width, color, color2}: IconProp) => (
  <Svg
    width={width || '32'}
    height={height || '25'}
    viewBox="0 0 32 25"
    fill="none">
    <Path
      d="M18.6743 16.3548C17.8782 16.8855 16.9534 17.1661 16 17.1661C15.0466 17.1661 14.1219 16.8855 13.3258 16.3548L0.213062 7.61272C0.140312 7.56422 0.0694375 7.51366 0 7.46166V21.7865C0 23.4288 1.33281 24.7323 2.94581 24.7323H29.0541C30.6965 24.7323 31.9999 23.3995 31.9999 21.7865V7.46159C31.9304 7.51372 31.8594 7.56441 31.7864 7.61297L18.6743 16.3548Z"
      fill="url(#paint0_linear_1_2700)"
    />
    <Path
      d="M1.25312 6.05259L14.3658 14.7947C14.8622 15.1257 15.4311 15.2911 15.9999 15.2911C16.5689 15.2911 17.1378 15.1256 17.6342 14.7947L30.7469 6.05259C31.5316 5.52978 32 4.65478 32 3.71041C32 2.08659 30.6789 0.765594 29.0552 0.765594H2.94481C1.32106 0.765657 0 2.08666 0 3.71197C0 4.65478 0.4685 5.52978 1.25312 6.05259Z"
      fill="url(#paint1_linear_1_2700)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1_2700"
        x1="16"
        y1="7.46159"
        x2="31.8085"
        y2="30.5515"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor={color || '#F0D399'} />
        <Stop offset="1" stopColor={color2 || '#D9A846'} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1_2700"
        x1="16"
        y1="0.765595"
        x2="28.3343"
        y2="22.1859"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor={color || '#F0D399'} />
        <Stop offset="1" stopColor={color2 || '#D9A846'} />
      </LinearGradient>
    </Defs>
  </Svg>
);
