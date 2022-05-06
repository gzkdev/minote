import { useState } from "react";
import AddNoteButton from "./AddNoteButton";
import LineIcon from "react-lineicons";
import NoteForm from "./NoteForm";

function AddNoteForm() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AddNoteButton onClick={() => setIsOpen(!isOpen)}>
        <LineIcon name="plus" />
      </AddNoteButton>
      {isOpen && <NoteForm isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}

export default AddNoteForm;
