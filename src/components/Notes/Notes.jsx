import { useContext } from "react";
import NotesContext from "../../NotesContext";
import NoteItem from "./NoteItem";
import EmptyState from "../EmptyState";
import NotesContainer from "./NotesContainer";

function Notes() {
  const { notes, deleteNote, updateNote } = useContext(NotesContext);

  return (
    <>
      {notes.length > 0 ? (
        <NotesContainer>
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
        <EmptyState />
      )}
    </>
  );
}

export default Notes;
