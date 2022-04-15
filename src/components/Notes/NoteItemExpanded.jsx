import { useState } from "react";
import { motion } from "framer-motion";
import NoteItemExpandedStyled from "./NoteItemExpandedStyled";
import LineIcon from "react-lineicons";

function NoteItemExpanded({ note, updateNote, index, setIsOpen, deleteNote }) {
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);

  const handleUpdateNote = () => {
    updateNote(index, title, text, new Date().toLocaleDateString());
    setIsOpen("");
  };

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleTextChange = (e) => setText(e.target.value);

  return (
    <NoteItemExpandedStyled as={motion.div} layout layoutId={note.id}>
      <motion.div layout className="wrapper">
        <div className="top">
          <button className="back" onClick={() => setIsOpen((o) => !o)}>
            <LineIcon name="close" />
          </button>
          <button className="delete" onClick={() => deleteNote(note.id)}>
            Delete
          </button>
          <button onClick={handleUpdateNote}>Save</button>
        </div>
        <input type="text" value={title} onChange={handleTitleChange} />
        <span>{note.date}</span>
        <textarea type="text" value={text} onChange={handleTextChange} />
      </motion.div>
    </NoteItemExpandedStyled>
  );
}

export default NoteItemExpanded;
