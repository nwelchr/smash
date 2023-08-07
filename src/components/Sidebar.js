import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { selectChar } from "../reducers/characters";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #999999;
`;

const NavItem = styled.li`
  cursor: pointer;
  list-style-type: none;
  padding: 8px;
`;

const Sidebar = () => {
  const chars = useSelector((state) => state.chars.charData);
  const dispatch = useDispatch();
  return (
    <Nav>
      {chars.map((char) => (
        <NavItem key={char.id} onClick={() => dispatch(selectChar(char.id))}>
          {char.name}
        </NavItem>
      ))}
      <NavItem key={0} onClick={() => dispatch(selectChar(0))}>
        Home
      </NavItem>
    </Nav>
  );
};

export default Sidebar;
