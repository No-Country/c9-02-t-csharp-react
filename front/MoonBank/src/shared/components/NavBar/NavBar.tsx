import NavList from './Components/NavList/NavList';
import NavHeader from './Components/NavHeader/NavHeader';
import { PropsWithChildren } from 'react';
import { NavBar_Styled } from './Styles/NavBar_Styled';
import { NavBarProps } from './NavbarTypes';
import { NavListElements } from './Components/NavList/NavListElements';
import { useAppSelector } from '../../../store/hooks';
function NavBar(props: NavBarProps) {
  const { rewardPoints, name, lastName } = useAppSelector(state => state.login)
  return (
    <NavBar_Styled className='MoonBank__NavBar' headerHeight={props.headerHeight} isToggled={props.isToggled}>
      <NavHeader name={name} surname={lastName} credits={rewardPoints} userImgURL={props.userImgURL} />
      <NavList />
    </NavBar_Styled>
  );
}

export default NavBar;
