import {ChevronLeft} from './ChevronLeft';
import {Healthcare} from './Healthcare';
import {Home} from './Home';
import {Leaf} from './Leaf';
import {Letter} from './Letter';
import {Profile} from './Profile';
import Scanner from './Scanner';
import {Search} from './Search';
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
};

export type IconKeys = keyof typeof Icons;
export default Icons;
