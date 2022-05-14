import { useState } from "react";
import { Link } from "react-router-dom";
import NotePageStyled from "../components/NotePage.styled";
import { FaArrowLeft } from "react-icons/fa";

export default function NotePageForm({ data, deleteNote, handleSaveNote }) {
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
    <NotePageStyled>
      <div className="note__top">
        <div className="note__top__container container">
          <Link to="/">
            <FaArrowLeft />
          </Link>
          <button
            className="note__btn note__btn--delete"
            onClick={handleOnclickDelete}
          >
            Delete
          </button>
          <button
            className="note__btn note__btn--save"
            onClick={handleOnclickSave}
          >
            Save
          </button>
        </div>
      </div>
      <div className="note__body">
        <div className="note__body__container">
          <input
            className="note__body__input"
            type="text"
            value={noteTitle}
            onChange={handleNoteTitleChange}
          />
          <textarea
            className="note__body__text"
            value={noteContent}
            onChange={handleNoteContentChange}
          ></textarea>
        </div>
      </div>
    </NotePageStyled>
  );
}
