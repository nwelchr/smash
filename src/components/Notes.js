import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { saveNotes } from "../reducers/characters";

const ColumnForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: #ccc;
  height: 20px;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  align-self: flex-end;
`;

const NotesForm = ({ charId, initialNotes, closeModal }) => {
  const [notes, setNotes] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes("");
    dispatch(saveNotes(notes));
    closeModal();
  };
  return (
    <>
      <ColumnForm onSubmit={handleSubmit}>
        <label htmlFor="notes">Notes</label>
        <input
          defaultValue={initialNotes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notes"
        />
        <button type="submit">Save</button>
      </ColumnForm>
    </>
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
      {data.notes && <p>Notes: {data.notes}</p>}
      <Button onClick={openModal}>
        {data.notes ? "Edit Notes" : "Add Notes"}
      </Button>
      <dialog ref={ref} open={isModalOpen}>
        <ModalContainer>
          <CloseButton onClick={closeModal}>X</CloseButton>
          <NotesForm
            charId={data.id}
            initialNotes={data.notes}
            closeModal={closeModal}
          />
        </ModalContainer>
      </dialog>
    </>
  );
};

export default Notes;
