import {ChevronLeft} from './ChevronLeft';
import {Cross} from './Cross';
import {Healthcare} from './Healthcare';
import {Home} from './Home';
import {Leaf} from './Leaf';
import {Letter} from './Letter';
import {Profile} from './Profile';
import Scanner from './Scanner';
import {Search} from './Search';
import {Speedometer} from './Speedometer';
import {TabBarScanner} from './TabBarScanner';

const Icons = {
  Scanner,
  ChevronLeft,
  Letter,
  Search,
  Healthcare,
  Leaf,
  Profile,
  TabBarScanner,
  Home,
  Speedometer,
  Cross,
};

export type IconKeys = keyof typeof Icons;
export default Icons;
