import { NavLink, useLocation } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { NavLinkObjectActiveProps, NavLinkObjectProps } from './NavLinkObjectTypes';

const activeNav: NavLinkObjectActiveProps = (props) => {
  return props.isActive ? 'NavPage--active' : 'NavPage';
}; //*/

const CustomNavLink = (props: NavLinkObjectProps) => {
  const { OnCurrentPage, OnNonCurrentPage } = props.statusIcon;

  return (
    <NavLink to={props.to} className={activeNav}>
      {({ isActive }) => (
        <>
          <div className='PageIndicator' />
          {!isActive ? <OnNonCurrentPage /> : <OnCurrentPage />}
          <span>{props.label}</span>
        </>
      )}
    </NavLink>
  );
};

export default CustomNavLink;
