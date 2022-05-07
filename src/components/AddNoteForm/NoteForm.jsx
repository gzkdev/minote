import { useContext, useRef } from "react";
import NotesContext from "../../NotesContext";
import NoteFormStyled from "./NoteFormStyled";
import { Link, useNavigate } from "react-router-dom";

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
      <div className="wrapper">
        <div className="top">
          <Link to="/">Cancel</Link>
          <button onClick={handleAddNote}>Save</button>
        </div>
        <input ref={noteTitle} type="text" placeholder="Note title" />
        <textarea ref={noteText} placeholder="Type something..."></textarea>
      </div>
    </NoteFormStyled>
  );
}

export default NoteForm;
