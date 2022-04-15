import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NoteItemStyled from "./NoteItemStyled";
import NoteItemExpanded from "./NoteItemExpanded";

function NoteItem({ note, deleteNote, index, updateNote }) {
  const [isOpen, setIsOpen] = useState("");

  return (
    <>
      <NoteItemStyled
        onClick={() => setIsOpen(note.id)}
        as={motion.div}
        layoutId={note.id}
        layout
      >
        <motion.h4 layout>{note.title}</motion.h4>
        <motion.small layout>{note.date}</motion.small>
      </NoteItemStyled>

      <AnimatePresence>
        {isOpen && (
          <NoteItemExpanded
            isOpen={isOpen}
            note={note}
            deleteNote={deleteNote}
            updateNote={updateNote}
            index={index}
            setIsOpen={setIsOpen}
            layout
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default NoteItem;
