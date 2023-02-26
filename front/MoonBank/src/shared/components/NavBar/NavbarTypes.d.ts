import type { NavHeaderProps } from './Components/NavHeader/NavHeaderTypes';

export interface NavBarStyleProps {
  isToggled: boolean;
  headerHeight: string;
}

export interface NavBarProps extends NavHeaderProps, NavBarStyleProps {}
