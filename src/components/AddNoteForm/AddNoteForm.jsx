import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import AddNoteButton from "./AddNoteButton";
import LineIcon from "react-lineicons";
import NoteForm from "./NoteForm";

function AddNoteForm() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LayoutGroup>
      <AddNoteButton
        as={motion.button}
        layoutId="form"
        onClick={() => setIsOpen(!isOpen)}
      >
        <LineIcon name="plus" />
      </AddNoteButton>

      <AnimatePresence>
        {isOpen && <NoteForm isOpen={isOpen} setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </LayoutGroup>
  );
}

export default AddNoteForm;
