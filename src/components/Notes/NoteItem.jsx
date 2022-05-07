// import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import NoteItemStyled from "./NoteItemStyled";

function NoteItem({ data }) {
  // const [isOpen, setIsOpen] = useState("");

  return (
    <NoteItemStyled
      // onClick={() => setIsOpen(note.id)}
      as={motion.div}
      // layoutId={note.id}
      layout
    >
      <Link to={`notes/${data.id}`}>
        <div>
          <motion.h4 layout>{data.title}</motion.h4>
          <motion.small layout>{data.date}</motion.small>
        </div>
      </Link>
    </NoteItemStyled>
  );
}

export default NoteItem;
