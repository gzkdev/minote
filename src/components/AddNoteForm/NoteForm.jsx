import { useContext, useRef } from "react";
import NotesContext from "../../NotesContext";
import { Link, useNavigate } from "react-router-dom";
import { NoteFormStyled } from "../styled";

function NoteForm() {
  const { addNote } = useContext(NotesContext);
  const noteTitle = useRef();
  const noteText = useRef();
  const navigate = useNavigate();

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
      noteTitle.current.value = noteText.current.value = "";
      navigate("/");
    }
  };

  return (
    <NoteFormStyled>
      <div className="note-form__top">
        <div className="note-form__container note-form__container--top">
          <Link to="/">Cancel</Link>
          <button className="note-form__btn" onClick={handleAddNote}>
            Save
          </button>
        </div>
      </div>
      <div className="note-form__body">
        <div className="note-form__container note-form__container--body">
          <input
            ref={noteTitle}
            className="note-form__input"
            type="text"
            placeholder="Note title"
          />
          <textarea
            ref={noteText}
            className="note-form__text"
            placeholder="Type something..."
          ></textarea>
        </div>
      </div>
    </NoteFormStyled>
  );
}

export default NoteForm;
