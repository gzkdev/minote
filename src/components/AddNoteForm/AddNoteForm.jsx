import { useState } from "react";
import AddNoteButton from "./AddNoteButton";
import NoteForm from "./NoteForm";
import { FaPlus } from "react-icons/fa";

function AddNoteForm() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AddNoteButton onClick={() => setIsOpen(!isOpen)}>
        <FaPlus />
      </AddNoteButton>
      {isOpen && <NoteForm isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}

export default AddNoteForm;
