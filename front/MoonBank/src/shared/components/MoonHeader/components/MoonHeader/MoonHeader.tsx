import { useState } from 'react';
import { MoonHeader_Styled } from '../../styles/MoonHeader_Styled';
import { IoNotificationsOutline, IoNotifications, IoMenu, IoClose } from 'react-icons/io5';
import type { MoonHeaderProps } from './MoonHeaderTypes';
import { NavBar } from '../../../NavBar';
import { useAppSelector, useAppDispatch } from '../../../../../store/hooks';
import { setLogoutDialog, setNavbarState, toggleNavbar } from '../../../../../store/features/UISlice';
import { DialogBox } from '../../../DialogBox';
import { useNavigate } from 'react-router';

function MoonHeader(props: MoonHeaderProps) {
  // ---------- -------------- ---------- //
  // ---------- STARTING HOOKS ---------- //
  // ---------- -------------- ---------- //
  const NavigateTo = useNavigate();
  const dispatch = useAppDispatch();
  const { isNavToggled, logoutDialogShow } = useAppSelector((state) => state.UIReducer);
  const [NotiToggled, setNotiToggled] = useState(false);

  // ---------- ---------------- ---------- //
  // ---------- RETURN COMPONENT ---------- //
  // ---------- ---------------- ---------- //
  return (
    <>
      <MoonHeader_Styled className='MoonHeader'>
        <div className='Header__MenuBTN'>
          <input type='checkbox' name='' id='MBHeader_NavToggle' checked={isNavToggled} />
          <label htmlFor='MBHeader_NavToggle' onClick={() => dispatch(toggleNavbar())}>
            {props.isLogged ? (
              !isNavToggled ? (
                <IoMenu className='HD__MenuLabel' />
              ) : (
                <IoClose className='HD__MenuLabel' />
              )
            ) : (
              <></>
            )}
          </label>
        </div>
        <div className='Header__AppName'>
          <span className='Header__AppName_Label'>{props.labelTitle}</span>
        </div>
        <div className='Header__NotificationBTN'>
          <input type='checkbox' name='' id='MBHeader_Notification' checked={NotiToggled} />
          <label htmlFor='MBHeader_Notification' onClick={() => setNotiToggled(!NotiToggled)}>
            {props.isLogged ? !NotiToggled ? <IoNotificationsOutline /> : <IoNotifications /> : <></>}
          </label>
        </div>
      </MoonHeader_Styled>
      <NavBar
        isToggled={isNavToggled}
        headerHeight='55px'
        name=''
        surname=''
        userImgURL='https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg'
        credits={0}
      />
      <DialogBox
        isOpen={logoutDialogShow}
        title='Log Out?'
        dialogType='information'
        message='Are you sure to close the current session?'
        to='/login'
        onConfirmAction={() => {
          dispatch(setNavbarState(false));
          dispatch(setLogoutDialog(false));
          NavigateTo('/login', { replace: true });
        }}
        onCancelAction={() => {
          dispatch(setLogoutDialog(false));
        }}
      />
    </>
  );
}

export default MoonHeader;
