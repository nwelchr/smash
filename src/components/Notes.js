import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #ccc;
  height: 20px;
`;

const NotesForm = ({ charId, closeModal }) => {
  const [notes, setNotes] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(notes);
    setNotes("");
    closeModal();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="notes">Notes</label>
        <input
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notes"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

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
        <NotesForm charId={data.id} closeModal={closeModal} />
      </dialog>
    </>
  );
};

export default Notes;
