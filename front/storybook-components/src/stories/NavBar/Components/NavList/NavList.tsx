import { PropsWithChildren } from 'react';
import { NavList_Styled } from '../../Styles/NavList_Styled';

function NavList(props: PropsWithChildren) {
  return <NavList_Styled>{props.children}</NavList_Styled>;
}

export default NavList;
