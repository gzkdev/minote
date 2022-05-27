import { useState } from "react";
import { NoteFormStyled } from "./styled";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NotePageForm({
  data,
  deleteNote,
  handleSaveNote,
  toggleMenu,
}) {
  const [noteContent, setNoteContent] = useState(data.content);
  const [noteTitle, setNoteTitle] = useState(data.title);

  const handleNoteContentChange = (e) => {
    setNoteContent(e.target.value);
  };

  const handleNoteTitleChange = (e) => {
    setNoteTitle(e.target.value);
  };

  const handleOnclickSave = () => {
    const newNote = {
      title: noteTitle,
      content: noteContent,
      id: data.id,
      category: undefined,
      date: new Date().toLocaleDateString(),
    };
    handleSaveNote(newNote);
  };

  const handleOnclickDelete = () => {
    deleteNote(data.id);
  };

  return (
    <NoteFormStyled>
      <div className="form__top">
        <div className="form__container form__container--top">
          <div className="menu__box">
            <button className="body__text menu__button" onClick={toggleMenu}>
              <FaBars />
            </button>
            <button
              className="body__text menu__button"
              onClick={handleOnclickDelete}
            >
              <FaTimes />
            </button>
          </div>
          <button className="form__btn" onClick={handleOnclickSave}>
            Save
          </button>
        </div>
      </div>
      <div className="form__body">
        <div className="form__container form__container--body">
          <input
            value={noteTitle}
            className="body__text form__input"
            type="text"
            onChange={handleNoteTitleChange}
          />
          <textarea
            className="body__text form__text"
            value={noteContent}
            onChange={handleNoteContentChange}
          ></textarea>
        </div>
      </div>
    </NoteFormStyled>
  );
}
