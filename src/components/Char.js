import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { selectChar } from "../reducers/characters";

const CharImg = styled.img`
  width: 200px;
`;

const Char = ({ char }) => {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(selectChar(char.id))}>
      <h2>{char.name}</h2>
      <CharImg src={char.image} alt={char.name} />
    </div>
  );
};

export default Char;
