import type { NavLinkObjectProps } from './NavLinkObjectTypes';
import CustomNavLink from './CustomNavLink';
import { NavLink_Styled } from '../../Styles/NavLink_Styled';
import { useAppDispatch } from '../../../../../store/hooks';
import { setNavbarState } from '../../../../../store/features/NavBarSlice';

function NavLinkObject(props: NavLinkObjectProps) {
  // ---------- -------------- ---------- //
  // ---------- STARTING HOOKS ---------- //
  // ---------- -------------- ---------- //
  const dispatch = useAppDispatch();
  // ---------- ---------------- ---------- //
  // ---------- RETURN COMPONENT ---------- //
  // ---------- ---------------- ---------- //
  return (
    <NavLink_Styled onClick={() => dispatch(setNavbarState(false))}>
      <CustomNavLink to={props.to} label={props.label} statusIcon={props.statusIcon} />
    </NavLink_Styled>
  );
}

export default NavLinkObject;
