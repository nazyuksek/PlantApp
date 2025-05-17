import {FC} from 'react';
import Icons, {IconKeys} from 'src/assets/icons';
import {IconProp} from 'src/assets/icons/types';

export interface IIconProps extends IconProp {
  name: IconKeys;
}
const Icon: FC<IIconProps> = ({name, height, width, color}) => {
  const SelectedIcon = Icons[name];
  return <SelectedIcon height={height} width={width} color={color} />;
};

export default Icon;
