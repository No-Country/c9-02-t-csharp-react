import NavLinkObject from '../NavLink/NavLinkObject';
import { NavSeparator } from '../../Styles/NavSeparator';
import {
  IoHome,
  IoHomeOutline,
  IoPeopleCircle,
  IoPeopleCircleOutline,
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
} from 'react-icons/io5';
import { IconType } from 'react-icons';
import { StatusIcon } from '../NavLink/NavLinkObjectTypes';
import NavLogoutButton from '../NavLogoutButton/NavLogoutButton';

const Icons = (OnCurrentPage: IconType, OnNonCurrentPage: IconType) => {
  return { OnCurrentPage, OnNonCurrentPage };
};

export const LinkGenerator = (
  to: string,
  label: string,
  statusIcon: StatusIcon
) => <NavLinkObject to={to} label={label} statusIcon={statusIcon} />;

export const NavListElements = [
  LinkGenerator('/home', 'Home', Icons(IoHome, IoHomeOutline)),
  LinkGenerator(
    '/profile',
    'Profile',
    Icons(IoPeopleCircle, IoPeopleCircleOutline)
  ),
  LinkGenerator('/help', 'Help', Icons(IoHelpCircle, IoHelpCircleOutline)),
  <NavSeparator orientation='horizontal' />,
  LinkGenerator('/balance', 'My Balance', Icons(IoCard, IoCardOutline)),
  LinkGenerator(
    '/activity',
    'Activity',
    Icons(IoListCircle, IoListCircleOutline)
  ),
  LinkGenerator('/send', 'Send Money', Icons(IoSend, IoSendOutline)),
  LinkGenerator('/link', 'Payment Link', Icons(IoIdCard, IoIdCardOutline)),
  <NavSeparator orientation='horizontal' />,
  LinkGenerator('/rewards', 'Rewards', Icons(IoGift, IoGiftOutline)),
  <NavSeparator orientation='horizontal' />,
  <NavSeparator orientation='horizontal' />,
  <NavLogoutButton
    to='login'
    label='Logout'
    confirmedLogoutAction={() => {
      confirm('Confirm again?');
    }}
  />,
];
