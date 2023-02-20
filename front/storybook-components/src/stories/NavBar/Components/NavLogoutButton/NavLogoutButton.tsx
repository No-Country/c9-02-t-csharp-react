import { NavLink_Styled } from '../../Styles/NavLink_Styled';
import { IoExitOutline } from 'react-icons/io5';
import { NavLogoutBTNProps } from './NavLogoutButtonTypes';
import { useNavigate } from 'react-router-dom';
import { MouseEventHandler } from 'react';

function NavLogoutButton(props: NavLogoutBTNProps) {
  const { confirmedLogoutAction } = props;
  // ---------- -------------- ---------- //
  // ---------- STARTING HOOKS ---------- //
  // ---------- -------------- ---------- //
  const NagivateTo = useNavigate();
  // ---------- -------------------- ---------- //
  // ---------- HANDLE ACTION EVENTS ---------- //
  // ---------- -------------------- ---------- //
  const OnClickLogoutHandler: MouseEventHandler<HTMLButtonElement> = (
    _event
  ) => {
    //TO DO Here
    if (confirm('Are you sure you want to log out now?')) {
      confirmedLogoutAction();
      NagivateTo(props.to, { replace: true });
    }
  }; //*/

  // ---------- ---------------- ---------- //
  // ---------- RETURN COMPONENT ---------- //
  // ---------- ---------------- ---------- //

  return (
    <NavLink_Styled>
      <button className='LogoutBTN' onClick={OnClickLogoutHandler}>
        <div className='PageIndicator' />
        <IoExitOutline />
        <span>{props.label}</span>
      </button>
    </NavLink_Styled>
  );
}

export default NavLogoutButton;
