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
  IoGlobe,
  IoGlobeOutline,
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
        label='About'
        statusIcon={{
          OnCurrentPage: IoHelpCircle,
          OnNonCurrentPage: IoHelpCircleOutline,
        }}
        to='/about'
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
      <NavSeparator orientation='horizontal' thickness='2px' />
      <NavLinkObject
        label='Services'
        statusIcon={{
          OnCurrentPage: IoGlobe,
          OnNonCurrentPage: IoGlobeOutline,
        }}
        to='/services'
      />
      <NavLinkObject
        label='Rewards'
        statusIcon={{
          OnCurrentPage: IoGift,
          OnNonCurrentPage: IoGiftOutline,
        }}
        to='/rewards'
      />
      <NavSeparator orientation='horizontal' thickness='6px' />
      <NavLogoutButton to='login' label='Logout' />
    </NavList_Styled>
  );
}

export default NavList;
