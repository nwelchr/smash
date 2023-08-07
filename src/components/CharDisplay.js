import { useSelector } from "react-redux";
import styled from "styled-components";
import FullChar from "./FullChar";
import Sidebar from "./Sidebar";

const Main = styled.main`
  display: flex;
`;

const CharDisplay = ({ charId }) => {
  const char = useSelector((state) =>
    state.chars.charData.find((char) => char.id === charId)
  );

  return (
    <Main>
      <Sidebar />
      <FullChar key={char.id} char={char} />
    </Main>
  );
};

export default CharDisplay;
