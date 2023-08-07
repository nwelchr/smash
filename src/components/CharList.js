import { useSelector } from "react-redux";
import styled from "styled-components";
import Char from "./Char";

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const CharList = () => {
  const [chars, currCharId] = useSelector((state) => [
    state.chars.charData,
    state.chars.currCharId,
  ]);

  return (
    <Main>
      <Header>Choose your character</Header>
      <Row>
        {chars.map((char) => (
          <Char key={char.id} char={char} />
        ))}
      </Row>
    </Main>
  );
};

export default CharList;
