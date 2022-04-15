import { useContext } from "react";
import NotesContext from "../../NotesContext";
import NoteItem from "./NoteItem";
import NotesContainer from "./NotesContainer";

function Notes() {
  const { notes, deleteNote, updateNote, isGrid } = useContext(NotesContext);

  return (
    <>
      {notes.length > 0 ? (
        <NotesContainer layoutType={isGrid}>
          {notes.map((data, index) => (
            <NoteItem
              key={data.id}
              note={data}
              deleteNote={deleteNote}
              index={index}
              updateNote={updateNote}
            />
          ))}
        </NotesContainer>
      ) : (
        <h4>No notes yet</h4>
      )}
    </>
  );
}

export default Notes;
