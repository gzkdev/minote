import NoteItemStyled from "./NoteItemStyled";
import { motion } from "framer-motion";
import { UseNotesContext } from "../../NotesContext";

const NoteItemTrash = ({ data }) => {
  const { handlePermanentDeleteNote, handleRestoreNote } = UseNotesContext();

  const handleOnClickDelete = () => {
    handlePermanentDeleteNote(data.id);
  };

  const handleOnClickRestore = () => {
    handleRestoreNote(data);
  };

  return (
    <NoteItemStyled as={motion.div} layout>
      <div className="note__body">
        <div className="note__header">
          <span className="note__title">{data.title}</span>
        </div>
        {data.content && (
          <p className="note__content">
            {data.content.length > 128
              ? data.content.slice(0, 128) + "..."
              : data.content}
          </p>
        )}
      </div>
      <div className="note__footer">
        <small>{data.date}</small>
        <div className="footer__actions">
          <button onClick={handleOnClickRestore}>Restore</button>
          <button onClick={handleOnClickDelete}>Delete</button>
        </div>
      </div>
    </NoteItemStyled>
  );
};

export default NoteItemTrash;
