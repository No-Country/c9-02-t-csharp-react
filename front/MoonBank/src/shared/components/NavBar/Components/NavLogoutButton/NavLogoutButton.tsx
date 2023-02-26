import { NavLink_Styled } from '../../Styles/NavLink_Styled';
import { IoExitOutline } from 'react-icons/io5';
import { NavLogoutBTNProps } from './NavLogoutButtonTypes';
import { useNavigate } from 'react-router-dom';
import { MouseEventHandler } from 'react';
import { useAppDispatch } from '../../../../../store/hooks';
import { userLogout } from '../../../../../store/features/loginSlice';
import { setLogoutDialog } from '../../../../../store/features/UISlice';

function NavLogoutButton(props: NavLogoutBTNProps) {
  // ---------- -------------- ---------- //
  // ---------- STARTING HOOKS ---------- //
  // ---------- -------------- ---------- //
  const dispatch = useAppDispatch();
  // ---------- -------------------- ---------- //
  // ---------- HANDLE ACTION EVENTS ---------- //
  // ---------- -------------------- ---------- //
  const OnClickLogoutHandler: MouseEventHandler<HTMLButtonElement> = (_event) => {
    //TO DO Here
    dispatch(setLogoutDialog(true));
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
