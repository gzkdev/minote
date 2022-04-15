import { useState } from "react";
import { motion } from "framer-motion";
import LineIcon from "react-lineicons";
import NoteItemExpandedStyled from "./NoteItemExpandedStyled";

function NoteItemExpanded({
  note,
  updateNote,
  index,
  setIsOpen,
  deleteNote,
  isOpen,
}) {
  //   const [title, setTitle] = useState(note.title);
  //   const [text, setText] = useState(note.text);

  //   const handleUpdateNote = () => {
  //     updateNote(index, title, text, new Date().toLocaleDateString());
  //     setIsOpen("");
  //   };

  //   const handleTitleChange = (e) => setTitle(e.target.value);
  //   const handleTextChange = (e) => setText(e.target.value);

  return (
    <NoteItemExpandedStyled
      as={motion.div}
      layout
      layoutId={note.id}
      onClick={setIsOpen(!isOpen)}
    >
      <div className="wrapper">
        {/* <div className="top">
          <button onClick={() => setIsOpen((o) => !o)}>
            <LineIcon name="close" />
          </button>
          <button onClick={deleteNote(note.id)}>Delete</button>
          <button onClick={() => handleUpdateNote()}>Save</button>
        </div>
        <input type="text" value={note.title} onChange={handleTitleChange} />
        <textarea value={note.text} onChange={handleTextChange}></textarea> */}
        <h1>{note.title}</h1>
      </div>
    </NoteItemExpandedStyled>
  );
}

export default NoteItemExpanded;
