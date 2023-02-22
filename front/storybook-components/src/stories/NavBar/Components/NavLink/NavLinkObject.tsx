import type { NavLinkObjectProps } from './NavLinkObjectTypes';
import CustomNavLink from './CustomNavLink';
import { NavLink_Styled } from '../../Styles/NavLink_Styled';

function NavLinkObject(props: NavLinkObjectProps) {
  return (
    <NavLink_Styled>
      <CustomNavLink to={props.to} label={props.label} statusIcon={props.statusIcon} />
    </NavLink_Styled>
  );
}

export default NavLinkObject;
