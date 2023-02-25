import { useState } from 'react';
import { MoonHeader_Styled } from '../../styles/MoonHeader_Styled';
import { IoNotificationsOutline, IoNotifications, IoMenu, IoClose } from 'react-icons/io5';
import type { MoonHeaderProps } from './MoonHeaderTypes';
import { NavBar } from '../../../NavBar';
import { useAppSelector, useAppDispatch } from '../../../../../store/hooks';
import { toggleNavbar } from '../../../../../store/features/NavBarSlice';

function MoonHeader(props: MoonHeaderProps) {
  // ---------- -------------- ---------- //
  // ---------- STARTING HOOKS ---------- //
  // ---------- -------------- ---------- //
  const dispatch = useAppDispatch();
  const NavbarState = useAppSelector((state) => state.NavbarReducer);
  const [NotiToggled, setNotiToggled] = useState(false);

  // ---------- ---------------- ---------- //
  // ---------- RETURN COMPONENT ---------- //
  // ---------- ---------------- ---------- //
  return (
    <>
      <MoonHeader_Styled className='MoonHeader'>
        <div className='Header__MenuBTN'>
          <input type='checkbox' name='' id='MBHeader_NavToggle' checked={NavbarState.isToggled} />
          <label htmlFor='MBHeader_NavToggle' onClick={() => dispatch(toggleNavbar())}>
            {props.isLogged ? !NavbarState.isToggled ? <IoMenu /> : <IoClose /> : <></>}
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
        isToggled={NavbarState.isToggled}
        headerHeight='55px'
        name=''
        surname=''
        userImgURL='https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg'
        credits={0}></NavBar>
    </>
  );
}

export default MoonHeader;
