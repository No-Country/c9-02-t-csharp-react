import { NavList_Styled } from '../../Styles/NavList_Styled';
import { MoonPiggyBank, MoonPiggyBankOutline } from '../../../../Icons/PiggyBank';
import {
  IoHome,
  IoHomeOutline,
  IoPerson,
  IoPersonOutline,
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
import { NavSeparator } from '../../Styles/NavSeparator';
import NavLinkObject from '../NavLink/NavLinkObject';
import NavLogoutButton from '../NavLogoutButton/NavLogoutButton';

function NavList() {
  return (
    <NavList_Styled>
      <NavLinkObject
        label='Home'
        statusIcon={{
          OnCurrentPage: IoHome,
          OnNonCurrentPage: IoHomeOutline,
        }}
        to='/home'
      />
      <NavLinkObject
        label='Profile'
        statusIcon={{
          OnCurrentPage: IoPerson,
          OnNonCurrentPage: IoPersonOutline,
        }}
        to='/profile'
      />
      <NavLinkObject
        label='Help'
        statusIcon={{
          OnCurrentPage: IoHelpCircle,
          OnNonCurrentPage: IoHelpCircleOutline,
        }}
        to='/help'
      />
      <NavSeparator orientation='horizontal' thickness='2px' />
      <NavLinkObject
        label='My Balance'
        statusIcon={{
          OnCurrentPage: IoCard,
          OnNonCurrentPage: IoCardOutline,
        }}
        to='/balance'
      />
      <NavLinkObject
        label='Activity'
        statusIcon={{
          OnCurrentPage: IoListCircle,
          OnNonCurrentPage: IoListCircleOutline,
        }}
        to='/activity'
      />
      <NavLinkObject
        label='Deposit'
        statusIcon={{
          OnCurrentPage: MoonPiggyBank,
          OnNonCurrentPage: MoonPiggyBankOutline,
        }}
        to='/deposit'
      />
      <NavLinkObject
        label='Send Money'
        statusIcon={{
          OnCurrentPage: IoSend,
          OnNonCurrentPage: IoSendOutline,
        }}
        to='/send'
      />
      <NavLinkObject
        label='Payment Link'
        statusIcon={{
          OnCurrentPage: IoIdCard,
          OnNonCurrentPage: IoIdCardOutline,
        }}
        to='/link'
      />
      <NavSeparator orientation='horizontal' thickness='2px' />
      <NavLinkObject
        label='Rewards'
        statusIcon={{
          OnCurrentPage: IoGift,
          OnNonCurrentPage: IoGiftOutline,
        }}
        to='/rewards'
      />
      <NavSeparator orientation='horizontal' thickness='4px' />
      <NavLogoutButton to='login' label='Logout' />
    </NavList_Styled>
  );
}

export default NavList;
