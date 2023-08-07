import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #ccc;
  height: 20px;
`;

const Notes = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);

  const openModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleClick = (e) => {
      const element = ref.current;
      if (element && !element.contains(e.target)) {
        closeModal();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <Button onClick={openModal}>Notes</Button>
      <dialog ref={ref} open={isModalOpen}>
        <button onClick={closeModal}>Close</button>
      </dialog>
    </>
  );
};

export default Notes;
