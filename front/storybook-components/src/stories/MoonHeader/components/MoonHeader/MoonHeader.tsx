import { useState } from 'react';
import { MoonHeader_Styled } from '../../styles/MoonHeader_Styled';
import { IoNotificationsOutline, IoNotifications, IoMenu, IoClose } from 'react-icons/io5';
import type { MoonHeaderProps } from './MoonHeaderTypes';

function MoonHeader(props: MoonHeaderProps) {
  // ---------- -------------- ---------- //
  // ---------- STARTING HOOKS ---------- //
  // ---------- -------------- ---------- //
  const [NavToggled, setNavToggled] = useState(false);
  const [NotiToggled, setNotiToggled] = useState(false);

  // ---------- ---------------- ---------- //
  // ---------- RETURN COMPONENT ---------- //
  // ---------- ---------------- ---------- //
  return (
    <MoonHeader_Styled className='MoonHeader'>
      <div className='Header__MenuBTN'>
        <input type='checkbox' name='' id='MBHeader_NavToggle' checked={NavToggled} />
        <label htmlFor='MBHeader_NavToggle' onClick={() => setNavToggled(!NavToggled)}>
          {props.isLogged ? !NavToggled ? <IoMenu /> : <IoClose /> : <></>}
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
  );
}

export default MoonHeader;
