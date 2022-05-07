import { useContext, useRef } from "react";
import { motion } from "framer-motion";
import NotesContext from "../../NotesContext";
import NoteFormStyled from "./NoteFormStyled";
import { FaTimes } from "react-icons/fa";

function NoteForm({ isOpen, setIsOpen }) {
  const { addNote } = useContext(NotesContext);
  const noteTitle = useRef();
  const noteText = useRef();

  const handleAddNote = () => {
    if (noteTitle.current.value) {
      let date = new Date();
      let data = {
        id: date.toISOString(),
        title: noteTitle.current.value,
        content: noteText.current.value,
        date: date.toLocaleDateString(),
      };
      addNote(data);
      setIsOpen(!isOpen);
      noteTitle.current.value = noteText.current.value = "";
    }
  };

  return (
    <NoteFormStyled as={motion.div}>
      <div className="wrapper">
        <div className="top">
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaTimes />
          </button>
          <button onClick={handleAddNote}>Save</button>
        </div>
        <input ref={noteTitle} type="text" placeholder="Title" />
        <textarea ref={noteText} placeholder="Type something"></textarea>
      </div>
    </NoteFormStyled>
  );
}

export default NoteForm;
