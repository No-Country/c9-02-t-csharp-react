import { IconType } from 'react-icons';
import { To } from 'react-router-dom';

export type StatusIcon = {
  OnNonCurrentPage: IconType;
  OnCurrentPage: IconType;
};

export type NavLinkStates = {
  isActive: boolean;
  isPending: boolean;
};

export type NavLinkObjectActiveProps = (props: NavLinkStates) => string;

export type NavLinkObjectProps = {
  id?: number;
  to: To;
  label: string;
  statusIcon: StatusIcon;
};
