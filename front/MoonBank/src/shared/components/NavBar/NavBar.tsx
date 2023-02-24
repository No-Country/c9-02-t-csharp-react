import NavList from './Components/NavList/NavList';
import NavHeader from './Components/NavHeader/NavHeader';
import { PropsWithChildren } from 'react';
import { NavBar_Styled } from './Styles/NavBar_Styled';
import { NavBarProps } from './NavbarTypes';
import { NavListElements } from './Components/NavList/NavListElements';

function NavBar(props: PropsWithChildren<NavBarProps>) {
  const { children } = props;
  return (
    <NavBar_Styled className='MoonBank__NavBar' headerHeight={props.headerHeight}>
      <NavHeader name={props.name} surname={props.surname} credits={props.credits} userImgURL={props.userImgURL} />
      <NavList />
    </NavBar_Styled>
  );
}

export default NavBar;
