import styled from "styled-components";

type Props = {
    list: string[],
    backgroundColor: string
}

export const Navbar = ({ list = ["home", "about", "contact"], backgroundColor = '#ffff' }:Props) => {
  return (
    <Nav
    style={{backgroundColor}}
    >
      <ul>
        {list.map((listItem, index) => (
          <li key={index}>{listItem}</li>
        ))}
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: red;
  color: green;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
