import styled from "styled-components";
import { selectChar } from "../reducers/characters";
import Notes from "./Notes";

const CharImg = styled.img`
  width: 400px;
`;

const CharName = styled.h2`
  text-align: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const CharData = ({ data }) => {
  return (
    <ul>
      {Object.values(data.moveset).map((move) => (
        <li key={move.name}>
          {move.name}:
          <ul>
            <li key={move.startup}>{move.startup} frames startup</li>
            <li key={move.damage}>{move.damage} damage</li>
          </ul>
        </li>
      ))}
    </ul>
  );
};

const FullChar = ({ char }) => {
  return (
    <>
      <CharName>{char.name}</CharName>
      <CharImg src={char.image} alt={char.name} />
      <Column>
        <CharData data={char} />
        <Notes data={char} />
      </Column>
    </>
  );
};

export default FullChar;
