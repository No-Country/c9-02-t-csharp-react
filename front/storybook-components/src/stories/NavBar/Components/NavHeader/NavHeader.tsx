import { NavHeader_Styled } from '../../Styles/NavHeader_Styled';
import { NavHeaderProps } from './NavHeaderTypes';

function NavHeader(props: NavHeaderProps) {
  return (
    <NavHeader_Styled className='NavProfile'>
      <div className='NavProfile__UserSprite'>
        <img src={props.userImgURL} alt='' />
      </div>
      <div className='NavProfile__UserInfo'>
        <span className='NavProfile__UserInfo_Welcome'>Welcome Back,</span>
        <span className='NavProfile__UserInfo_Welcome_Name'>
          {props.name} {props.surname}
        </span>
        <span className='NavProfile__UserInfo_Credits'>
          Your Credits: <span className='NavProfile__UserInfo_Credits_Amount'>{props.credits}px</span>
        </span>
      </div>
    </NavHeader_Styled>
  );
}

export default NavHeader;
