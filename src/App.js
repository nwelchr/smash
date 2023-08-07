import logo from "./logo.svg";
import "./App.css";
import CharList from "./components/CharList";
import CharDisplay from "./components/CharDisplay";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

function App() {
  const currCharId = useSelector((state) => state.chars.currCharId);

  return (
    <Container>
      {currCharId ? <CharDisplay charId={currCharId} /> : <CharList />}
    </Container>
  );
}

export default App;
