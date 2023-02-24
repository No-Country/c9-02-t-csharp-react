import NavLinkObject from '../NavLink/NavLinkObject';
import { NavSeparator } from '../../Styles/NavSeparator';
import {
  IoHome,
  IoHomeOutline,
  IoHelpCircle,
  IoHelpCircleOutline,
  IoCard,
  IoCardOutline,
  IoListCircle,
  IoListCircleOutline,
  IoSend,
  IoSendOutline,
  IoIdCard,
  IoIdCardOutline,
  IoGift,
  IoGiftOutline,
  IoPerson,
  IoPersonOutline,
} from 'react-icons/io5';
import { IconType } from 'react-icons';
import { StatusIcon } from '../NavLink/NavLinkObjectTypes';
import NavLogoutButton from '../NavLogoutButton/NavLogoutButton';

const Icons = (OnCurrentPage: IconType, OnNonCurrentPage: IconType) => {
  return { OnCurrentPage, OnNonCurrentPage };
};

export const LinkGenerator = (to: string, label: string, statusIcon: StatusIcon) => (
  <NavLinkObject to={to} label={label} statusIcon={statusIcon} />
);

export const NavListElements = [
  <NavLinkObject
    label='Home'
    statusIcon={{
      OnCurrentPage: IoHome,
      OnNonCurrentPage: IoHomeOutline,
    }}
    to='/home'
  />,
  <NavLinkObject
    label='Profile'
    statusIcon={{
      OnCurrentPage: IoPerson,
      OnNonCurrentPage: IoPersonOutline,
    }}
    to='/profile'
  />,
  <NavLinkObject
    label='Help'
    statusIcon={{
      OnCurrentPage: IoHelpCircle,
      OnNonCurrentPage: IoHelpCircleOutline,
    }}
    to='/help'
  />,
  <NavSeparator orientation='horizontal' thickness='2px' />,
  <NavLinkObject
    label='My Balance'
    statusIcon={{
      OnCurrentPage: IoCard,
      OnNonCurrentPage: IoCardOutline,
    }}
    to='/balance'
  />,
  <NavLinkObject
    label='Activity'
    statusIcon={{
      OnCurrentPage: IoListCircle,
      OnNonCurrentPage: IoListCircleOutline,
    }}
    to='/activity'
  />,
  <NavLinkObject
    label='Send Money'
    statusIcon={{
      OnCurrentPage: IoSend,
      OnNonCurrentPage: IoSendOutline,
    }}
    to='/send'
  />,
  <NavLinkObject
    label='Payment Link'
    statusIcon={{
      OnCurrentPage: IoIdCard,
      OnNonCurrentPage: IoIdCardOutline,
    }}
    to='/link'
  />,
  <NavSeparator orientation='horizontal' thickness='2px' />,
  LinkGenerator('/rewards', 'Rewards', Icons(IoGift, IoGiftOutline)),
  <NavSeparator orientation='horizontal' thickness='4px' />,
  <NavLogoutButton
    to='login'
    label='Logout'
    confirmedLogoutAction={() => {
      confirm('Confirm again?');
    }}
  />,
];
