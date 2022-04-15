import NoteItemStyled from "./NoteItemStyled";
import NoteItemExpandedStyled from "./NoteItemExpandedStyled";
import { useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";

function NoteItem({ note, deleteNote, index, updateNote }) {
  const [isOpen, setIsOpen] = useState("");

  return (
    <LayoutGroup>
      <NoteItemStyled onClick={() => setIsOpen(note.id)} as={motion.div} layout>
        <h4>{note.title}</h4>
        <small>{note.date}</small>
      </NoteItemStyled>

      <AnimatePresence>
        {isOpen && (
          <NoteItemExpandedStyled
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
    </LayoutGroup>
  );
}

export default NoteItem;
