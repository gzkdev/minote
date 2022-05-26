import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import NoteItemStyled from "./NoteItemStyled";
import { FaPen, FaEllipsisV } from "react-icons/fa";
import { UseNotesContext } from "../../NotesContext";

function NoteItem({ data }) {
  const { handleDeleteNote, handleAddToFavorites } = UseNotesContext();

  const handleOnclickDelete = () => {
    handleDeleteNote(data.id);
  };

  const handleOnclickFavorite = () => {
    handleAddToFavorites(data.id);
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
              <button onClick={handleOnclickFavorite}>Add to Favorites</button>
              <button onClick={handleOnclickDelete}>Delete</button>
            </div>
          </div>
        </div>
        {data.content && (
          <p className="note__content">
            {data.content.length > 140
              ? data.content.slice(0, 140) + "..."
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
}

export default NoteItem;
