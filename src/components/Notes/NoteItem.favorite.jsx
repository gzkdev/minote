import { Link } from "react-router-dom";
import NoteItemStyled from "./NoteItemStyled";
import { motion } from "framer-motion";
import { FaPen, FaEllipsisV } from "react-icons/fa";
import { UseNotesContext } from "../../NotesContext";

const NoteItemFavorite = ({ data }) => {
  const { handleDeleteNote, handleRemoveFromFavorites } = UseNotesContext();

  const handleOnClickDelete = () => {
    handleDeleteNote(data.id);
  };

  const handleOnClickRemove = () => {
    handleRemoveFromFavorites(data.id);
  };

  return (
    <NoteItemStyled as={motion.div} layout>
      <div className="note__body">
        <div className="note__header">
          <span className="note__title">{data.title}</span>
          <div className="note__actions">
            <button>
              <FaEllipsisV />
            </button>
            <div className="note__actions_menu">
              <button onClick={handleOnClickRemove}>
                Remove from favorites
              </button>
              <button onClick={handleOnClickDelete}>Delete</button>
            </div>
          </div>
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
        <Link
          title="Edit note"
          to={`note/${data.id}`}
          className="note__edit_btn"
        >
          <FaPen />
        </Link>
      </div>
    </NoteItemStyled>
  );
};

export default NoteItemFavorite;
