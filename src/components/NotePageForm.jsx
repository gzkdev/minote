import NotePageStyled from "../components/NotePage.styled";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

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
      date: new Date().toLocaleDateString,
    };
    handleSaveNote(newNote);
  };

  return (
    <NotePageStyled>
      <div className="top">
        <button>
          <FaArrowLeft />
        </button>
        <button onClick={() => deleteNote(data.id)}>Delete</button>
        <button onClick={handleOnclickSave}>Save</button>
      </div>
      <div className="body">
        <input type="text" value={noteTitle} onChange={handleNoteTitleChange} />
        <span>
          <b>Last modified:</b> {data.date}
        </span>
        <textarea
          value={noteContent}
          onChange={handleNoteContentChange}
        ></textarea>
      </div>
    </NotePageStyled>
  );
}
