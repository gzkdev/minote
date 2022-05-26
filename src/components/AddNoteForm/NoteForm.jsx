import { useContext, useRef } from "react";
import { NotesContext } from "../../NotesContext";
import { Link, useNavigate } from "react-router-dom";
import { NoteFormStyled } from "../styled";
import { FaTimes, FaBars } from "react-icons/fa";

function NoteForm({ toggleMenu }) {
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
      <div className="form__top">
        <div className="form__container form__container--top">
          <div className="menu__box">
            <button onClick={toggleMenu} className="menu__button">
              <FaBars />
            </button>
            <Link to="/">
              <FaTimes />
            </Link>
          </div>
          <button className="form__btn" onClick={handleAddNote}>
            Save
          </button>
        </div>
      </div>
      <div className="form__body">
        <div className="form__container form__container--body">
          <input
            ref={noteTitle}
            className="form__input"
            type="text"
            placeholder="Note title"
          />
          <textarea
            ref={noteText}
            className="form__text"
            placeholder="Type something..."
          ></textarea>
        </div>
      </div>
    </NoteFormStyled>
  );
}

export default NoteForm;
